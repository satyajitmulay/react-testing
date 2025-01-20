import { useState } from "react"


export function State() {

 console.log("Parent Component rendered");

  const [count, setCount] = useState(0);

  const handleButtonclick = () =>{
    setCount(()=> count + 1);
  }
  return (
    <div className="main-div">
      <h1>{count}</h1>
      <button onClick={handleButtonclick}>Increment</button>
      <ChildComp count={count}/>
    </div>
  )
}


export function ChildComp({count}){
  console.log("Child Component rendered");
  return(
    <>
    <h1>Child Component-{count}</h1>
    </>
  )
}
