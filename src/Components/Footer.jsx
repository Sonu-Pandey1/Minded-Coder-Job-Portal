import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import { faFacebook, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">

                        <div className="col-container about-container ps-5 col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                            <h4>About Company</h4>
                            <p className="text-mutedd">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde debitis blanditiis nisi iste ?</p>
                            <p className="text-mutedd">Company Location here - Lorem
                                Ipsum is simple Dummy Text</p>
                            <p className="text-mutedd">+91 246 839 8573</p>
                            <p className="text-mutedd">info@example.com</p>
                        </div>
                        <div className="col-container candidates-container ps-5 col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                            <h4>For Candidates</h4>
                            <ul>
                                <li className="text-mutedd">Browse Jobs</li>
                                <li className="text-mutedd">Browse Category</li>
                                <li className="text-mutedd">Candidate Dashboard</li>
                                <li className="text-mutedd">Job Alert</li>
                                <li className="text-mutedd">My Bookmarks</li>
                            </ul>
                        </div>
                        <div className="col-container employer-container ps-5 ps-sm-5 ps-md-5 ps-lg-0 col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mt-4 mt-sm-4 mt-md-4 mt-lg-0">
                            <h4>For Employer</h4>
                            <ul>
                                <li className="text-mutedd">Browse Candidates</li>
                                <li className="text-mutedd">Browse Category</li>
                                <li className="text-mutedd">Employer Dashboard</li>
                                <li className="text-mutedd">Post a Job</li>
                                <li className="text-mutedd">My Bookmarks</li>
                            </ul>
                        </div>
                        <div className="col-container quickLinks-container ps-5 pe-sm-5 pe-md-5 pe-lg-0 col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3  mt-4 mt-sm-4 mt-md-4 mt-lg-0">
                            <h4>Quick Links</h4>
                            <ul>
                                <li className="text-mutedd">About Us</li>
                                <li className="text-mutedd">Contact Us</li>
                                <li className="text-mutedd">Privacy Policy</li>
                                <li className="text-mutedd">Terms of Use</li>
                                <li className="text-mutedd">FAQ</li>
                            </ul>
                        </div>

                    </div>
                    <hr />
                    {/* <div className="row row2 p-2  ">
                        <div className="col d-flex footer-down justify-content-between">
                            <p className="">
                                © Copyrights 2024 MindedCoder All rights reserved
                            </p>

                            <ul className=" d-flex justify-content-evenly gap-3 list-unstyled">
                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                                <li><FontAwesomeIcon icon={faFacebook} /></li>
                                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                                <li><FontAwesomeIcon icon={faTwitter} /></li>
                            </ul>
                            <p>Developed by <a href="https://github.com/Sonu-Pandey1">Sonu Pandey</a></p>
                        </div>
                    </div> */}
                    <div className="row row2 p-2  ">
                        {/* <div className=" footer-down"> */}
                            <p className="col-12 col-sm-6 col-md-6 col-lg-4 text-center">
                                © Copyrights 2024 MindedCoder All rights reserved
                            </p>

                            <ul className="col-12 col-sm-6 col-md-6 col-lg-4 text-center d-flex justify-content-center gap-4 list-unstyled">
                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                                <li><FontAwesomeIcon icon={faFacebook} /></li>
                                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                                <li><FontAwesomeIcon icon={faTwitter} /></li>
                            </ul>
                            <p className="col-12 col-sm-12 col-md-12 col-lg-4 text-center">Developed by <a target="_blank" href="https://github.com/Sonu-Pandey1">Sonu Pandey</a></p>
                        {/* </div> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
