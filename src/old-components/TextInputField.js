import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

export default function TextInputField({
  name,
  validate,
  helperText,
  type,
  ...props
}) {
  const { register, watch, formState } = useFormContext()
  const error = formState.errors[name]?.message
  const value = watch(name)
  return (
    <>
      <label
        htmlFor={name}
        className="text-sm font-medium text-card-foreground dark:text-card-background"
      >
        {props.label}
      </label>
      {type === 'textarea' ? (
        <Textarea
          {...props}
          name={name}
          id={name}
          value={value}
          error={Boolean(error)}
          {...register(name, {
            validate,
          })}
        />
      ) : (
        <Input
          {...props}
          name={name}
          id={name}
          value={value}
          error={Boolean(error)}
          hel={error || helperText}
          {...register(name, {
            validate,
          })}
        />
      )}
    </>
  )
}

TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  helperText: PropTypes.string,
}
