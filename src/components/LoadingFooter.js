import {
  Box,
  CircularProgress,
  Typography,
} from '@mui/material'

export default function LoadingFooter() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <CircularProgress size={48} />
      <Typography variant="h4">
        Carregando...
      </Typography>
    </Box>
  )
}
