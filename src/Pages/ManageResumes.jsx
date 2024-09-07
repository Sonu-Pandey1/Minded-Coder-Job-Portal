import { useLocation } from "react-router-dom"
import "./ManageResumes.scss"
import Ftable from "../Components/Table";

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
        <div className="emailVerifaction d-flex px-3 py-1 rounded-3  align-items-center">
        <div>
          <h5 className="pt-2">Email Verification Required</h5>
          <p>Please verify your email address by clicking the link in the email we sent you. Please check your spam folder if you don't see the email. If you still don't see the email, please contact us.</p>
        </div>
        <div className="ms-auto ">
          <button className="btn btn-outline-danger">Resend Email</button>
        </div>
      </div>
      <Ftable route={routeType} />
    </main>
  )
}

export default ManageResumes

