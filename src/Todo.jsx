import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [activity, setActivity] = useState("")
  const [listData,setListData] = useState([])

  function addActivity(){
    setListData([...listData, activity])
    console.log(listData)

  }
  return (
    <>
      <div className="container">
        <div className="header">TodoList</div>
        <input type="text" placeholder="Add activity" value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
        <button onClick={addActivity}>Add</button>

      </div>
    </>
  );
};

export default Todo;
