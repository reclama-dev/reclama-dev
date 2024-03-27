import {
  Typography,
} from '@mui/material'

export default function AppTitle() {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: '64px',
        }}
      >
        Reclama.dev
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: '26px',
          mt: -3,
        }}
      >
        Onde o dev chora e a mãe não vê
      </Typography>
    </>
  )
}
