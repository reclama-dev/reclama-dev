import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  Slide,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />)

export default function AppDialog({
  title,
  open,
  onClose,
  children,
  ...props
}) {
  return (
    <Dialog
      maxWidth="md"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      {...props}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
          <span>{ title }</span>
          <IconButton
            aria-label="close"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      { children}
    </Dialog>
  )
}

AppDialog.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
}
