import { useMemo, useState } from "react"


const ExpensiveComponent = () =>{
    const  sum = () =>{
        console.log("calculating sum......");
        let i= 0;
        for(i=0; i <= 100000000; i++){
            i= i + 1;
        }
        return i;
    }

    const total = useMemo(()=> sum(),[])

    // const  total = sum();

    return <p>sum : {total}</p>
}

export const MemoParentComponent = () =>{
    const [count, setCount] = useState(0)

    return(
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center
        bg-black text-white">
            <ExpensiveComponent />
            <button className="py-3 px-6 bg-cyan-400 rounded-sm"
            onClick={()=>setCount(count + 1)}>
                Re-render Component
            </button>
            <p>Parent re-render : {count}</p>
        </div>
    )
}