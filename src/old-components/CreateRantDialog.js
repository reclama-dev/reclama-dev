import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import {} from '@radix-ui/react-dialog'
import PropTypes from 'prop-types'
import { useState, useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import useCreateRant from '../hooks/useCreateRant'
import TextInputField from './TextInputField'

export default function CreateRantDialog({ inDrawer }) {
  const [open, setOpen] = useState(false)
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

      setOpen(false)
      reset()
      toast.success('Reclamação criada com sucesso!')
    },
    [createRant, reset],
  )

  return (
    <Dialog
      open={open}
      onOpenChange={newOpen => setOpen(newOpen)}
    >
      <DialogTrigger asChild>
        <Button
          variant="default"
          className={cn(
            'bg-accent max-h-9 dark:text-foreground text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md text-sm font-medium transition-colors',
            { 'size-full max-h-none': inDrawer },
          )}
        >
          Reclamar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Reclamar</DialogTitle>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 p-2">
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
                type="textarea"
              />
            </div>
            <DialogFooter className={'pt-4'}>
              <div className="flex justify-between w-full">
                <DialogClose asChild>
                  <Button
                    variant="destructive"
                    className="text-destructive-foreground dark:text-destructive-foreground"
                  >
                    Cancelar
                  </Button>
                </DialogClose>

                <Button
                  type="submit"
                  variant="default"
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting ? 'Carregando...' : 'Reclamar'}
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
