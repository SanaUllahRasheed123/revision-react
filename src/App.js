// import { useEffect, useState } from 'react';
// import './App.css';
// // import Header from './Header';

// function App() {
//   const [count , setCount] = useState(false);
//   const [data,setData] = useState(50)

//   useEffect( ()=>{
//     console.log("I'm from useEffect Hook")
//   },[])

//   function updateData(){
//     setData(data-1)
//   }
//   return (

//     <>
//     <h1>The count is {count}</h1>
// <button onClick={()=>{setCount(count+1)}}>+  {count}
// </button>
// <button onClick={updateData}>The value is now {data}</button>
// {/* <Header name="Sana Ullah"/> */}
//     </>
   
//   );
// }

// export default App;



// // import React, { useRef, useState } from 'react'

// // const App = () => {
// //   const refElement = useRef("")
// //   const [name,setName] = useState("SanaUllah")

// //   // console.log(refElement);
// // function Reset(){
// //   setName("")
// //   refElement.current.focus();
// //   refElement.current.style.color = "green";
// // }


// // function updateInput(){
// //   refElement.current.style.color = "red";
// //   refElement.current.style.fontSize = "50px"
// //   refElement.current.style.padding = "20px"
// //   refElement.current.style.margin = "10px"
// //   // refElement.current.style.borderStyle = "outset"
// //   // refElement.current.style.borderWidth = "20px"
// //   // refElement.current.style.borderColor = "blue"
// //   refElement.current.style.border = "10px outset blue"
// //   refElement.current.style.textAlign = "center"

// // }
// //   return (

// //     <>
// //       <input ref={refElement} type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
// //       <button onClick={Reset}>Reset</button>
// //       <button onClick={updateInput}>Click here to change the color and size</button>
// //     </>
// //   )
// // }

// export default App



// import React, { useRef, useState } from 'react'

// const App = () => {
//   const refElement = useRef("")
//   const [name , setName] = useState("Sana Ullah")

//   function resetData(){
//     setName("")
//     refElement.current.focus();

//   }

//   function handleInput(){
//     refElement.current.value = "Congratulations for Successful Registration"
//     refElement.current.style.color = "Green"

//     refElement.current.style.fontSize = "50px"
//   }
//   return (
//     <>
//     <h1>Learning UseReferene Hook</h1>
//     <label>Enter your name</label>
//     <input ref={refElement} type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
//     <button onClick={resetData} >Reset your text now</button>
//     <button onClick={handleInput}>All the Styling will be apply after clicking this button</button>
//      </>
//   )
// }

// export default App



//  import React , { createContext } from 'react'
// import ChildA from './ChildA'

// const data = createContext();
// const data1 = createContext();
// const App = () => {
//   const name = "Sana Ullah";
//   const age = "29"
//   return (
//    <>
//     <data.Provider value= {name}>
//     <data1.Provider value={age}>
//       <ChildA/>
//       </data1.Provider>
//     </data.Provider>
//    </>

//   )
// }

// export default App
// export {data, data1};

// import React, { createContext } from 'react'
// import ChildA from './ChildA'

// const data = createContext();
// const data1 = createContext();

// const App = () => {
//   const name = "Sana Ullah";
//   const gender = "Male";
//   return (
//     <>
//       <data.Provider value={name}>
//       <data1.Provider value={gender}>
//       <ChildA/>
//       </data1.Provider>
//       </data.Provider>
//     </>
//   )
// }

// export default App

// export {data, data1}


// import React, { useMemo, useState } from 'react'
// // import './App.css'

// const App = () => {
//   const [add, setAdd] = useState(0)
//   const [minus, setMinus] = useState(100);
//  const multiplication = useMemo(function multiply(){
//   console.log("***************")
//   return add*10;
// },[add])
//   return (
//     <>
//     <h1>Happy Learning</h1>
//     {multiplication}
//       <button onClick={()=>setAdd(add+1)}>Addition</button>
//       <span>{add}</span><br></br>
//       <button onClick={()=>setMinus(minus-1)}>Subtraction</button>
//       <span>{minus}</span>
//     </>
//   )
// }

// export default App


// import React, { useCallback, useState } from 'react'
// import ChildA from './ChildA'
// const App = () => {
// const [add, setAdd] = useState(0)
// const [count, setCount] = useState(0)
// const Learning = useCallback(() => {
//   //some operation
// },[])

//   return (
//    <>
//    <ChildA Learning= {Learning}/>
//     <h1>{add}</h1>
//     <button onClick={()=>{setAdd(add+1)}}>+</button><br></br>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+2)}>Count here</button>

//    </>
//   )
// }

// export default App

import React, { useRef } from 'react'

const App = () => {
const refObject = useRef()
  // const [name, setName] = useState("")
  // const [pswd,setPswd] = useState("")

  // const handleChange = (e) => {
  //  if(e.target.name === "first-Name"){
  //   const capName = (e.target.value).toUpperCase()
  //   setName(capName)
  //  }else{
  //   setPswd(e.target.value)
  //  }
   

  // }

// function handlePassword(e){
//   console.log(e.target.value)
//   setPswd(e.target.value)


// }

function handleSubmit(e){
  e.preventDefault();
  console.log((refObject.current.value).toUpperCase())
}

  return (
    <>
      <form onSubmit={handleSubmit}>
      <h2>&#128517;</h2>
         <label>First name:</label><br/>
  <input type="text" ref={refObject}/><br/>
  <button>Submit</button>
  {/* <label>Password:</label><br/>
  <input type="password" value={pswd} name='password' onChange={handleChange}/><br/> */}
      </form>
    </>
  )
}

export default App