import { useRef, useEffect } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback'
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll'
import Layout from '../../components/Layout'
import RantCard from '../../components/RantCard'
import Disclaimer from '../../components/Disclaimer'
import Sponsor from '../../components/Sponsor'
import useRants from '../../hooks/useRants'
import useRant from '../../hooks/useRant'
import LoadingFooter from '../../components/LoadingFooter'

export default function Home() {
  const paginationRef = useRef(null)
  const router = useRouter()
  const { rantId } = router.query
  const { data: rant, loadinRant } = useRant(rantId)
  const { data: rants, loading, fetchMore } = useRants({ skip: !rant })

  useEffect(() => {
    paginationRef.current = {
      loading,
      fetchMore: () => fetchMore(),
    }
  }, [loading, fetchMore])

  const onWindowScroll = useWindowScroll()
  onWindowScroll(useThrottledCallback(() => {
    if (!paginationRef.current) {
      return
    }

    if (paginationRef.current.loading) {
      return
    }

    const viewportHeight = window.innerHeight
    const { scrollHeight } = document.documentElement
    const scrollBottom = window.scrollY + viewportHeight
    const shouldFetchMore = (scrollHeight - scrollBottom) < viewportHeight
    if (shouldFetchMore) {
      paginationRef.current.fetchMore()
    }
  }, [], 100))

  return (
    <Layout title="Reclamação">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
        width="100%"
        gap={1}
      >
        <Disclaimer />
        <Sponsor />
        <Typography
          variant="h1"
        >
          Reclamação:
        </Typography>
        {rant && (
          <RantCard
            rant={rant}
          />
        )}
        {loadinRant && <LoadingFooter />}
        {rant && (
          <>
            <Typography
              variant="h1"
              sx={{
                marginTop: '32px',
              }}
            >
              Últimas Reclamações:
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              py={4}
              gap={2}
            >
              {rants?.map((rantItem) => (
                <RantCard
                  key={rantItem.id}
                  rant={rantItem}
                />
              ))}
              {loading && (
                <LoadingFooter />
              )}
            </Box>
          </>
        )}
      </Box>
    </Layout>
  )
}
