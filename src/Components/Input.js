import React from 'react'
import { inputField, } from '../StyleSheet'


export default props => {
  const { disabled = false, onChange, value, } = props

  return <div className='input-group mb-3'>
    <input
      className='form-control'
      style={inputField}
      type='text'
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  </div>
}
