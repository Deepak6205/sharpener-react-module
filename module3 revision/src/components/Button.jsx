import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button