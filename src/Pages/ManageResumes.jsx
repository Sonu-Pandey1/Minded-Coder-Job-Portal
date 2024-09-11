import { useLocation } from "react-router-dom"
import "./ManageResumes.scss"
import Ftable from "../Components/Table";
import EmailVerification from "../Components/EmailVerifaction"
import Sidebar from "./Sidebar"

function ManageResumes() {
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute)


  // Determine the route type based on the current pathname
  let routeType;
  if (currentRoute.includes('application')) {
    routeType = 'application';
  } else if (currentRoute.includes('resumes')) {
    routeType = 'resumes';
  } else {
    routeType = 'default'; // Optional: handle other routes if needed
  }

  return (
   <div className="container-fulid manageResumes-wrapper">
    <div className="row g-0">
    <div className=" col-2 bg-white shadow-lg  ">
          <div className=" ">
            <Sidebar />
          </div>
        </div>
    <div className="col-10">
    <main className="manageResumes-container py-5 px-5">
        <EmailVerification/>
      <Ftable route={routeType} />
    </main>
    </div>
    </div>
   </div>
  )
}

export default ManageResumes

