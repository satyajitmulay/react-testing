import { useReducer } from "react";

export const ReducerComp = () => {

  const initialState = {
    count : 0,
    inc : 2,
    dec : 2
  }

  const reducer = (state, action) => {
    console.log(state, action);
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // if(action.type === "RESET"){
    //     return state = 0
    // }

    switch (action.type) {
      case "INCREMENT":
        return {
          ...state, 
          count:state.count + state.inc
        };

      case "DECREMENT":
          return {
            ...state, 
            count:state.count - state.dec
          };

      case "RESET":
            return {
              ...state,
               count:0
            };
    
      default: 
      return state;
    }

  };

  const [state, dispatch] = useReducer(reducer, initialState); //count - state variable The current state variable and 0 is it's initialValue
    // console.log(useReducer(reducer,0))           //dispatch - to send action to the reducer function

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </div>
    </>
  );
};
