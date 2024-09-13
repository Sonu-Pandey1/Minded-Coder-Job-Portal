import { useState } from "react"
import EmailVerifaction from "../Components/EmailVerifaction"
import "./Dashboard.scss"
import Sidebar from "./Sidebar"


function Dashboard() {
  const [veirifiedEmail , setVerifiedEmail] = useState(false);
  let user = "employer"
  return (
    <>
      <div className="Dashboard-Container container-fulid">
        <div className="row g-0">
          <div className="col-2 bg-white shadow-lg ">
            <div className="bg-info">
              <Sidebar />
            </div>
          </div>
          <div className="col-10 py-5 px-5 ">
            <main className="dashboard-wrapper">
            {veirifiedEmail ?null: <EmailVerifaction verifyEmail ={setVerifiedEmail} />}
            <section className={`status-wrapper ${veirifiedEmail ? "mt-0":"mt-5"} d-flex justify-content-between`}>
                <div className="status status1 text-center">
                  <h5>{user=="employer"?"Total Jobs":"Total Resumes"}</h5>
                  <p>1</p>
                </div>
                <div className="status status2 text-center">
                  <h5>{user=="employer"?"Approved Jobs":"Approved Resumes"}</h5>
                  <p>1</p>
                </div>
                <div className="status status3 text-center">
                  <h5>Bookmarked</h5>
                  <p>8</p>
                </div>
                <div className="status status4 text-center">
                  <h5>{user=="employer"?"Featured Jobs":"Applied Jobs"}</h5>
                  <p>2</p>
                </div>

              </section>

            <section className="container-fulid dashboard-footer mt-5 ">
                <div className="row gap-5 g-0">
                  <div className="col activities bg-white rounded-3 shadow p-0">
                    <h5 className="p-3 border-bottom">Recent Activities</h5>
                  </div>
                  <div className="col recent-bookmarks bg-white rounded-3 shadow p-0">
                    <h5 className="p-3 border-bottom">Recent BookMarks</h5>
                    <ul className="p-0 ">
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <span className="">Alex Johnson</span>
                          <p > Note: Sonu Pandey</p>
                        </div>
                        <div className="ms-auto ">
                          <p className="badge text-bg-info rounded-pill">Resume</p>
                        </div>
                      </li>
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <span className="">Warehouse Operative Need</span>
                          <p> Note: 3 persons</p>
                        </div>
                        <div className="ms-auto ">
                          <p className="badge text-bg-warning rounded-pill">Job</p>
                        </div>
                      </li>
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <span className="">Warehouse Operative Need</span>
                          <p> Note: 3 persons</p>
                        </div>
                        <div className="ms-auto ">
                          <p className="badge text-bg-warning rounded-pill">Job</p>
                        </div>
                      </li>
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <span className="">Warehouse Operative Need</span>
                          <p> Note: 3 persons</p>
                        </div>
                        <div className="ms-auto ">
                          <p className="badge text-bg-warning rounded-pill">Job</p>
                        </div>
                      </li>
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary fs-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <span className="">Warehouse Operative Need</span>
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
            </div>
          </div>

        </div>
      </>
      )
}

      export default Dashboard
