import React from 'react'
import { Alert, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import { useField } from 'formik'
import PropTypes from 'prop-types'

/**
 * Componente devuelve valor por true ó false
 * @params String label
 * @params object props
 */

const CheckedFormik = ({ label, ...props }) => {

  const [field, meta] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Checkbox {...field} {...props} />} label={label} />
        {meta.touched && meta.error ? <Alert severity="error">{meta.error}</Alert> : null}
      </FormGroup>
    </>
  )
}

CheckedFormik.propTypes = {
  label: PropTypes.string.isRequired
}

export default CheckedFormik