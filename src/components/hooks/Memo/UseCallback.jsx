/* eslint-disable react/display-name */
import { memo, useCallback, useState } from "react"


const Button = memo(({onclick, children}) =>{
    console.log(`Rendering Button: ${children}`);

    return(
        <button className={`text-black mb-4 py-2 px-5 
            ${children === "Increment" ? "bg-green-400" : "bg-red-400"}`}
            onClick={onclick}>
                {children}
            </button>
    );
})

export default function UseCallback() {
    
    const [count, setCount] = useState(0);

    // const incremnet = () =>{
    //     console.log("increment inside");
    //     setCount((prevCount) => prevCount + 1);
    // }

    const incremnet = useCallback(()=>{
        console.log("increment inside");
        setCount((prevCount) => prevCount + 1);
    },[])

    const decremnet = useCallback(()=>{
        console.log("decrement inside");
        setCount((prevCount) => prevCount - 1);
    },[])

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
        <h1 className="mb-4">Count : {count}</h1>
        <Button onclick={incremnet}>Increment</Button>
        <Button onclick={decremnet}>Decrement</Button>
    </div>
  )
}
