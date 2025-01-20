import { useState } from "react"
import "../hooks/hooks.css";

export const Counter = () =>{
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count + 1);
        console.log("inner", count);
    }

    console.log("outer",count);

    return(
        <div className="container state-container" style={{textAlign:"center"}}>
            <h1>useState Hook!</h1>
            <p>{count}</p>
            <button className="state-button" onClick={handleCount}>Increment</button>
        </div>
    )

}