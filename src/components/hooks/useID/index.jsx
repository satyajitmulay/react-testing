import { useId } from 'react'

export default function UseID() {

    const id = useId();

  return (
    <form>
        <div>
        <label htmlFor={id + "username"}>Username:</label>
        <input type="text" id={id + "username"} name='name' />
        </div>
        <div>
        <label htmlFor={id + "password"}>Password:</label>
        <input type="password" id={id + "password"} name='password' />
        </div>
        <div>
        <label htmlFor={id + "email"}>Email:</label>
        <input type="email" id={id + "email"} name='email' />
        </div>
        <button>Submit</button>
    </form>
  )
}
