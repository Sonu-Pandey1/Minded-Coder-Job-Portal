import Card from "../Components/Card"
import "./Candidate.scss"
import { useSignupContext } from "../context/signupContext"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


function Candidate() {
  // const [candidates, setCandidates] = useState([]);
  // console.log(candidates)

  // const getCandidate = async ()=>{
  //   const data = await fetch("/api/users/candidate")
  //   const response = await data.json()
  //   setCandidates(response)
  // }
  // useEffect(()=>{
  //   getCandidate()
  // },[])

  const { getCandidate } = useSignupContext();
  const [candidates, setCandidates] = useState([]);
  console.log(candidates)


  useEffect(() => {
    const fetchCandidates = async () => {
      const res = await getCandidate();
      const data = await res.json()
      setCandidates(data); // assuming getCandidate returns the data
    };

    fetchCandidates();
  }, [getCandidate]);

  return (
    <>
      {/* All Candidate Hero Section */}

      <div className="Candidate-wrapper">
        <div className="container-fulid">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="text-center">Candidate List</p>
              </div>
            </div>
          </div>
        </div>

        {/* All Candidate Section  */}

        <div className="all-Candidate">
          <div className="Candidate-section">
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

                        <input className="" name="title" type="text" placeholder=" Search By Service" />

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

                        <select>
                          <option value="">Select Skill</option>
                          <option value="">Html</option>
                          <option value="">Css</option>
                          <option value="">Jvascript</option>
                          <option value="">React</option>
                          <option value="">React Native</option>
                          <option value="">Java</option>
                          <option value="">Express</option>
                        </select>

                      </div>
                    </div>
                  </div>
                </div>
                {/* All Candidate right section */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  <div className="Candidate-header d-flex justify-content-between py-2 px-3 rounded mb-4 border mt-4 mt-sm-4 mt-md-4 mt-lg-0">
                    <h5>We have Found <span className="fliter-count">{`${candidates.length}`}</span> Candidate</h5>
                    <p><button className="btn btn-outline-primary">Upload Your Resume</button></p>
                  </div>

                  <div className="row">
                    {candidates.map((candidate,index) => (
                      <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <div className="card pt-4 ">
                          <div className="text-center">
                            <img
                              src={candidate.img}
                              style={{ width: "30%", height: "30%" }}
                              className="company-log img-fluid rounded-circle shadow"
                              alt={`${candidate.name}'s avatar`}
                            />
                          </div>
                          <div className="card-body">
                            <h5 className="card-title text-center">{candidate.name}</h5>
                            <div className="text-center fs-6">
                              <span className="text-muted">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span className="ms-3">{candidate.location}</span>
                              </span>
                            </div>
                            <p className="skills d-flex my-3 justify-content-center flex-wrap py-1">
                              {candidate.skills.map((skill, index) => (
                                <span key={index} className="badge text-muted bg-light text-dark">
                                  {skill}
                                  {index < candidate.skills.length - 1 && ', '}
                                </span>
                              ))}
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View Candidate
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <div className="card-deck">
                    {candidates.map((candidate) => (
                      
                        <div  key={candidate.id} className="col-6">
                        <div  key={candidate.id} className="card pt-4  bg-info   ">
                        <div className="text-center">
                        <img
                          src={candidate.img}
                          style={{ width: "20%", height: "20%" }}
                          className=" company-log img-fluid rounded-circle shadow"
                          alt={`${candidate.name}'s avatar`}
                        />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-center">{candidate.name}</h5>

                          <div className="text-center fs-6 ">
                            <span className="text-muted  "><FontAwesomeIcon icon={faLocationDot} />{<span className="ms-3">{candidate.location}</span>}</span>
                          </div>

                          <p className="skills d-flex my-3  justify-content-center  flex-wrap py-1">
                            {candidate.skills.map((skill, index) => (
                              <span key={index} className="badge text-muted bg-light text-dark">
                                {skill}
                                {index < candidate.skills.length - 1 && ', '} {/* Add a comma except for the last item */}
                              {/* </span>
                            ))}
                          </p>
                          <button className="btn btn-outline-primary w-100 ">
                            View Candidate
                          </button>
                        </div>
                     
                        </div>
                      </div>
                    ))}
                  </div>  */}

                  {/* <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Sonu Pandey"} CandidateImg={"https://img.freepik.com/premium-vector/man-with-shirt-that-says-d-it_704913-37099.jpg?ga=GA1.1.1381281151.1722480315&semt=ais_hybrid"} DetailePara={"india"} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Khushi sharma"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fpic5.png&w=96&q=75"} DetailePara={"india"} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Rehan gupta"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1722602428%2Fzrncvsvmvmso0tclwkgl.png&w=96&q=75"} DetailePara={"Nepal"} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Nirmal sharma"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1722602428%2Fzrncvsvmvmso0tclwkgl.png&w=96&q=75"} DetailePara={"india"} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"harry vrma"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1706800687%2Fr6psbittxyek44iregmi.jpg&w=96&q=75"} DetailePara={"Canada"} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"peter gupta"} CandidateImg={"https://img.freepik.com/premium-vector/man-with-shirt-that-says-d-it_704913-37099.jpg?ga=GA1.1.1381281151.1722480315&semt=ais_hybrid"} DetailePara={"india"} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"sonam"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1706800687%2Fr6psbittxyek44iregmi.jpg&w=96&q=75"} DetailePara={"india"} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"hony singh"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1722602428%2Fzrncvsvmvmso0tclwkgl.png&w=96&q=75"} DetailePara={"Usa"} />
                    </div>
                    
                  </div> */}
                  <div className="all-Candidate d-flex justify-content-between mb-5 pt-3 pb-5 align-items-center">
                    <p className=""><button className=" btn btn-outline-primary">Previous</button></p>
                    <p><button className=" btn btn-outline-primary">Next</button></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Candidate
