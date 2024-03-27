import PropTypes from 'prop-types'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ networkError }) => {
  if (networkError.response?.status === 401) {
    localStorage.clear()
    window.location.pathname = '/login'
  }
})

const httpLink = new HttpLink({
  uri: `${process.env.API_URL}/graphql`,
})

const authMiddleware = new ApolloLink((operation, forward) => forward(operation))

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          rants: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,

            merge(existing, incoming, { args }) {
              const offset = args?.offset || 0
              if (offset === -1 || args.company_id) {
                // Cache has been manipulated, manually overwrite
                return incoming
              }

              // Slicing is necessary because the existing data is
              // immutable, and frozen in development.
              const merged = existing ? existing.slice(0) : []
              for (let i = 0; i < incoming.length; i += 1) {
                merged[offset + i] = incoming[i]
              }
              return merged
            },
          },
        },
      },
    },
  }),
  link: concat(authMiddleware, from([errorLink, httpLink])),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})

export default function AuthApolloProvider({ children }) {
  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  )
}

AuthApolloProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
