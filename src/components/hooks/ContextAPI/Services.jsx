import { useBioContext } from ".";


export default function Services() {

    const {myName,myAge} = useBioContext();

  return (
    <section className='p-4 h-lvh font-display tracking-wider flex flex-col justify-center 
    items-center bg-gray-900 text-white'>
         <h1>Hello Context API (Services) , Hi, My name is - {myName} and I am {myAge} yrs old</h1>
    </section>
  )
}
