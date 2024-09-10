import "./Bookmarks.scss"
import EmailVerification from "../Components/EmailVerifaction"

function Bookmarks() {
  return (
    <main className="bookmarks-container">
      <EmailVerification/>

      <section className="container-fulid bookmarks-footer mt-5 ">
        <div className="row">
          <div className="col recent-bookmarks bg-white rounded-3 shadow p-0">
            <p className="p-3 fs-4 ps-5 text-white bg-dark border-bottom">All BookMarks</p>
            <ul className="p-0 ">
              <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                <div className="list-item">
                  <h6 className="">Alex Johnson</h6>
                  <p > Note: sonu apndey</p>
                </div>
                <div className="ms-auto ">
                  <p className="badge text-bg-info rounded-pill">Resume</p>
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
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
                  <button className="" ><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-themeLight hover:text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="currentColor"></path><path d="M9 9H11V17H9V9Z" fill="currentColor"></path><path d="M13 9H15V17H13V9Z" fill="currentColor"></path></svg></button>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Bookmarks
