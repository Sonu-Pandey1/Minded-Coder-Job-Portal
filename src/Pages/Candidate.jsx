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
                    <h5>We have Found <span className="fliter-count">8</span> Candidate</h5>
                    <p><button className="btn btn-outline-primary">Upload Your Resume</button></p>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <Card Title={"Sonu Pandey"} CandidateImg={"https://img.freepik.com/premium-vector/man-with-shirt-that-says-d-it_704913-37099.jpg?ga=GA1.1.1381281151.1722480315&semt=ais_hybrid"} DetailePara={"india"} />
                    </div>
                    <div className="col-4">
                      <Card Title={"Khushi sharma"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fpic5.png&w=96&q=75"} DetailePara={"india"} />
                    </div>
                    <div className="col-4">
                      <Card Title={"Rehan gupta"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1722602428%2Fzrncvsvmvmso0tclwkgl.png&w=96&q=75"} DetailePara={"Nepal"} />
                    </div>
                    <div className="col-4">
                      <Card Title={"Nirmal sharma"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1722602428%2Fzrncvsvmvmso0tclwkgl.png&w=96&q=75"} DetailePara={"india"} />
                    </div>
                    <div className="col-4">
                      <Card Title={"harry vrma"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1706800687%2Fr6psbittxyek44iregmi.jpg&w=96&q=75"} DetailePara={"Canada"} />
                    </div>
                    <div className="col-4">
                      <Card Title={"peter gupta"} CandidateImg={"https://img.freepik.com/premium-vector/man-with-shirt-that-says-d-it_704913-37099.jpg?ga=GA1.1.1381281151.1722480315&semt=ais_hybrid"} DetailePara={"india"} />
                    </div>
                    <div className="col-4">
                      <Card Title={"sonam"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1706800687%2Fr6psbittxyek44iregmi.jpg&w=96&q=75"} DetailePara={"india"} />
                    </div>
                    <div className="col-4">
                      <Card Title={"hony singh"} CandidateImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1722602428%2Fzrncvsvmvmso0tclwkgl.png&w=96&q=75"} DetailePara={"Usa"} />
                    </div>
                    
                  </div>
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
