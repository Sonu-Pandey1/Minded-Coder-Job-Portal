

// import { useEffect, useState } from "react";
// import "./Card2.scss";
// import { useNavigate } from "react-router-dom"

// function Card2() {
//     const navigate = useNavigate()

//     let handleNavigate = () => {
//         navigate("/job");
//     }


//     const [jobs, setJobs] = useState([]);
//     console.log(jobs)

//     const getJobs = async () => {
//         const data = await fetch("/api/users/jobs")
//         const response = await data.json();
//         setJobs(response);

//     }

//     useEffect(() => {
//         getJobs();
//     }, [])

//     //   todo == map this items 

//     return (
       

//         <div className="card shadow p-3 mb-4 bg-white c2 rounded-4">
//             <div className="container-fluid">
//                 <div className="row align-items-center mb-3">
                    
                     
//                     <div className="col-12 text-center col-sm-2 col-md-2 col-lg-2 mb-3 mb-sm-0">
//                         <img
//                             src="https://cdn-icons-png.flaticon.com/128/732/732221.png"
//                             alt="Company-Logo"
//                             className="company-logo"
//                             style={{ width: "50px", height: "50px" }}
//                         />
//                     </div>
//                     <div className="col-12 text-center text-sm-start col-sm-6 col-md-6 col-lg-6">
//                         <p className="company-name mb-2 fw-semibold">Microsoft</p>
//                         <h5 className="job-title">Need Senior MERN Stack Developer</h5>
//                         <div className="job-info  gap-2 py-2 ">
//                             <span className="badge bg-warning text-dark">Full Time</span>
//                             <span className="badge bg-light text-dark">$5k - $7k</span>
//                             <span className="badge bg-light text-dark">12 hours ago</span>
//                         </div>
//                     </div>
//                     <div className="col  text-center col-sm-4 col-md-3 col-lg-3 mt-3 mt-sm-0">
//                         <button onClick={handleNavigate} className="btn btn-outline-primary w-100">
//                             Apply Now <span>&rarr;</span>
//                         </button>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <p  className=" text-justify text-muted  text-sm-start">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis facilis hic provident voluptatibus explicabo facere quo nesciunt deserunt ut illum enim, tenetur expedita error laborum cumque ullam expedita error laborum cumque.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Card2;



import { useEffect, useState } from "react";
import "./Card2.scss";
import { useNavigate } from "react-router-dom";

function Card2() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);

    const handleNavigate = () => {
        navigate("/job");
    };

    const getJobs = async () => {
        const response = await fetch("/api/users/jobs");
        const data = await response.json();
        setJobs(data);
    };

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <div className="container mt-5 p-0">
            {jobs.map(job => (
                <div className="card shadow mb-4 bg-white rounded pe-3" key={job.id}>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-12 text-center col-sm-2">
                                <img
                                    src={job.image}
                                    alt={`${job.company} logo`}
                                    className="company-logo"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            </div>
                            <div className="col-12 text-center text-sm-start col-sm-6">
                                <p className="company-name mb-1 fw-semibold">{job.company}</p>
                                <h5 className="job-title">{job.title}</h5>
                                <div className="job-info py-2">
                                    <span className="badge bg-warning text-dark">{job.jobType}</span>
                                    <span className="badge bg-light text-dark">{job.salary}</span>
                                    <span className="badge bg-light text-dark">{job.posted}</span>
                                </div>
                            </div>
                            <div className="col text-center col-sm-4 mt-3 mt-sm-0">
                                <button 
                                    onClick={handleNavigate} 
                                    className="btn btn-outline-primary w-100" 
                                    aria-label={`Apply for ${job.title} at ${job.company}`}
                                >
                                    Apply Now <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <p className="text-justify text-muted mt-2">
                                {job.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card2;
