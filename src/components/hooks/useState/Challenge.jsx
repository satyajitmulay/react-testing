import { useState } from "react"
import "../hooks/hooks.css";


export const CounterChallenge = () =>{

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () =>{
        if(count>=0 && count<=99){
            setCount(count + step)
        }
    }

    const handleDecrement = () =>{
        if(count>0 && count<=100){
            setCount(count - step)
        }
    }

    return(
        <div className="container state-container">
            <h1>useState Challenge</h1>

            <p>
                Count : <span> {count} </span>
            </p>

            <div>
                <label htmlFor="">
                    Step:
                    <input type="number" 
                    value={step} onChange={(e) => setStep(Number(e.target.value))}
                     />
                </label>
            </div>

            <div className="grid-three-cols">
                <button onClick={handleIncrement} disabled={count >=100}>Increment</button>
                <button onClick={handleDecrement} disabled={count<=0}>Decrement</button>
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
    )
}