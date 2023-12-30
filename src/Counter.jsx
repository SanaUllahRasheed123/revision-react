import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state , action)=>{
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        default:
            return state
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
    <h1>useReducer Hook</h1>

    <h1>{count}</h1>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Drcrement</button>
    </div>
  )
}

export default Counter