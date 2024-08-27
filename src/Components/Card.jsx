
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.scss";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faLocation, faUser } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons/faDollar";

function Card({ Title, CandidateImg, CompanyImg, about, DetailePara, CompanySize, Salary, Location }) {
    return (
        <div className="card   shadow p-3 mb-4 bg-white rounded-4">
            <div className="container-fluid">
                <div className="row align-items-center  mb-3">
                    <div className=" card-wrapper ">
                        <div className="col-12  ">
                            {DetailePara ? <img
                                src={`${CandidateImg}`}
                                alt="Candidate"
                                style={{ width: "30%", height: "30%" }}
                                className=" company-log img-fluid rounded-circle shadow"
                            /> : null}
                            {about ? <img
                                src={`${CompanyImg}`}
                                alt="Candidate"
                                style={{ width: "30%", height: "30%" }}
                                className=" company-log img-fluid rounded-circle shadow"
                            /> : null}
                        </div>
                        <div className="col-12">
                            <p className="company-name mt-3 mb-2 fw-semibold">{Title}</p>
                            <p className="summery"> {DetailePara ? <span><FontAwesomeIcon icon={faLocationDot} /></span> : null} {DetailePara}</p>
                            <p className="summery"> {about}</p>
                            {DetailePara ? <div className="skills d-flex justify-content-center  flex-wrap py-1">
                                <span className="badge text-muted bg-light text-dark">Html</span>
                                <span className="badge text-muted bg-light text-dark">Css</span>
                                <span className="badge text-muted bg-light text-dark">Javascript</span>
                                <span className="badge text-muted bg-light text-dark">React</span>
                                <span className="badge text-muted bg-light text-dark">NodeJs</span>
                            </div> : null}
                           {about?  <div className="pp text-start">
                            <p className="summery"> {about ? <span><FontAwesomeIcon icon={faUser} />{CompanySize} Employees</span> : null} </p>
                            <p className="summery"> {about ? <span><FontAwesomeIcon icon={faDollar} />{Salary}</span> : null} </p>
                            <p className="summery"> {about ? <span><FontAwesomeIcon icon={faLocationDot} />{Location}</span> : null} </p>
                            </div>:null}
                        </div>
                        <div className="col-12">
                            {DetailePara ? <button className="btn btn-outline-primary w-100 mt-4">
                                View Candidate
                            </button> : null}
                            {about ? <button className="btn btn-outline-primary w-100 mt-4">
                                See Details
                            </button> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
