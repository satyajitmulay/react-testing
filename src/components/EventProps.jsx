
export default function EventProps() {

    const handleButtonClick = (user) =>{
        alert(`Hey ${user}`)
    }

    const handleHover = () =>{
        alert("Hey! Thanks for Hovering Me.")
    }

  return (
    <div>
        <WelcomeUser 
        onButtonclick={()=>handleButtonClick("Shubham")}
        onMouseEnter={handleHover}/>
    </div>
  )
}


const WelcomeUser = (props) =>{

    const {onButtonclick, onMouseEnter} = props;

    const handleGreeting = () =>{
        console.log("Hey! Welcome to React Journey.")
        onButtonclick();
    }

    return(
        <>
        <button onClick={onButtonclick}>Click Me</button>
        <br/>
        <button onMouseEnter={onMouseEnter}>Hover Me</button>
        <br/>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}