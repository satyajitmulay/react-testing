import React from "react";
import "./index.css";
// import UseID from "./components/hooks/useID";
// import ParentComponent from "./components/PropDrilling";
// import { BioProvider } from "./components/hooks/ContextAPI";
// import Home from "./components/hooks/ContextAPI/Home";
// import About from "./components/hooks/ContextAPI/ABout";
// import Services from "./components/hooks/ContextAPI/Services";
// import DarkLight, { ThemeProvider } from "./components/hooks/ContextAPI/DarkLight";
// import { ReducerComp } from "./components/hooks/UseReducer";
// import ReactMemo from "./components/hooks/Memo/ReactMemo";
// import { MemoParentComponent } from "./components/hooks/Memo/UseMemo";
// import ReactMemo from "./components/hooks/Memo/ReactMemo";
import UseCallback from "./components/hooks/Memo/UseCallback";
// import ForwardRf from "./components/hooks/useRef/ForwardRf";
// import HowNotToFecthAPi from "./components/useEffect/HowNotToFecthAPi";
// import UseRef from "./components/useRef/UseRef";
// import UseEffectChallege from "./components/useEffect/useEffectChallege";
// import CleanUp from "./components/useEffect/CleanUp";
// import EventProps from "./components/EventProps";
// import EventPropgation from "./components/EventPropgation";
// import EventHandling from "./components/EventHAndling";
// import "./App.css";
// import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
// import { State }  from "./components/hooks/State";
// import "./components/EV.css";
// import { DerivedState } from "./components/DerivedState";
// import LiftStateUp from "./components/LiftStateUp";
// import ToggleSwitch from "./Projects/ToggleSwitch/ToggleSwitch";
// import Todo from "./Projects/Todo/Todo";
// import ShortCircuit from "./components/ShortCircuit";
// import { Counter } from "./components/useState";
// import { CounterChallenge } from "./components/useState/Challenge";
// import { RegistrationForm } from "./components/useState/Registration";
// import { RegistrationFormReact } from "./components/useState/RegistrationFormReact";
// import LoginForm from "./components/useState/LoginForm";
// import ContactForm from "./components/useState/ContactForm";
// import { ReactUseEffect } from "./components/useEffect";

function App() {
  return (
    <>
    <UseCallback/>
    </>
  );
}


// Two ex of Context API
{/* // <section> */}
    {/* <BioProvider>
      <Home/>
      <About/>
      <Services/>
    </BioProvider> */}
    {/* // </section> */}
    {/* <ThemeProvider>
      <DarkLight/>
    </ThemeProvider> */}


// let age = 16;

// let canWatch = "Watch Now";
// if(age < 18) canWatch = "Not Available";


//You can make this function dynamic by passing parameter

// const canWatch = () =>{
//   if(age>=18) return "Watch Now";
//   return "Not Availble";
// }


// const returnGenre = () =>{
//   const genre =  "RomCom";
//   return genre;

// }

// const NetflixSeries = () => {
//   const name = "Queen of Tears";
//   // const rating =  "8.2";
//   const summary = `Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
//         both at home and at work. But upon deciding his future, Hyun-woo pays a
//         visit to his family.`
// //         if(age <18){
// //   return (
// //     <div>
// //       <div>
// //       <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
// //       </div>
// //       <h2>Name: {name}</h2>
// //       <h3>Rating: {5 + 3.2}</h3>
// //       <p>
// //         Summary: {summary}
// //       </p>
// //       <p>Genre: {returnGenre()}</p>
// //       <button>Not Available</button>
// //     </div>
// //   );
// // }

// return (
//   <div>
//     <div>
//     <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
//     </div>
//     <h2>Name: {name}</h2>
//     <h3>Rating: {5 + 3.2}</h3>
//     <p>
//       Summary: {summary}
//     </p>
//     <p>Genre: {returnGenre()}</p>
//     {/* <button>{age>=18 ? "Watch Now":"Not Available"}</button> */}
//     <button>{canWatch()}</button>
//   </div>
// );
// }

console.log(React.createElement("h1", null, "Hello , Welcome to React 19"));

export default App;
