import { useLocation } from "react-router-dom"
import Ftable from "../Components/Table"
import EmailVerification from "../Components/EmailVerifaction"
import "./Applications.scss"
import Sidebar from "./Sidebar"


function Applications() {
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute)

  // Determine the route type based on the current pathname
  let routeType;
  if (currentRoute.includes('application')) {
    routeType = 'application';
  } else if (currentRoute.includes('managesJobs')) {
    routeType = 'managesJobs';
  } else if (currentRoute.includes('managesCompanys')) {
    routeType = 'managesCompanys';
  }
 console.log(routeType)


  return (
    <div className="container-fulid applications-wrapper">
      <div className="row g-0">
        <div className=" col-2 bg-white shadow-lg  ">
          <div className=" ">
            <Sidebar />
          </div>
        </div>
        <div className="col-10">
          <main className="applications-container my-5 mx-5">
            <EmailVerification />
            <div className="table-wrapper">
              <Ftable route={routeType} />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Applications
