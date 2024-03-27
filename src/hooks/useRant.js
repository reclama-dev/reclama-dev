import { useMemo } from 'react'
import { useQuery, gql } from '@apollo/client'

export const RANT_QUERY = gql`
query Rant($id: ID!) {
  rant(id: $id) {
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

export default function useRant(rantId) {
  const { data, ...rest } = useQuery(RANT_QUERY, {
    skip: !rantId,
    variables: {
      id: rantId,
    },
  })

  const rant = useMemo(() => (
    data?.rant
  ), [data])

  return {
    ...rest,
    data: rant,
  }
}
