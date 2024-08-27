
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.scss";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

function Card() {
    return (
        <div className="card  shadow p-3 mb-4 bg-white rounded-4">
            <div className="container-fluid">
                <div className="row align-items-center  mb-3">
                    <div className=" card-wrapper text-center">
                        <div className="col-12  ">
                            <img
                                src="https://img.freepik.com/premium-vector/man-with-shirt-that-says-d-it_704913-37099.jpg?ga=GA1.1.1381281151.1722480315&semt=ais_hybrid"
                                alt="Candidate"
                                style={{ width: "30%", height: "30%" }}
                                className=" company-log img-fluid rounded-circle shadow"
                            />
                        </div>
                        <div className="col-12">
                            <p className="company-name mt-3 mb-2 fw-semibold">Microsoft</p>
                            <p className="summery"> <span><FontAwesomeIcon icon={faLocationDot} /></span> India</p>
                            <div className="skills d-flex justify-content-center  flex-wrap py-1">
                                <span className="badge text-muted bg-light text-dark">Html</span>
                                <span className="badge text-muted bg-light text-dark">Css</span>
                                <span className="badge text-muted bg-light text-dark">Javascript</span>
                                <span className="badge text-muted bg-light text-dark">React</span>
                                <span className="badge text-muted bg-light text-dark">NodeJs</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-outline-primary w-100 mt-4">
                                View Candidate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
