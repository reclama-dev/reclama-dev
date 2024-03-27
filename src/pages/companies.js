import {
  Box,
  Typography,
} from '@mui/material'
import Layout from '../components/Layout'
import useCompanies from '../hooks/useCompanies'
import CompanyCard from '../components/CompanyCard'
import LoadingFooter from '../components/LoadingFooter'

export default function Home() {
  const { data: companies, loading } = useCompanies()

  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
        width="100%"
        gap={1}
      >
        <Typography
          variant="h1"
        >
          Empresas:
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          py={4}
          gap={2}
        >
          {companies?.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
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
