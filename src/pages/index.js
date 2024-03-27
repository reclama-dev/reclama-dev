import { useRef, useEffect } from 'react'
import {
  Box,
  CircularProgress,
  Typography,
} from '@mui/material'
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback'
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll'
import Layout from '../components/Layout'
import Disclaimer from '../components/Disclaimer'
import RantCard from '../components/RantCard'
import useRants from '../hooks/useRants'

export default function Home() {
  const paginationRef = useRef(null)
  const { data: rants, fetchMore, loading } = useRants()

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
    <Layout title="Últimas reclamações">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
        width="100%"
        gap={1}
      >
        <Disclaimer />
        <Typography
          variant="h1"
        >
          Últimas reclamações:
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          py={4}
          gap={2}
        >
          {rants?.map((rant) => (
            <RantCard
              key={rant.id}
              rant={rant}
            />
          ))}
          {loading && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            pt={6}
            gap={2}
          >
            <CircularProgress size={48} />
            <Typography variant="h4">
              Carregando...
            </Typography>
          </Box>
          )}
        </Box>
      </Box>
    </Layout>
  )
}
