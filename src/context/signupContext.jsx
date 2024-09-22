
import { createContext, useContext, useEffect, useState } from "react";
import {  toast } from 'react-toastify';

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("")
    // set token in localStorage
    const storeTokenInLS = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);

    };

    let isLoggedIn = !!token;
    console.log("is logged in ",isLoggedIn)

    // logout functionality
    const LogoutUser = ()=>{
        setToken("");
        console.log("Logout Successfully.")
        toast.success("Logout Successfully.")
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

    // get candidate data

    const getCandidate = async ()=>{
        try {
            const data = await fetch("/api/users/candidate");
            return data;
            // const response = await data.json();
            // console.log(response)

        } catch (error) {
            console.log(error)
        
            
        }

    }



    return <SignupContext.Provider value={{isLoggedIn,storeTokenInLS , LogoutUser,getCandidate ,user}}>
        {children}
    </SignupContext.Provider>
}


export const useSignupContext = ()=>{
    // const 
    return useContext(SignupContext)
}









