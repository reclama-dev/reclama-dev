import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'

export default function ShareButton({ link }) {
  return (
    <Button
      variant="outlined"
      color="primary"
      endIcon={<SendIcon />}
      onClick={async () => {
        const isWindows = navigator.userAgent.includes('Windows')
        const sharedLink = link ? `${window.location.origin}${link}` : window.location.href
        if (navigator.share && !isWindows) {
          navigator.share({ url: sharedLink })
          return
        }

        copy(sharedLink)
        toast('Link da reclamação copiado!')
      }}
    >
      Compartilhar
    </Button>
  )
}

ShareButton.propTypes = {
  link: PropTypes.string,
}
