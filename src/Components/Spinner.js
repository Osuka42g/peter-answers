import React from 'react'

export default props => {
  const { disabled } = props

  if (disabled) {
    return <></>
  }

  return <div className='spinner-grow' role='status'>
    <span className='sr-only'>Loading...</span>
  </div>
}
