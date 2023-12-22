import React from 'react'
import {data , data1} from './App'

const ChildC = () => {
  return (

    <>
        <data.Consumer>
            {
                (name)=>{
                    return(
                        <data1.Consumer>
                            {
                                (age)=>{
                                    return(
                        <h1>My name is {name}  and my age is {age}</h1>

                                    )
                                }
                            }
                        </data1.Consumer>
                    )
                }
            }
        </data.Consumer>
    </>
  )
}

export default ChildC