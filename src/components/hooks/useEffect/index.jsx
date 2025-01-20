import { useEffect, useState } from "react"
import "./index.css"


export const ReactUseEffect = () =>{

    // const [count, setCount] = useState(0);
    const [date, setDate]= useState(0);

    useEffect(()=>{
        setInterval(()=>{
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000)
    },[]);

    return(
        <div className="container effect-container">
            <h1>Date : {date}</h1>
            {/* <h1>useEffect Hook</h1> */}
            {/* <p>count : {count}</p>
            <button onClick={()=>setCount(count+1)}>Inrement</button> */}
        </div>
    )
}