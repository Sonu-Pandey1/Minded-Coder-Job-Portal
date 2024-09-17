import { useEffect } from "react"
import { Navigate } from "react-router-dom";
import { useSignupContext } from "../context/signupContext";



function Logout() {

    const {LogoutUser} = useSignupContext();

  useEffect(()=>{
    LogoutUser();
  },[LogoutUser]);

  return <Navigate to={"/login"}/>
}

export default Logout;
