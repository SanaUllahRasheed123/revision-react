// import React, {memo} from 'react'


// const ChildA = ({Learning}) => {
//   console.log("ChildA mounted")
//   return (
//    <>

//    </>
//   )
// }

// export default memo(ChildA)


import React, { useState } from 'react'

const ChildA = (props) => {
  const [name, setName] = useState()
  function handleChange(e){
    e.preventDefault();
    props.getData(name)
  }
  return (
    <>
      <form onSubmit={handleChange}>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <button>Submit</button>
      </form>
    </>
  )
}

export default ChildA