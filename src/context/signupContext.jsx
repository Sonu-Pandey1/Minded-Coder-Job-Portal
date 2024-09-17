
import { createContext, useContext, useState } from "react";

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("")
    // set token in localStorage
    const storeTokenInLS = (serverToken) =>{
        return localStorage.setItem('token',serverToken);

    };

    let isLoggedIn = !!token;
    console.log(isLoggedIn)

    // logout functionality
    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem("token");
    };

    //jwt  authentication -to get the currently loggedIn user data

    const userAuthentication = async ()=>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,

                },
                
            });

            if(response.ok){
                const data = await response.json();
                console.log("user data",data.userData);
                setUser(data.userData);

               }

            
        } catch (error) {
            console.log("Error fetching user data")
            
        }

    };



    return <SignupContext.Provider value={{isLoggedIn,storeTokenInLS , LogoutUser ,user}}>
        {children}
    </SignupContext.Provider>
}


export const useSignupContext = ()=>{
    // const 
    return useContext(SignupContext)
}












// import { createContext, useContext, useEffect, useState } from "react";

// export const SignupContext = createContext();

// export const SignupProvider = ({ children }) => {
//     const [token, setToken] = useState(localStorage.getItem("token"));
//     const [user, setUser] = useState(null);

//     // Store token in local storage
//     const storeTokenInLS = (serverToken) => {
//         localStorage.setItem('token', serverToken);
//         setToken(serverToken); // Update state when token is set
//     };

//     // Logout functionality
//     const logoutUser = () => {
//         setToken(null);
//         setUser(null);
//         localStorage.removeItem("token");
//     };

//     // Fetch user data from backend
//     const userAuthentication = async () => {
//         if (!token) return;

//         try {
//             const response = await fetch("http://localhost:5000/api/auth/user", {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setUser(data.userData);
//             } else {
//                 // Handle errors like token expiration
//                 setUser(null);
//             }
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//             setUser(null);
//         }
//     };

//     useEffect(() => {
//         userAuthentication(); // Fetch user data whenever the token changes
//     }, [token]);

//     const isLoggedIn = !!token;

//     return (
//         <SignupContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user }}>
//             {children}
//         </SignupContext.Provider>
//     );
// };

// export const useSignupContext = () => {
//     return useContext(SignupContext);
// };
