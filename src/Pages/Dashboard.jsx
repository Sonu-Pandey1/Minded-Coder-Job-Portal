import "./Dashboard.scss"


function Dashboard() {
  return (
    <>
      <main className="dashboard-wrapper">
        <div className="emailVerifaction d-flex px-3 py-1 rounded-3  align-items-center">
          <div>
            <h5 className="pt-2">Email Verification Required</h5>
            <p>Please verify your email address by clicking the link in the email we sent you. Please check your spam folder if you don't see the email. If you still don't see the email, please contact us.</p>
          </div>
          <div className="ms-auto ">
            <button className="btn btn-outline-danger">Resend Email</button>
          </div>
        </div>
        <section className="status-wrapper mt-5 d-flex justify-content-between">
          <div className="status status1 text-center">
            <h5>Total Resumes</h5>
            <p>1</p>
          </div>
          <div className="status status2 text-center">
            <h5>Approved Resumes</h5>
            <p>1</p>
          </div>
          <div className="status status3 text-center">
            <h5>Bookmarked</h5>
            <p>8</p>
          </div>
          <div className="status status4 text-center">
            <h5>Applied Jobs</h5>
            <p>2</p>
          </div>

        </section>

        <section className="container-fulid dashboard-footer mt-5 ">
          <div className="row gap-5">
            <div className="col activities bg-white rounded-3 shadow p-0">
              <h5 className="p-3 border-bottom">Recent Activities</h5>
            </div>
            <div className="col recent-bookmarks bg-white rounded-3 shadow p-0">
              <h5 className="p-3 border-bottom">Recent BookMarks</h5>
              <ul className="p-0 ">
                <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                  <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                  <div className="list-item">
                    <h6 className="">Alex Johnson</h6>
                    <p > Note: sonu apndey</p>
                  </div>
                  <div className="ms-auto ">
                    <p className="badge text-bg-info rounded-pill">Resume</p>
                  </div>
                </li>
                <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                  <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                  <div className="list-item">
                    <h6 className="">Warehouse Operative Need</h6>
                    <p> Note: 3 persons</p>
                  </div>
                  <div className="ms-auto ">
                    <p className="badge text-bg-warning rounded-pill">Job</p>
                  </div>
                </li>
                <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                  <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                  <div className="list-item">
                    <h6 className="">Warehouse Operative Need</h6>
                    <p> Note: 3 persons</p>
                  </div>
                  <div className="ms-auto ">
                    <p className="badge text-bg-warning rounded-pill">Job</p>
                  </div>
                </li>
                <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                  <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                  <div className="list-item">
                    <h6 className="">Warehouse Operative Need</h6>
                    <p> Note: 3 persons</p>
                  </div>
                  <div className="ms-auto ">
                    <p className="badge text-bg-warning rounded-pill">Job</p>
                  </div>
                </li>
                <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                  <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary fs-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                  <div className="list-item">
                    <h6 className="">Warehouse Operative Need</h6>
                    <p> Note: 3 persons</p>
                  </div>
                  <div className="ms-auto ">
                    <p className="badge text-bg-warning rounded-pill">Job</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default Dashboard