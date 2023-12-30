import React, { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [activity, setActivity] = useState("")
  const [listData,setListData] = useState([])

  function addActivity(){
    // setListData([...listData, activity])
    // console.log(listData)
    setListData((listData)=>{
      const updatedList = [...listData,activity]
      console.log(updatedList)
      setActivity("")

      return updatedList;
    })

  }

  function removeActivity(i){
     const updatedListData = listData.filter((elem,id)=>{
      return i!=id;
     })
     setListData(updatedListData)
     
  }
  function removeAll(){
    setListData([])
  }
  return (
    <>
      <div className="container">
        <div className="header">TodoList</div>
        <input type="text" placeholder="Add activity" value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List {")"}</p>
        
        {listData!= [] && listData.map((data,i)=>{
          return(
            <>
              <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position" onClick={()=>removeActivity(i)}><button>remove(-)</button></div>
              </p>
            </>
          )
        })}

        {listData.length>=1 &&
          <button onClick={removeAll}>Remove all</button>
        }


      </div>
    </>
  );
};

export default Todo;
