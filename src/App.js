import { useState } from 'react';
import './App.css';
// import Header from './Header';

function App() {
  const [count , setCount] = useState(false);
  return (

    <>
    <h1>The count is {count}</h1>
<button onClick={()=>{setCount(count+1)}}>+  {count}
</button>
{/* <Header name="Sana Ullah"/> */}
    </>
   
  );
}

export default App;
