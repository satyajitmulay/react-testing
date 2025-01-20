import { useMemo, useState } from "react"
import Countes  from "./MemoCount"


export default function ReactMemo() {

    const [count, setCount] = useState(0)

    const mybioData = useMemo(()=>{
      return {
        name:"vinod",
        age:30
      }
    },[]);

  return (
    <>
    <div className="p-4 h-52 font-display tracking-wider 
        flex flex-col justify-center items-center">
            <h1>{count}</h1>
            <button className="btn bg-cyan-500 py-1 px-3"
            onClick={()=>setCount((prev)=>prev + 1)}>
                Increment
            </button>
    </div>
    <Countes biodata = {mybioData}/>
    </>
  )
}
