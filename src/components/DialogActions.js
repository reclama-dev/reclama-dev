import { DialogActions as MUIDialogActions } from '@mui/material'

export default function DialogActions(props) {
  return (
    <MUIDialogActions
      {...props}
      sx={{ paddingX: 3, paddingY: 2 }}
    />
  )
}
