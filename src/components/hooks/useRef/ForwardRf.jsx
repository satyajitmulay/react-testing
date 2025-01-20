/* eslint-disable react/display-name */
import { useId, useRef } from "react";
import "./index.css"

export default function ForwardRf() {

  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReact19 label="username" ref={username} />
      <BeforeReact19 label="password" ref={password} />
      <button>Submit</button>
    </form>
  );
}

// const BeforeReact19 = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>{props.label}</label>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });


// #AfterReact 19 V

const BeforeReact19 = ({label,ref}) => {           // We can also write props like (props) we destructure here
    const id = useId();
    return (
      <div>
     <label htmlFor={id}>{label}</label>         {/* We can also write props like (props.label) */}
        <input type="text" ref={ref} />           {/* We can also write props like (props.ref) */}
      </div>
    );
  };