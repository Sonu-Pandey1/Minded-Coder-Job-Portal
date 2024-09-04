import "./Messages.scss"

function Messages() {
  return (
    <main className="message-container">
    <div className="emailVerifaction d-flex px-3 py-1 rounded-3  align-items-center">
          <div>
            <h5 className="pt-2">Email Verification Required</h5>
            <p>Please verify your email address by clicking the link in the email we sent you. Please check your spam folder if you don't see the email. If you still don't see the email, please contact us.</p>
          </div>
          <div className="ms-auto ">
            <button className="btn btn-outline-danger">Resend Email</button>
          </div>
        </div>

    </main>
  )
}

export default Messages
