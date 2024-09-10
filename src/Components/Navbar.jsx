// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import "./Navbar.scss";
// import SignUp from '../Pages/Signup';
// import SignIn from '../Pages/Signin';
// import Dropdown from 'react-bootstrap/Dropdown';

// function Navbar() {
//     const [showSignUp, setShowSignUp] = useState(false);
//     const [showSignIn, setShowSignIn] = useState(false);

//     const [showDropdown, setShowDropdown] = useState(false);
//     const handleToggle = () => setShowDropdown(!showDropdown);

//     // Close the offcanvas when a navlink is clicked
//     const closeOffcanvas = () => {
//         const offcanvasElement = document.getElementById("offcanvasNavbar");
//         const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
//         bsOffcanvas.hide();
//     };

//     const handleClose = () => setShowDropdown(false);




//     return (
//         <>
//             <section className="header-section shadow">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col">
//                             <nav className="navbar fixed-top navbar-expand-lg">
//                                 <div className="container">
//                                     {/* Navbar brand */}
//                                     <NavLink to="/" className="navbar-brand d-lg-none">Job Portal</NavLink>

//                                     {/* Navbar links for large screens */}
//                                     <div className="collapse navbar-collapse d-none d-lg-flex justify-content-between">
//                                         <div>
//                                             <NavLink to="/" className="navbar-brand">Job Portal</NavLink>
//                                         </div>
//                                         <ul className="navbar-nav mb-2 mb-lg-0">
//                                             <li className="nav-item">
//                                                 <NavLink to="/" className="nav-link home">Home</NavLink>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <NavLink to="/findjob" className="nav-link find-job">Find Job</NavLink>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <NavLink to="/companys" className="nav-link companys">Companys</NavLink>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <NavLink to="/candidate" className="nav-link candidate">Candidate</NavLink>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <NavLink to="/about" className="nav-link">About Us</NavLink>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
//                                             </li>
//                                         </ul>
//                                         {/* <div className="d-flex">
//                                             <div>
//                                                 <button onClick={() => setShowSignIn(true)} className="btn btn-outline-primary me-2 m-2">Sign In</button>
//                                                 <button onClick={() => setShowSignUp(true)} className="btn btn-primary m-2">Sign Up</button>
//                                             </div>
//                                         </div> */}
//                                     </div>
//                                     <div className="d-flex ms-auto">
//                                         <div>
//                                             <button onClick={() => setShowSignIn(true)} className="btn btn-outline-primary me-2 m-2">Sign In</button>
//                                             <button onClick={() => setShowSignUp(true)} className="btn btn-primary m-2">Sign Up</button>
//                                         </div>
//                                     </div>
//                                     <div className="profile-menu">
//                                         <Dropdown className="dropdown" show={showDropdown} onToggle={handleToggle} >
//                                             <Dropdown.Toggle variant="white" id="dropdown-basic" className="d-flex align-items-center">
//                                                 <div className="profileContainer">
//                                                     <img src="https://cdn-icons-gif.flaticon.com/17626/17626903.gif" alt="Profile-img" /><span className="me-2">User Name</span>
//                                                 </div>

//                                             </Dropdown.Toggle>

//                                             <Dropdown.Menu className="shadow menu p-0">
//                                                 <NavLink className={"text-decoration-none"} to={"/dashboard"} onClick={handleClose}>
//                                                     <div className="d-flex align-items-center menu-item ll ">
//                                                         <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="me-3 text-primary ">
//                                                             <path d="M10 18V8H18V18H10ZM0 10V0H8V10H0ZM6 8V2H2V8H6ZM0 18V12H8V18H0ZM2 16H6V14H2V16ZM12 16H16V10H12V16ZM10 0H18V6H10V0ZM12 2V4H16V2H12Z" fill="currentColor"></path>
//                                                         </svg>
//                                                         <span className="menu-item-t ">Dashboard</span>
//                                                     </div>
//                                                 </NavLink>
//                                                 <NavLink to={"dashboard/messages"} className={"text-decoration-none"} onClick={handleClose}>
//                                                     <div className="d-flex align-items-center menu-item ll">
//                                                         <svg width="22" height="21" viewBox="0 0 22 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="me-3 text-primary">
//                                                             <path d="M13 20.5L10.2 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V5.103C4 4.83778 4.10536 4.58343 4.29289 4.39589C4.48043 4.20836 4.73478 4.103 5 4.103H21C21.2652 4.103 21.5196 4.20836 21.7071 4.39589C21.8946 4.58343 22 4.83778 22 5.103V16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H15.8L13 20.5ZM14.839 15H20V6.103H6V15H11.161L13 17.298L14.839 15ZM1 0H18V2H2V13H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0Z" fill="currentColor"></path>
//                                                         </svg>
//                                                         <span className="menu-item-t">Messages</span>
//                                                     </div>
//                                                 </NavLink>
//                                                 <NavLink to={"dashboard/job-alerts"} className={"text-decoration-none"} onClick={handleClose}>
//                                                     <div className="d-flex align-items-center menu-item ll">
//                                                         <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="me-3 text-primary" height="1em" width="1em">
//                                                             <circle cx="12" cy="12" r="10"></circle>
//                                                             <line x1="12" y1="8" x2="12" y2="12"></line>
//                                                             <line x1="12" y1="16" x2="12.01" y2="16"></line>
//                                                         </svg>
//                                                         <span className="menu-item-t">Job Alerts</span>

//                                                     </div>
//                                                 </NavLink>
//                                                 <NavLink to={"dashboard/manage-resumes"} className={"text-decoration-none"} onClick={handleClose}>
//                                                     <div className="d-flex align-items-center menu-item ll">
//                                                         <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="me-3 text-primary" height="1em" width="1em">
//                                                             <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                                                             <circle cx="9" cy="7" r="4"></circle>
//                                                             <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                                                             <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                                                         </svg>
//                                                         <span className="menu-item-t">Manage Resumes </span>

//                                                     </div>
//                                                 </NavLink>
//                                                 <NavLink to={"dashboard/my-profile"} className={"text-decoration-none"} onClick={handleClose}>
//                                                     <div className="d-flex align-items-center menu-item ll">
//                                                         <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="me-3 text-primary">
//                                                             <path d="M8.99955 15C12.6616 15 15.8646 16.575 17.6066 18.925L15.7646 19.796C14.3466 18.116 11.8466 17 8.99955 17C6.15255 17 3.65255 18.116 2.23455 19.796L0.393555 18.924C2.13555 16.574 5.33755 15 8.99955 15ZM8.99955 0C10.3256 0 11.5974 0.526784 12.5351 1.46447C13.4728 2.40215 13.9996 3.67392 13.9996 5V8C13.9995 9.28846 13.502 10.5272 12.6109 11.4578C11.7198 12.3884 10.5038 12.9391 9.21655 12.995L8.99955 13C7.67347 13 6.4017 12.4732 5.46402 11.5355C4.52634 10.5979 3.99955 9.32608 3.99955 8V5C3.99963 3.71154 4.4971 2.47284 5.38821 1.54222C6.27933 0.611607 7.49531 0.0609194 8.78255 0.00500011L8.99955 0ZM8.99955 2C8.23434 1.99996 7.49804 2.29233 6.94129 2.81728C6.38455 3.34224 6.04945 4.06011 6.00455 4.824L5.99955 5V8C5.9988 8.7809 6.30257 9.53133 6.84633 10.0918C7.39008 10.6523 8.13095 10.9787 8.91152 11.0016C9.69209 11.0245 10.4508 10.7422 11.0265 10.2145C11.6022 9.68691 11.9495 8.9556 11.9946 8.176L11.9996 8V5C11.9996 4.20435 11.6835 3.44129 11.1209 2.87868C10.5583 2.31607 9.7952 2 8.99955 2Z" fill="currentColor"></path>
//                                                         </svg>
//                                                         <span className="menu-item-t"> My Profile </span>

//                                                     </div>
//                                                 </NavLink>
//                                                 <NavLink to={"/dashboard"} className={"text-decoration-none"} onClick={() => {
//                                                     handleClose();
//                                                     alert("Logout Successfully");
//                                                 }}>
//                                                     <div className="d-flex align-items-center menu-item menu-item-ll">
//                                                         <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="me-3 text-white" height="1em" width="1em">
//                                                             <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
//                                                             <polyline points="16 17 21 12 16 7"></polyline>
//                                                             <line x1="21" y1="12" x2="9" y2="12"></line>
//                                                         </svg>
//                                                         <span className="menu-item-l"> Log Out </span>

//                                                     </div>
//                                                 </NavLink>
//                                             </Dropdown.Menu>
//                                         </Dropdown>
//                                     </div>

//                                     {/* Toggler button for small screens */}
//                                     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//                                         <span className="navbar-toggler-icon"></span>
//                                     </button>

//                                     {/* Offcanvas for small screens */}
//                                     <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//                                         <div className="offcanvas-header">
//                                             <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
//                                             <button type="button" className="btn-close border-dark border" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                         </div>
//                                         <div className="offcanvas-body">
//                                             <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//                                                 <li className="nav-item">
//                                                     <NavLink to="/" className="nav-link" onClick={closeOffcanvas}>Home</NavLink>
//                                                 </li>
//                                                 <li className="nav-item">
//                                                     <NavLink to="/findjob" className="nav-link" onClick={closeOffcanvas}>Find Job</NavLink>
//                                                 </li>
//                                                 <li className="nav-item">
//                                                     <NavLink to="/companys" className="nav-link" onClick={closeOffcanvas}>Companys</NavLink>
//                                                 </li>
//                                                 <li className="nav-item">
//                                                     <NavLink to="/candidate" className="nav-link" onClick={closeOffcanvas}>Candidate</NavLink>
//                                                 </li>
//                                                 <li className="nav-item">
//                                                     <NavLink to="/about" className="nav-link" onClick={closeOffcanvas}>About Us</NavLink>
//                                                 </li>
//                                                 <li className="nav-item">
//                                                     <NavLink to="/contact" className="nav-link" onClick={closeOffcanvas}>Contact Us</NavLink>
//                                                 </li>
//                                             </ul>
//                                             {/* <div className="d-flex mt-3">
//                                                 <button onClick={() => setShowSignIn(true)} className="btn btn-outline-primary me-2 ">Sign In</button>
//                                                 <button onClick={() => setShowSignUp(true)} className="btn btn-primary">Sign Up</button>
//                                             </div> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* SignUp and SignIn modals */}
//             {showSignUp && <SignUp closeModal={() => setShowSignUp(false)} />}
//             {showSignIn && <SignIn closeModal={() => setShowSignIn(false)} />}
//         </>
//     );
// }

// export default Navbar;

