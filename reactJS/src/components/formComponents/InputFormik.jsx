import React from 'react'
import { useField } from "formik"
import { Alert, TextField } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * Componente que recibe info del usuario y devuelve los valores
 * @params String label
 * @params String extra 
 * @params String type
 * @params object props
 */

const InputFormik = ({ label, extra, type, required, showAlert, ...props }) => {

  const [field, meta] = useField(props)

  return (
    <>
      <TextField margin="normal" fullWidth id={extra} label={label} name={extra} type={type} autoComplete={extra} autoFocus
        required={required}
        {...field}
      />
      {meta.touched && meta.error && showAlert ? <Alert severity="error">{meta.error}</Alert> : null}
    </>
  )
}

InputFormik.propTypes = {
  label: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default InputFormik