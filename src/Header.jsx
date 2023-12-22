import React from 'react'

const Header = (props) => {
    console.log(props)
  return (
    <div>Hello Everyone I'm {props.name}</div>
  )
}

export default Header