import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {} from '@radix-ui/react-dialog'
import { redirect } from 'next/dist/server/api-utils'
import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import useCreateRant from '../hooks/useCreateRant'
import TextInputField from './TextInputField'

export default function CreateRantDialog({ open, onClose }) {
  const formMethods = useForm({
    defaultValues: {
      company: '',
      description: '',
    },
  })
  const { handleSubmit, formState, reset } = formMethods

  const [createRant] = useCreateRant()

  const onSubmit = useCallback(
    async (data) => {
      const rant = await createRant({
        variables: data,
      })
      toast('Reclamação criada com sucesso!', { type: 'success' })
      redirect(`/rant/${rant.id}`)
      reset()
      onClose()
    },
    [createRant, reset, onClose],
  )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-accent max-h-9 dark:text-foreground text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Reclamar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Reclamar</DialogTitle>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col min-w-[500px] gap-2 p-2">
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
            </div>
            <DialogFooter>
              <div className="flex justify-between w-full">
                <DialogClose asChild>
                  <Button onClick={onClose}>Cancelar</Button>
                </DialogClose>

                <Button
                  type="submit"
                  variant="default"
                >
                  Reclamar
                </Button>
              </div>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

CreateRantDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}
