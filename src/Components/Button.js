import React from 'react'

export default props => {
  const { text, disabled, onClick, } = props

  return <button
    className='btn btn-secondary'
    disabled={disabled}
    onClick={onClick}
    type='button'
  >
    {text}
  </button>
}
