export default function Practices() {
    const students = [5,6];

    console.log(students.length)
  return (
    <>
{/* <p>{students.length && "No Students Found"}</p> */}

    {/* <p>{!students.length && "No Students Found"}</p> */}

    {/* <p>{students.length ===0 && "No Students Found"}</p> */}

     <p>{Boolean(!students.length) && "No Students Found"}</p>
    <p>Number of Students : {students.length}</p>
    </>
  )
}
