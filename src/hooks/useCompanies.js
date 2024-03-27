import { useMemo } from 'react'
import { useQuery, gql } from '@apollo/client'

export const COMPANIES_QUERY = gql`
query Companies {
  companies {
    id
    name
  }
}
`

export default function useCompanies() {
  const { data, ...rest } = useQuery(COMPANIES_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  const companies = useMemo(() => (
    [...(data?.companies || [])]
  ), [data])

  return {
    ...rest,
    data: companies,
  }
}
