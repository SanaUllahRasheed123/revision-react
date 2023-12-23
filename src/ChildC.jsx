// import React from 'react'
// import {data , data1} from './App'

// const ChildC = () => {
//   return (

//     <>
//         <data.Consumer>
//             {
//                 (name)=>{
//                     return(
//                         <data1.Consumer>
//                             {
//                                 (age)=>{
//                                     return(
//                         <h1>My name is {name}  and my age is {age}</h1>

//                                     )
//                                 }
//                             }
//                         </data1.Consumer>
//                     )
//                 }
//             }
//         </data.Consumer>
//     </>
//   )
// }

// export default ChildC


import React, { useContext } from 'react'
import { data, data1 } from './App'
const ChildC = () => {
    const name = useContext(data);
    const gender = useContext(data1);
  return (
    <>
<h1>Hello i'm {name} and i'm {gender}</h1>
    </>
  )
}

export default ChildC