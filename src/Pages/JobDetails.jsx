
import "./JobDetails.scss"
import Card from "../Components/Card2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { useState } from "react"
import ApplyNowFormModal from "./ApplyJobModal"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function JobDetails() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className="jobDetails-Wrapper">
                {/* hero section */}
                <div className="container-fulid hero-section">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p>Job Details</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* job Details Section */}
                <div className="job-details">
                    <div className="container">
                        <div className="row row1 m-0 ">
                            <div className=" leftCol col-12 col-sm-12 col-md-12 col-lg-6 col-xl-8">
                                <div className="row top-row px-4 py-5 shadow mt-5 mb-4 rounded position-relative">

                                    <div className="col-2 d-flex align-items-center ">
                                        <img className=" img-thumbnail img-fluid" src="https://cdn-icons-png.flaticon.com/128/732/732221.png" alt="job-company-logo" />
                                    </div>
                                    <div className="col">
                                        <p className="title">Wharehouse Operative Need</p>
                                        <p className="text-muted">Automotive <button className="position-absolute icon-fav" >
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-themeLight group-hover:text-themePrimary text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
                                        </button></p>
                                        <h6 className="">Share on <span className="span-text">{<FontAwesomeIcon className="  text-muted  fa-fb" icon={faFacebookF}></FontAwesomeIcon>}</span> <span>{<FontAwesomeIcon className="text-muted fa-fb" icon={faTwitter}></FontAwesomeIcon>}</span></h6>
                                    </div>
                                    <div className="col-auto d-flex align-items-center rr ">
                                        <button className="btn btn-primary" onClick={() => setModalShow(true)}>
                                            Apply Now
                                        </button>

                                        <ApplyNowFormModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>

                                </div>

                                <div className="row bottom-row shadow px-4 py-5 mb-5 rounded">
                                    <h4>Job Description</h4>
                                    <p className="text-justify my-4">As a warehouse operative you’ll receive great benefits and incentives! You can be active around a warehouse or if you would you rather use your organisational skills at a workstation? Either way we have the job for you! You can be a part of a busy and friendly team, working for a highly regarded online retail company with the real opportunity for permanent work.</p>
                                    <h4>Tagged As:</h4>
                                    <div className="badges">
                                        <span className=" badge bg-warning me-3">Css</span>
                                        <span className="badge bg-secondary me-3">React</span>
                                        <span className="badge bg-secondary">Html</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rightCol  rounded  col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 mt-5 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-5  ">
                                <div className="pt-4 pb-4 px-4 bg-white rounded ">
                                    <p className="title mb-4">Job Overview</p>
                                    <ul className="p-0">
                                        <li className="d-flex list-unstyled">
                                            <img src="https://metajobs.vercel.app/assets/img/jobo1.svg" alt="" />
                                            <div>
                                                <h5>Job Posted</h5>
                                                <p className="text-muted">2 Years ago</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <img src="https://metajobs.vercel.app/assets/img/jobo2.svg" alt="" />
                                            <div>
                                                <h5>Deadline </h5>
                                                <p className="text-muted">April 27, 2022</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <img src="https://metajobs.vercel.app/assets/img/jobo4.svg" alt="" />
                                            <div>
                                                <h5>Job Types </h5>
                                                <p className="text-muted">Part Time</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <img src="https://metajobs.vercel.app/assets/img/jobo5.svg" alt="" />
                                            <div>
                                                <h5>Hourly Rate </h5>
                                                <p className="text-muted">30 - 50 / hour</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <img src="https://metajobs.vercel.app/assets/img/jobo6.svg" alt="" />
                                            <div>
                                                <h5>Salary</h5>
                                                <p className="text-muted">25k - 45k</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <img src="https://metajobs.vercel.app/assets/img/jobo7.svg" alt="" />
                                            <div>
                                                <h5>Job Location</h5>
                                                <p className="text-muted">Delhi, India</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* related job section */}
                <section className="relatedJob-section shadow-lg mt-5">
                    <div className="ee">
                        <div className="container p-5">
                            <div className="row mb-5">
                                <p className="text-center text-primary  fs-6 fw-bold">Related jobs</p>
                                <h3 className="text-center mb-5">Latest Related Jobs For You</h3>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <Card />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <Card />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <Card />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <Card />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </>
    )
}

export default JobDetails
