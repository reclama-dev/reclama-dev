import { useMemo } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import RantCard from '../../components/RantCard'
import Disclaimer from '../../components/Disclaimer'
import useRants from '../../hooks/useRants'
import LoadingFooter from '../../components/LoadingFooter'

export default function Home() {
  const router = useRouter()
  const { companyId } = router.query
  const { data: companyRants, loading } = useRants({ companyId })
  const rants = useMemo(() => (
    companyRants.filter((r) => r.company.id === companyId)
  ), [companyId, companyRants])

  return (
    <Layout title="Empresa">
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
          Reclamações:
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
              hideCompanyButton
            />
          ))}
          {loading && (
            <LoadingFooter />
          )}
        </Box>
      </Box>
    </Layout>
  )
}
