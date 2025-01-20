import { useState } from "react"


export default function LiftStateUp() {

    const [inputValue, setInputValue] = useState("");   // Lifting State Up in parent component

  return (
    <div>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
        <DisplayComponent inputValue={inputValue}/>
    </div>
  )
}


export const InputComponent = ({inputValue,setInputValue}) =>{

    return(
        <div className="main-div">
        <input type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)} /> 
        </div>
    )
}

export const DisplayComponent = ({inputValue}) =>{
    return <p className="main-div">The Current input value is: {inputValue}</p>
}