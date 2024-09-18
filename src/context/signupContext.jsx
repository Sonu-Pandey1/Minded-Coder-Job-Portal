
import { createContext, useContext, useEffect, useState } from "react";

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("")
    // set token in localStorage
    const storeTokenInLS = (serverToken) =>{
        return localStorage.setItem('token',serverToken);

    };

    let isLoggedIn = !!token;
    console.log("is logged in ",isLoggedIn)

    // logout functionality
    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem("token");
    };

    //jwt  authentication -to get the currently loggedIn user data

    const userAuthentication = async ()=>{
        try {
            const response = await fetch("/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,

                },
                
            });

            if(response.ok){
                const data = await response.json();
                // console.log("user data",data.userData);
                setUser(data.userData);

               }

            
        } catch (error) {
            console.log("Error fetching user data")
            
        }

    };

    useEffect(()=>{
        userAuthentication();
    },[]);



    return <SignupContext.Provider value={{isLoggedIn,storeTokenInLS , LogoutUser ,user}}>
        {children}
    </SignupContext.Provider>
}


export const useSignupContext = ()=>{
    // const 
    return useContext(SignupContext)
}









