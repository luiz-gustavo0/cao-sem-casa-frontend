/* eslint-disable react/prop-types */
import React, { createRef } from 'react'

import './styles.scss'

// eslint-disable-next-line react/prop-types
const Input = ({ label, name, type, register, required, errors, ...props }) => {
  const inputRef = createRef()
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        ref={inputRef}
        {...register(name, { required })}
        {...props}
      />
      <p className="error">{errors[name]?.message}</p>
    </div>
  )
}

export default Input
