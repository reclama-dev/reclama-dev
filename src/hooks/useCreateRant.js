import { useCallback } from 'react'
import { useMutation, gql } from '@apollo/client'

import { RANTS_QUERY } from './useRants'

const CREATE_RANT_MUTATION = gql`
mutation(
  $company: String!
  $description: String!
) {
  createRant(
    company: $company
    description: $description
  ) {
    id
    description
    company {
      id
      name
    }
    createdAt
  }
}
`

export default function useCreateRant() {
  const [createRant, rest] = useMutation(CREATE_RANT_MUTATION, {
    update: (cache, { data: { createRant: createdRant } }) => {
      try {
        const existingRants = cache.readQuery({ query: RANTS_QUERY })
        cache.writeQuery({
          query: RANTS_QUERY,
          variables: {
            pagination: {
              offset: -1,
            },
          },
          data: {
            rants: [
              createdRant,
              ...existingRants.rants,
            ],
          },
        })
      } catch (error) {
        // Suppressed error

      }
    },
  })

  const optimizedCreateRant = useCallback(async (...args) => {
    const mutationResult = await createRant(...args)
    return mutationResult?.data?.createRant
  }, [createRant])

  return [optimizedCreateRant, rest]
}
