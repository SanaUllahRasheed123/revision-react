import React, { useState } from 'react'

const AgeValidation = () => {
    const [isAgeValid, setIsAgeValid] = useState(false)

  // ************************ if else condtion**********************


    // if(isAgeValid){
    //     return (
    //         <div>You can vote</div>
    //       )


    // }else
    // return(
    //     <div>You cannot vote</div>
    // )

  // ************************ Variable Element condtion**********************

  // let age;
  // if(isAgeValid){
  //    age = <div>U can vote</div>
  // }
  // else{
  //   age= <h1>You cannot vote</h1>
  // }
  // return(
  //  <>
  //    {age} 
  //  </>
  // )


  // *********************** Ternary Operator condtion**********************


return(
    <>
        {isAgeValid? <div>you can vote</div>: <div>You canot vote</div>}
    </>
)

  // ************************ Short Circuit Operator**********************
  //short circuit operator use only when we have to display only true condition, it not works 
  //for false condition

  // return(
  //   <>
  //       {isAgeValid && <div>You can vote</div>}
  //   </>
  // )

 
}

export default AgeValidation