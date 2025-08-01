import React,{useState} from "react"
const App =() =>{
  let time = new Date().toLocaleTimeString()
  const[ctime,setctime] =useState(time)

function update_time() {
  let nCtime = new Date().toLocaleTimeString()
  setctime(nCtime)}



//   function backdate_time()
  return (
    <>
    <h1>{ctime}</h1>
    <button onClick={update_time}>Time</button>

    </>
    
  );
}

export default App;
