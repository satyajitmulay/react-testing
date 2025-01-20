// import { use } from "react";
// import { BioContext } from ".";
import { useBioContext } from ".";



export default function Home() {

    const {myName,myAge} = useBioContext();

    // let newHook = true;

    // let myName,myAge;

    // if(newHook){
    //     ({myName,myAge} = use(BioContext));
    // }

  return (
    <section className='p-4 h-lvh font-display tracking-wider flex flex-col justify-center 
    items-center bg-gray-900 text-white'>
    <h1>Hello Context API , Hi, My name is - {myName} and I am {myAge} yrs old</h1>
    </section>
  )
}

