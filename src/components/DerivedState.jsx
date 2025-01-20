import { useState } from "react";


// const users = [
//     { name: "Alice", age:25 },
//     { name: "Bob", age:30 },
//     { name: "Charlie", age:35 },
//     { name: "angles", age:45 },
// ];

export const DerivedState = () =>{

    const [users] = useState([
        { name: "Alice", age:25 },
        { name: "Bob", age:30 },
        { name: "Charlie", age:35 },
        { name: "Angles", age:45 },
    ]);


    const usersCount = users.length;   // usersCount is Dervied State

    const averageAge = (users.reduce((accum,curElem)=>accum + curElem.age, 0) / usersCount );

    return(
        <>
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    users.map((users,index) =>{
                        return(<>
                        <li key={index}>{users.name} - {users.age} year old</li>
                        </>
                    )})
                }
            </ul>
            <p>Total Users : {usersCount}</p>
            <p>Average Age: {averageAge}</p>
        </div>
        </>
    )
}