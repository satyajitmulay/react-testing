import "./EV.css";

export default function EventPropgation() {


    const handleGrandParentClick = () =>{
        console.log("GrandParentClick")
    }

    const handleParentClick = () =>{
        console.log("ParentClick")
    }

    const handleChildClick = (event) =>{
        event.stopPropagation();
        console.log(event);
        console.log("child clicked")
    }

  return (
    <section className="main-div">
        <div className="g-div" onClickCapture={handleGrandParentClick}>
            <div className="p-div" onClickCapture={handleParentClick}>
                <button className="c-div" onClickCapture={handleChildClick}>
                    Child div
                </button>
            </div>
        </div>
    </section>
  )
}
