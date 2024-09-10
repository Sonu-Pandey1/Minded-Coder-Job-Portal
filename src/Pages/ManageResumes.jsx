import { useLocation } from "react-router-dom"
import "./ManageResumes.scss"
import Ftable from "../Components/Table";
import EmailVerification from "../Components/EmailVerifaction"

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
    <main className="manageResumes-container">
        <EmailVerification/>
      <Ftable route={routeType} />
    </main>
  )
}

export default ManageResumes

