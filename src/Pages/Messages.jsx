import "./Messages.scss"
import EmailVerification from "../Components/EmailVerifaction"
import Sidebar from "./Sidebar"

function Messages() {
  return (
    <div className="container-fulid message-wrapper">
      <div className="row g-0">
        <div className="col-2 bg-white shadow-lg ">
          <div className="bg-info">
            <Sidebar />
          </div>
        </div>
        <div className="col-10">
          <main className="message-container py-5 px-5">
            <EmailVerification />

          </main>
        </div>
      </div>
    </div>
  )
}

export default Messages
