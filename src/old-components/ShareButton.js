import { Button } from '@/components/ui/button'
import copy from 'copy-to-clipboard'
import { Share } from 'lucide-react'
import PropTypes from 'prop-types'
import { toast } from 'sonner'

export default function ShareButton({ link }) {
  return (
    <Button
      className="flex flex-row gap-2 dark:text-accent-foreground/50 hover:dark:text-primary text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
      variant="outlined"
      onClick={async () => {
        const isWindows = navigator.userAgent.includes('Windows')
        const sharedLink = link
          ? `${window.location.origin}${link}`
          : window.location.href
        if (navigator.share && !isWindows) {
          navigator.share({ url: sharedLink })
          return
        }

        copy(sharedLink)
        toast.success('Link copiado para a área de transferência')
      }}
    >
      Compartilhar
      <Share size={16} />
    </Button>
  )
}

ShareButton.propTypes = {
  link: PropTypes.string,
}
