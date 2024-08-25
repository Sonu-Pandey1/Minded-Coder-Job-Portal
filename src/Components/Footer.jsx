import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">

                        <div className="col-container col-4 about-container pe-5">
                            <h4>About Company</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde debitis blanditiis nisi iste ?</p>
                            <p>Company Location here - Lorem
                                Ipsum is simple Dummy Text</p>
                            <p>+91 246 839 8573</p>
                            <p>info@example.com</p>
                        </div>
                        <div className="col-container col-3 candidates-container ps-5">
                            <h4>For Candidates</h4>
                            <ul>
                                <li>Browse Jobs</li>
                                <li>Browse Category</li>
                                <li>Candidate Dashboard</li>
                                <li>Job Alert</li>
                                <li>My Bookmarks</li>
                            </ul>
                        </div>
                        <div className="col-container col-3 employer-container ps-4">
                            <h4>For Employer</h4>
                            <ul>
                                <li>Browse Candidates</li>
                                <li>Browse Category</li>
                                <li>Employer Dashboard</li>
                                <li>Post a Job</li>
                                <li>My Bookmarks</li>
                            </ul>
                        </div>
                        <div className="col-container col-2 quickLinks-container">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>FAQ</li>
                            </ul>
                        </div>

                    </div>
                    <hr />
                    <div className="row row2 p-2  ">
                        <div className="col d-flex justify-content-between">
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
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
