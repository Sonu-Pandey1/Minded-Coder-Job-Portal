
import "./Card2.scss"; // Ensure to style it according to your needs

function Card2() {
    return (
        <div className="card shadow p-3 mb-4 bg-white rounded-4">
            <div className="container-fluid">
                <div className="row align-items-center  mb-3">
                    <div className="col-auto ">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/732/732221.png"
                            alt="Company-Logo"
                            className="company-logo"
                            style={{ width: "50px", height: "50px" }}
                        />
                    </div>
                    <div className="col">
                        <p className="company-name mb-2 fw-semibold">Microsoft</p>
                        <h5 className="job-title">Need Senior MERN Stack Developer</h5>
                        <div className="job-info d-flex gap-2 py-1">
                            <span className="badge bg-warning text-dark">Full Time</span>
                            <span className="badge bg-light text-dark">$5k - $7k</span>
                            <span className="badge bg-light text-dark">12 hours ago</span>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-outline-primary">
                            View Job <span>&rarr;</span>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facilis hic provident voluptatibus explicabo facere quo nesciunt deserunt ut illum enim, tenetur expedita error laborum cumque ullam expedita error laborum cumque.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card2;
