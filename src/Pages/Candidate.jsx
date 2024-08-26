import Card from "../Components/Card"
import "./Candidate.scss"


function Candidate() {
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
            <div className="container p-0 ">
              <div className="row">
                {/* filter-section */}
                <div className="col-3 ">
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
                <div className="col-9">
                  <div className="Candidate-header d-flex justify-content-between py-2 px-3 rounded mb-4 border">
                    <h5>We have Font <span className="fliter-count">20</span> Candidate</h5>
                    <button className="btn btn-outline-primary">Upload Your Resume</button>
                  </div>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <div className="all-Candidate d-flex justify-content-between mb-5 pt-3 pb-5">
                    <button className=" btn btn-outline-primary">Previous</button>
                    <button className=" btn btn-outline-primary">Next</button>
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
