import axios from 'axios'
import React, { useState } from 'react'

const AxiosPost = () => {
    const data = {fname:"", lname:""}
    const [inputData, setInputData] = useState(data)

    const handleData = (e) => {
        setInputData({...inputData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
            console.log(response)
            //axios post methode done
           
        })
    }
    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response)
        })
    }
    const handleDelete = (e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
        })
    }
  return (
    <>
    <label style={{margin:"20px"}}>First Name</label>
    <input type='text' name='fname' placeholder='Enter your last name' value={inputData.fname} onChange={handleData}/><br></br>
    <label style={{margin:"20px"}}>Last Name</label>
    <input type='text' name='lname' placeholder='Enter your last name' value={inputData.lname} onChange={handleData}/><br></br>
    <button onClick={handleSubmit}>Submit</button>
    <button onClick={handleUpdate}>Update</button>
    <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default AxiosPost