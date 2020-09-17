import React from 'react'

const Input: React.FC = ({ ...rest }) => {
  return (
    <input
      type="text"
      {...rest}
    />
  )
}

export default Input