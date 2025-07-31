import React from "react";

function change(){
    var a = document.getElementById('da')
    a.innerHTML = data + 1
}

const Hooks = ()=>{
    const [count,setCount] =useState(0)
    function Inc(){
        if (count<0){

        }else{
            setCount(conut+1)
        }
    }
    return(

        <>
                <h1 id='da'>{data}</h1>

        <button onclick={change}>click</button>
        </>
    )

}
export default Hooks ;