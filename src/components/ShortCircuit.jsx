import { useState } from "react";
import "./hooks/hooks.css";

export default function ShortCircuit() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState();

  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaulation</h1>


      { isLoggedIn && <p>You are logged In!</p>}

      { user ? `Hello ${user}` : "Plz login In!" }


      <div className="grid-three-cols">
        <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
        <button onClick={() =>setUser("Satya bhai")}>Set User</button>
        <button onClick={()=> setUser("")}>Clear User</button>
      </div>
    </section>
  )
}
