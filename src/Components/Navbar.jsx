import { NavLink } from "react-bootstrap";
import "./Navbar.scss"

function Navbar() {
    return (
        <>
            <section className="header-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-expand-lg  fixed-top">
                                <div className="container">
                                    {/* Navbar brand */}
                                    <NavLink to="/" className="navbar-brand d-lg-none  ">Job Portal</NavLink>

                                    {/* Navbar links for large screens */}
                                    <div className="collapse navbar-collapse d-none d-lg-flex justify-content-between">
                                        <div>
                                            <NavLink to="/" className="navbar-brand ">Job Portal</NavLink>

                                        </div>
                                        <ul className="navbar-nav mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink className="nav-link home " >Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link find-job " >Find Job</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link companys" >Companys</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link candidate" >Candidate</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" >About Us</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" >Contact Us</NavLink>
                                            </li>

                                        </ul>
                                        <div className="d-flex ">
                                            <NavLink className=""><p className="btn btn-outline-primary me-2 m-2 ">Sign In</p></NavLink>
                                            <NavLink className="" ><p className="btn btn-primary m-2">Sign Up</p></NavLink>
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
                                                    <NavLink className="nav-link" >Home</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" >Find Job</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" >Companys</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" >Candidate</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" >About Us</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" >Contact Us</NavLink>
                                                </li>

                                            </ul>

                                            <div className="d-flex mt-3">
                                                <a href="#" className="btn btn-outline-primary me-2 w-100">Login</a>
                                                <a href="#" className="btn btn-primary w-100">Sign Up</a>
                                                {/* <NavLink className=""><p className="btn btn-outline-primary me-2 w-100">Sign In</p></NavLink>
                                                <NavLink className="" ><p className="btn btn-primary w-100">Sign Up</p></NavLink> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;
