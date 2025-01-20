

export default function ParentComponent() {
  return (
    <section className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center 
    items-center bg-gray-900 text-white">
        <h1>Component A</h1>
        <ChildComponent data = "React Js"/>
    </section>
  )
}


const ChildComponent =(props) =>{
    return(
        <section>
            <h1>Hello I am Component B</h1>
            <GrandChildComponent data ={props.data}/>
        </section>
    )
}

const GrandChildComponent =(props) =>{
    return(
        <section>
            <h1>Hello I am Component C</h1>
            <GrandGrandChildComponent data ={props.data}/>
        </section>
    )
}

const GrandGrandChildComponent =(props) =>{
    return(
        <section>
            <h1>Hello I love - {props.data}</h1>
        </section>
    )
}