import Card from "../Components/Card"
import "./Companys.scss"
import { useSignupContext } from "../context/signupContext"
import { useEffect } from "react"


function Companys() {

  // const {getCandidate}  = useSignupContext();
  // // console.log(getCandidate())

  // useEffect(()=>{
  //   getCandidate();
  // },[getCandidate]);

  return (
    <>
      {/* All Companys Hero Section */}

      <div className="Companys-wrapper">
        <div className="container-fulid">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="text-center">All Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* All Companys Section  */}

        <div className="all-Companys">
          <div className="Companys-section">
            <div className="container ">
              <div className="row">
                {/* filter-section */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
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

                        <input className="" name="title" type="text" placeholder=" Company Name" />

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
                          <option value="">Company Size</option>
                          <option value="">1-10</option>
                          <option value="">10-50</option>
                          <option value="">50-100</option>
                          <option value="">100-500</option>
                          <option value="">500+</option>
                        </select>

                        <select>
                          <option value="">AVG. Salary</option>
                          <option value="">10k</option>
                          <option value="">20k</option>
                          <option value="">30k</option>
                          <option value="">40k</option>
                          <option value="">50k+</option>
                        </select>

                      </div>
                    </div>
                  </div>
                </div>
                {/* All Companys right section */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  <div className="Companys-header d-flex justify-content-between py-2 px-3 rounded mb-4 border mt-4 mt-sm-4 mt-md-4 mt-lg-0">
                    <h5>We have Found <span className="fliter-count">20</span> Companys</h5>
                    <p>
                      <button className="btn btn-outline-primary">Add Your Comapny</button>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 ">
                      <Card Title={"Microsoft"} about={"AI Assitants"} CompanyImg={"https://cdn-icons-png.flaticon.com/128/732/732221.png"} Location={"Usa"} Salary={"40,000-50,000"} CompanySize={"100-900"}/>
                    </div> 
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Microsoft"} about={"AI Assitants"} CompanyImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdv1g6pcth%2Fimage%2Fupload%2Fv1699159775%2Fexurabp3oig1toy7wd7e.png&w=128&q=75"} Location={"Usa"} Salary={"40,000-50,000"} CompanySize={"100-900"}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Microsoft"} about={"AI Assitants"} CompanyImg={"https://metajobs.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fjs-template%2Fimage%2Fupload%2Fv1699510355%2Fr7ydsa6nj9luvbowqcpq.png&w=128&q=75"} Location={"Usa"} Salary={"40,000-50,000"} CompanySize={"100-900"} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Microsoft"} about={"AI Assitants"} CompanyImg={"https://metajobs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Favatar.png&w=128&q=75"} Location={"Usa"} Salary={ " 40,000-50,000"} CompanySize={"100-900"}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Microsoft"} about={"AI Assitants"} CompanyImg={"https://metajobs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Favatar.png&w=128&q=75"} Location={"Usa"} Salary={"40,000-50,000"} CompanySize={"100-900"}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Microsoft"} about={"AI Assitants"} CompanyImg={"https://metajobs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Favatar.png&w=128&q=75"} Location={"Usa"} Salary={"40,000-50,000"} CompanySize={"100-900"}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Microsoft"} about={"AI Assitants"} CompanyImg={"https://metajobs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Favatar.png&w=128&q=75"} Location={"Usa"} Salary={"40,000-50,000"} CompanySize={"100-900"}/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                      <Card Title={"Microsoft"} about={"AI Assitants"} CompanyImg={"https://metajobs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Favatar.png&w=128&q=75"} Location={"Usa"} Salary={"40,000-50,000"} CompanySize={"100-900"}/>
                    </div>

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
      </div>
    </>
  )
}

export default Companys
