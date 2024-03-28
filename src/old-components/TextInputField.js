import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export default function TextInputField({
  name, validate, helperText, ...props
}) {
  const { register, watch, formState } = useFormContext()
  const error = formState.errors[name]?.message
  const value = watch(name)
  return (
    <TextField
      variant="outlined"
      color="white"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      value={value}
      error={Boolean(error)}
      helperText={error || helperText}
      {...register(name, {
        validate,
      })}
    />
  )
}

TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  helperText: PropTypes.string,
}
