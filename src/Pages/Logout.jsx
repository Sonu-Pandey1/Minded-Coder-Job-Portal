import { useEffect } from "react"
import { Navigate,useNavigate } from "react-router-dom";
import { useSignupContext } from "../context/signupContext";



function Logout() {
  const Navigatee = useNavigate();

    const {LogoutUser} = useSignupContext();

  useEffect(()=>{
    LogoutUser();
  },[LogoutUser]);

  return <Navigatee to={"/login"}/>
}

export default Logout;
