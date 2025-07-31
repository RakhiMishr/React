
import Hooks from '.Hooks.js';

const App =() =>{
  let time = new Date().toLocaleString()
  const[Ctime,setctime] =useState(time)
}

function update_time() {
  let nCtime = new Date().toLocaleTimeString()
  setctime(nCtime)

  return (
    <>
    <h1>{ctime}</h1>
    <button onClick={update_time}Time></button>
    </>
  );
}

export default App;
