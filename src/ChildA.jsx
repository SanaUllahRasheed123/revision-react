import React, {memo} from 'react'


const ChildA = ({Learning}) => {
  console.log("ChildA mounted")
  return (
   <>

   </>
  )
}

export default memo(ChildA)