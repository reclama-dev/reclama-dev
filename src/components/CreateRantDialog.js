import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useForm, FormProvider } from 'react-hook-form'
import { toast } from 'react-toastify'
import Dialog from './Dialog'
import DialogActions from './DialogActions'
import TextInputField from './TextInputField'
import useCreateRant from '../hooks/useCreateRant'

export default function CreateRantDialog({ open, onClose }) {
  const formMethods = useForm({
    defaultValues: {
      company: '',
      description: '',
    },
  })
  const {
    handleSubmit,
    formState,
    reset,
  } = formMethods

  const [createRant] = useCreateRant()

  const onSubmit = useCallback(async (data) => {
    await createRant({
      variables: data,
    })
    toast('Sua reclamação foi publicada!')
    reset()
    onClose()
  }, [createRant, reset, onClose])

  return (
    <Dialog
      title="Reclamar"
      open={open}
      onClose={onClose}
    >
      <FormProvider {...formMethods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            display="flex"
            flexDirection="column"
            minWidth="calc(min(500px, 80vw))"
            gap={2}
            p={2}
          >
            <TextInputField
              name="company"
              label="Empresa"
              color="primary"
              required
            />
            <TextInputField
              name="description"
              label="Reclamação"
              color="primary"
              multiline
              required
              minRows={5}
            />
          </Box>
          <DialogActions>
            <Box display="flex" width="100%" justifyContent="space-between">
              <Button
                onClick={onClose}
              >
                Cancelar
              </Button>
              <LoadingButton
                type="submit"
                variant="contained"
                color="primary"
                loading={formState.isSubmitting}
              >
                Reclamar
              </LoadingButton>
            </Box>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  )
}

CreateRantDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}
