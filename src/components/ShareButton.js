import { Button } from '@mui/material'
import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'

export default function ShareButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={async () => {
        const isWindows = navigator.userAgent.includes('Windows')
        if (navigator.share && !isWindows) {
          navigator.share({ url: window.location.href })
          return
        }

        copy(window.location.href)
        toast('Link copied to clipboard!')
      }}
    >
      Share
    </Button>
  )
}
