import { Box, useTheme } from '@mui/material'
import Image from 'next/image'

export default function Logo() {
  const theme = useTheme()

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Image
        src="/images/favicon.png"
        width={32}
        height={32}
        alt="Reclama Dev Logo"
        style={{
          maxHeight: '100%',
          objectFit: 'contain',
          borderRadius: '8px',
        }}
      />
      <span>
        Reclama.dev
        <Box
          display="inline"
          sx={{
            [theme.breakpoints.down('md')]: {
              display: 'none',
            },
          }}
        >
          <small style={{ fontSize: '14px' }}>
            {' '}
            (onde o dev chora e a mãe não vê)
          </small>
        </Box>
      </span>
    </Box>
  )
}
