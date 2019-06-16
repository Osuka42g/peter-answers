import React from 'react'
import { inputField, } from '../StyleSheet'


export default props => {
  const { disabled = false, onChange, title, value, } = props

  return <div className='input-group mb-3'>
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon3">{title}</span>
    </div>
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
