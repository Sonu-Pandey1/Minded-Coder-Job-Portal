import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
import SignUp from '../Pages/Signup';
import SignIn from '../Pages/Signin';

function Navbar() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    

    return (
        <>
            <section className="header-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <nav className="navbar sticky-top navbar-expand-lg">
                                <div className="container">
                                    {/* Navbar brand */}
                                    <NavLink to="/" className="navbar-brand d-lg-none">Job Portal</NavLink>

                                    {/* Navbar links for large screens */}
                                    <div className="collapse navbar-collapse d-none d-lg-flex justify-content-between">
                                        <div>
                                            <NavLink to="/" className="navbar-brand">Job Portal</NavLink>
                                        </div>
                                        <ul className="navbar-nav mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink to="/" className="nav-link home">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/findjob" className="nav-link find-job">Find Job</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/companys" className="nav-link companys">Companys</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/candidate" className="nav-link candidate">Candidate</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/about" className="nav-link">About Us</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                                            </li>
                                        </ul>
                                        <div className="d-flex">
                                            <button onClick={() => setShowSignIn(true)} className="btn btn-outline-primary me-2 m-2">Sign In</button>
                                            <button onClick={() => setShowSignUp(true)} className="btn btn-primary m-2">Sign Up</button>
                                        </div>
                                    </div>

                                    {/* Toggler button for small screens */}
                                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    {/* Offcanvas for small screens */}
                                    <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                            <button type="button" className="btn-close border-dark border" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                <li className="nav-item">
                                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/findjob" className="nav-link">Find Job</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/companys" className="nav-link">Companys</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/candidate" className="nav-link">Candidate</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/about" className="nav-link">About Us</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                                                </li>
                                            </ul>
                                            <div className="d-flex mt-3">
                                                <button onClick={() => setShowSignIn(true)} className="btn btn-outline-primary me-2 ">Sign In</button>
                                                <button onClick={() => setShowSignUp(true)} className="btn btn-primary">Sign Up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* SignUp and SignIn modals */}
            {showSignUp && <SignUp closeModal={() => setShowSignUp(false)} />}
            {showSignIn && <SignIn closeModal={() => setShowSignIn(false)} />}
        </>
    );
}

export default Navbar;
