import { useMemo, useState, useCallback } from 'react'
import { useQuery, gql } from '@apollo/client'

const PAGE_SIZE = 200

export const RANTS_QUERY = gql`
query Rants($limit: Int, $offset: Int, $company_id: ID) {
  rants(limit: $limit, offset: $offset, company_id: $company_id) {
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

export default function useRants({ companyId } = {}) {
  const [hasMoreResults, setHasMoreResults] = useState(true)
  const { data, ...rest } = useQuery(RANTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: PAGE_SIZE,
      company_id: companyId,
    },
  })

  const rants = useMemo(() => (
    [...(data?.rants || [])]
  ), [data])

  const fetchMore = useCallback(async () => {
    if (!hasMoreResults) {
      return null
    }

    const response = await rest.fetchMore({
      variables: {
        offset: rants.length,
        limit: PAGE_SIZE,
        company_id: companyId,
      },
    })
    const resultLength = response.data?.rants?.length
    setHasMoreResults(resultLength === PAGE_SIZE)
    return response
  }, [rants.length, hasMoreResults, companyId, rest])

  return {
    ...rest,
    data: rants,
    fetchMore,
    hasMoreResults,
  }
}
