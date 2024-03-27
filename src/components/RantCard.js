import PropTypes from 'prop-types'
import Link from 'next/link'
import {
  Box,
  Typography,
  Card,
  Button,
} from '@mui/material'

export default function RantCard({ rant, hideCompanyButton }) {
  return (
    <Card
      elevation={5}
      key={rant.id}
      sx={{
        maxWidth: 410,
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
            justifyContent: 'center',
            textAlign: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 1,
          }}
        >
          { rant.company.name }
        </Typography>
        {!hideCompanyButton && (
          <Button
            component={Link}
            href={`/company/${rant.company.id}`}
            variant="contained"
            color="primary"
          >
            Ver Empresa
          </Button>
        )}
        <Box mt={1}>
          <Typography variant="body1" display="block">
            { rant.description }
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}

RantCard.propTypes = {
  rant: PropTypes.object,
  hideCompanyButton: PropTypes.bool,
}
