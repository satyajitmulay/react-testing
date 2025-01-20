import { createContext, useContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({children}) => {
    const myName = "shubham";
    const myAge = 26;
    console.log(children);

    return <BioContext.Provider value={{myName, myAge}}>{children}</BioContext.Provider>
}


//Custom Hooks
export const useBioContext = () =>{
    // const context  = use(BioContext);       This is new Hook
    const context  = useContext(BioContext);
    if(context === undefined){
        throw new Error("Component must be wrapped inside BioProvider");
    }
    return context;
}