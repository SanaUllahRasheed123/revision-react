import React, { useState } from 'react'

const Form = () => {
    const [contactData, setContactData] = useState({name:"", email:""})
    const handleData = (e) => {

        if(e.target.value){
            setContactData({...contactData, name: e.target.value})
        }else{
            setContactData({...contactData, email: e.target.value})
        }
    }
    function handleAdd (){
        if(contactData.name ==="" || contactData.email === ""){
            alert("Please fill all the details")
        }
        console.log(contactData)
    }
  return (
    <>
    <div>
 <h1>Add Contacts</h1>
        <form>
        <label>First Name</label><br></br>
        <input type='text' placeholder='Enter your name' name='name' value={contactData.name} onChange={handleData}/><br></br>
        <label>Email</label><br></br>
        <input type='email' placeholder='Enter your email' name='email'value={contactData.email} onChange={{handleData}}/>
        </form>
        <button onClick={handleAdd}>Submit</button>
        </div>
    </>
   
    
  )
}

export default Form