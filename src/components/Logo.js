import { Box } from '@mui/material'
import Image from 'next/image'

export default function Logo() {
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
      </span>
    </Box>
  )
}
