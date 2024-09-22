
import { useEffect, useState } from "react";
import Card2 from "../Components/Card2"
import "./FindJob.scss"
import { useNavigate } from "react-router-dom";


function FindJob() {

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
    <>
      {/* All Jobs Hero Section */}

      <div className="all-jobs-wrapper">
        <div className="container-fulid">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="text-center title">Find Your Dream Job</p>
              </div>
            </div>
          </div>
        </div>

        {/* All jobs Section  */}

        <div className="all-jobs">
          <div className="job-section">
            <div className="container ">
              <div className="row">
                {/* filter-section */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 ">
                  <div className="filter-wrapper rounded border shadow">
                    {/* filter-top */}
                    <div className="fliter-top d-flex justify-content-between align-items-center pt-4 px-3">
                      <h6 className="m-0">Search Filter</h6>
                      <p className="m-0 text-danger">Clear</p>
                    </div>
                    <hr />
                    {/* filter-middle */}
                    <div className="filter-middle border-bottom">
                      <div className="form  ">
                        <input className="" name="title" type="text" placeholder=" Job Title or Keyword" />
                        <input name="location" type="text" placeholder=" Location" />
                        <select>
                          <option value="">Select Categories</option>
                          <option value="">Mern</option>
                          <option value="">Marn</option>
                          <option value="">Web Developer</option>
                          <option value="">Back-end Developer</option>
                          <option value="">Fron-end Developer</option>
                          <option value="">Full-stack Developer</option>
                          <option value="">Design/Creative</option>
                          <option value="">Eduction/Training</option>
                          <option value="">Engineer/arechitects</option>
                          <option value="">Marketing/sales</option>
                          <option value="">It/telicommunicstion</option>

                        </select>
                      </div>
                    </div>
                    {/* <hr /> */}
                    {/* filter-bottom */}

                    <div className="filter-top-bottom p-3 border-bottom">
                      <div className="title">
                        <h6>Job Type</h6>
                      </div>
                      <div className="filter-checkboxes">
                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                          <input type="checkbox" name="FullTime" id="partTime" className="checkbox" />
                          <label htmlFor="partTime" className=" ms-2">Part Time</label>
                          <span className="ms-auto">5</span>
                        </div>
                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                          <input type="checkbox" name="FullTime"
                            className="checkbox"
                            id="partTime" />
                          <label htmlFor="partTime" className="ms-2">Full Time</label>
                          <span className="ms-auto">15</span>
                        </div>
                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                          <input type="checkbox" name="FullTime" className="checkbox" id="partTime" />
                          <label htmlFor="partTime" className="ms-2">Remote</label>
                          <span className="ms-auto">23</span>
                        </div>
                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                          <input type="checkbox" name="FullTime" className="checkbox" id="partTime" />
                          <label htmlFor="partTime" className="ms-2">Freelance</label>
                          <span className="ms-auto">34</span>
                        </div>
                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                          <input type="checkbox" name="FullTime" className="checkbox" id="partTime" />
                          <label htmlFor="partTime" className="ms-2">Internship</label>
                          <span className="ms-auto">29</span>
                        </div>
                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                          <input type="checkbox" name="FullTime" className="checkbox" id="partTime" />
                          <label htmlFor="partTime" className="ms-2">Contract-based</label>
                          <span className="ms-auto">9</span>
                        </div>

                      </div>
                    </div>
                    {/* <hr /> */}

                    {/* filter bottom */}
                    <div className="filter-top-bottom p-3">
                      <div className="title">
                        <h6>Experience</h6>
                      </div>
                      <div className="filter-checkboxes">
                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                          <input type="checkbox" name="frasher" className="checkbox" id="frasher" />
                          <label htmlFor="frasher" className="ms-2">Frasher</label>
                          <span className="ms-auto">7</span>
                        </div>
                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                          <input type="checkbox" name="years" className="checkbox" id="years" />
                          <label htmlFor="years" className="ms-2">+ Years</label>
                          <span className="ms-auto">13</span>
                        </div>
                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                          <input type="checkbox" name="3years" className="checkbox" id="3years" />
                          <label htmlFor="3years" className="ms-2">+ 3 Years</label>
                          <span className="ms-auto">22</span>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
                {/* latest job section */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  <div className="job-header d-flex justify-content-between py-2 px-3 mt-4 mt-sm-4 mt-md-0 rounded mb-4 border">
                    <h5>We have Found <span className="fliter-count">{jobs.length}</span> Jobs</h5>
                    <div>
                      <select>
                        <option value="">Sort By</option>
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                        <option value="">Featured</option>
                      </select>
                    </div>
                  </div>
                  {/* <Card2 /> */}
                  <div className="container p-0">
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

                  <div className="all-jobs d-flex justify-content-between mb-5 pt-3 pb-5">
                    <p><button className=" btn btn-outline-primary">Previous</button></p>
                    <p><button className=" btn btn-outline-primary">Next</button></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Outlet/> */}
      </div>
    </>
  )
}

export default FindJob
