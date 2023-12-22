import { useEffect, useState } from 'react';
import './App.css';
// import Header from './Header';

function App() {
  const [count , setCount] = useState(false);
  const [data,setData] = useState(50)

  useEffect( ()=>{
    console.log("I'm from useEffect Hook")
  },[])

  function updateData(){
    setData(data-1)
  }
  return (

    <>
    <h1>The count is {count}</h1>
<button onClick={()=>{setCount(count+1)}}>+  {count}
</button>
<button onClick={updateData}>The value is now {data}</button>
{/* <Header name="Sana Ullah"/> */}
    </>
   
  );
}

export default App;
