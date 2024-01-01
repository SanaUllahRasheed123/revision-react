import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosTut = () => {
    const [userData, setUserData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setUserData(response.data)
        })
    },[])
  return (
    <>
    <h2>Axios tut</h2>

    {userData.map((data)=>{
        return(
            <div>{data.name}</div>
        )
    })}
    
    </>
  )
}

export default AxiosTut