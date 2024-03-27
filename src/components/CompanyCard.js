import PropTypes from 'prop-types'
import Link from 'next/link'
import {
  Box,
  Typography,
  Card,
  Button,
} from '@mui/material'

export default function CompanyCard({ company }) {
  return (
    <Card
      elevation={5}
      key={company.id}
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        maxWidth: '420px',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p={2}
        gap={1}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
          }}
        >
          { company.name }
        </Typography>
        <Button
          component={Link}
          href={`/company/${company.id}`}
          variant="contained"
          color="primary"
        >
          Ver Reclamações
        </Button>
      </Box>
    </Card>
  )
}

CompanyCard.propTypes = {
  company: PropTypes.object,
}
