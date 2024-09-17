
import { createContext, useContext } from "react";

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {

    const storeTokenInLS = (serverToken) =>{
        return localStorage.setItem('token',serverToken)

    };

    return <SignupContext.Provider value={{storeTokenInLS}}>
        {children}
    </SignupContext.Provider>
}


export const useSignupContext = ()=>{
    // const 
    return useContext(SignupContext)
}
