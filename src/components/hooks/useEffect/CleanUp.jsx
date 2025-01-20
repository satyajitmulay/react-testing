import { useEffect, useState } from "react"
import "./index.css"


export default function CleanUp() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
    const timer = setInterval(() => {
        setCount((prev) => prev + 1)
    }, 1000);

    return () => clearInterval(timer);

    },[])

  return (
    <div className='container'>
        <div className='counter'>
            <p>My subscribers on Youtube</p>
            <div className='odometer' id="odometer">
                {count}
            </div>
            <h3 className="title">
                subscribe <br /> Realtime Counter
            </h3>
        </div>
    </div>
  )
}
