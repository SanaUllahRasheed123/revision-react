import React from 'react'

const Name = ({fname,lname}) => {
    // const [fname,lname] = props;
  return (
    <div>{fname}<hr></hr>{lname}</div>
  )
}

export default Name