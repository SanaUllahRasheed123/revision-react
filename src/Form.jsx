import React, { useEffect, useState } from 'react'

const Form = () => {
    const data = {name:"", email:"", password:""};
    const [flag, setFlag] = useState(false)
    const [inputData,setInputData] = useState(data)
    useEffect(()=>{
        console.log("Registered")
    },[flag])
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit (e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory")
        }else{
            setFlag(true)
        }

    }
  return (
    <>
    <pre>{(flag)?<h2>Hello, {inputData.name} you've registered successfully</h2>:""}</pre>
 <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}/>
        </div>
        <div>
            <input type='text' placeholder='Enter Your email' name='email' value={inputData.email} onChange={handleData}/>
        </div>
        <div>
            <input type='password' placeholder='Enter Your password' name='password' value={inputData.password} onChange={handleData}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>

    </>
   
  )
}

export default Form


// import React, { useEffect, useState } from 'react'

// const data = {name:"", email:"", password:""}
// console.log(data)



// const Form = () => {
//     const data = {name:"", email:"", password:""};
//     const [flag, setFlag] = useState(false)
//     const [inputData,setInputData] = useState(data)
//     useEffect(()=>{
//         console.log("Registered")
//     },[flag])
//     function handleData(e){
//         setInputData({...inputData,[e.target.name]:e.target.value})
//         console.log(inputData)
//     }
//     function handleSubmit (e){
//         e.preventDefault();
//         if(!inputData.name || !inputData.email || !inputData.password){
//             alert("All fields are Mandatory")
//         }else{
//             setFlag(true)
//         }

//     }

//   return (
//     <>
//     <pre>{(flag)?<h2>Hello, {inputData.name} you've registered successfully</h2>:""}</pre>
//     <form className='container' onSubmit={handleSubmit}>
//         <div className='header'>
//             <h1>Registration Form</h1>
//         </div>
//         <div>
//             <input type='text' placeholder='Enter your name' name='name' value={inputData.name} onChange={handleData}/>
//         </div>
//         <div>
//             <input type='text' placeholder='Enter your Email' name='email' value={inputData.email} onChange={handleData}/>
//         </div>
//         <div>
//             <input type='password' placeholder='Enter yout Password' name='password' value={inputData.password} onChange={handleData}/>
//         </div>
//         <div>
//             <button type='submit'>Submit</button>
//         </div>
//     </form>
//     </>
//   )
// }

// export default Form