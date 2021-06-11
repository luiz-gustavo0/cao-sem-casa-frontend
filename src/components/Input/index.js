/* eslint-disable react/prop-types */
import React from 'react'

import './styles.scss'

// eslint-disable-next-line react/prop-types
const Input = ({ label, name, type, register, errors, required, ...props }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register(name, { required })}
        {...props}
      />
      <p className="error">{errors[name]?.message}</p>
    </div>
  )
}

export default Input
