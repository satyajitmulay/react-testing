import { useState } from "react";
import "./index.css";

export default function ContactForm() {

    // const [username, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    const [contacts, setContacts] = useState({
        username:"",
        email:"",
        message:"",
    })

    const handleSubmit = (e) =>{
        e.preventDefault();

        // const contactData = {
        //     username,
        //     email,
        //     message
        // }

        console.log(contacts);

    }

    const handlInputData = (e) =>{
        const {name, value} = e.target;
        setContacts((prev)=>({
            ...prev, 
            [name]:value
        }))
    }

  return (
    <div className="container">
        <div className="card">
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required autoComplete="off" value={contacts.username}
                // onChange={(e)=>setUserName(e.target.value)}
                onChange={handlInputData}
                 />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" required autoComplete="off" value={contacts.email}
                // onChange={(e)=>setEmail(e.target.value)}
                onChange={handlInputData}
                 />

                <label htmlFor="message">Message</label>
                <textarea type="" name="message" required autoComplete="off" rows="6" value={contacts.message}
                // onChange={(e)=>setMessage(e.target.value)}
                onChange={handlInputData}
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}
