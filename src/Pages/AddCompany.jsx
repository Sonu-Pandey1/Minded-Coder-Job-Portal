import "./AddCompany.scss";
import { useState } from "react";
import EmailVerifaction from "../Components/EmailVerifaction"
import Sidebar from "./Sidebar"

function AddCompany() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        title: "",
        location: "",
        region: "",
        video: "",
        rate: "",
        resumeContent: "",
        skills: "",
    });

    return (
        <div className="container-fulid">
            <div className="row g-0">
                <div className=" col-2 bg-white shadow-lg  ">
                    <div className=" ">
                        <Sidebar />
                    </div>
                </div>
                <div className="col-10">
                    <main className="addResumes-container container-fluid py-5 px-5 overflow-y-scroll">
                        <EmailVerifaction />
                        <div className="col-12 ps-4 pt-3 pb-2 mt-0 rounded-3 mt-5 bg-dark text-white "><h6> Add Company</h6></div>
                        <div className="addResumes-wrapper bg-white p-4 rounded-3 shadow-lg">
                            <form className="row g-3 flex-row">
                                <div className="col-6">
                                    <label htmlFor="name" className="form-label">Company Name</label>
                                    <input type="text" placeholder="Microsoft" className="form-control" id="name" required />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="headquarters" className="form-label">Company Headquarters</label>
                                    <input type="text" placeholder="Noida,India" className="form-control" id="headquarters" required />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="c-website" className="form-label">Company Website</label>
                                    <input type="url" placeholder="https://YourWebsite.com" className="form-control" id="c-website" required />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="c-linkdin" className="form-label">Linkedin URL (optional)</label>
                                    <input type="url" placeholder="https://YourWebsite.com" className="form-control" id="c-linkdin" />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" placeholder="info@youremail.com" className="form-control" id="email" required />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="ph-number" className="form-label">Phone Number</label>
                                    <input type="number" placeholder="+91 8766325423" className="form-control" id="ph-number" required />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="c-size" className="form-label">Company Size</label>
                                    <select id="c-size" className="form-select">
                                        <option>Select Size</option>
                                        <option>1-10</option>
                                        <option>11-50</option>
                                        <option>51-100</option>
                                        <option>101-200</option>
                                        <option>200-500</option>
                                        <option>500+</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="location" className="form-label">Location</label>
                                    <input type="text" placeholder="London, UK" className="form-control" id="location" />
                                </div>



                                {/* <div className="col-md-6">
                                    <label htmlFor="a-salary" className="form-label">Average Salary($) (optional)</label>
                                    <select name="s-salary" id="a-salary">
                                        <option value="">Select Salary</option>
                                        <option value="">1-10,000</option>
                                        <option value="">10,000-10,000,0</option>
                                        <option value="">10,000,0-10,000,00</option>

                                    </select>
                                </div> */}
                                <div className="col-md-6">
                                    <label htmlFor="c-category" className="form-label">Company Category</label>
                                    <select id="c-category" className="form-select">
                                        <option>Choose a Category</option>
                                        <option>IT/Telecommunication</option>
                                        <option>Engineering</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>

                               
                                <div className="col-md-6">
                                    <label htmlFor="c-logo" className="form-label">Company Logo(optional)</label>
                                    <input type="file" className="form-control m-0" id="c-logo" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="c-h-img" className="form-label">Company Header Image(optional)</label>
                                    <input type="file" className="form-control m-0" id="c-h-img" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="resumeContent" className="form-label">Company Description</label>
                                    <textarea className="form-control" placeholder="Enter about your company(description)." id="resumeContent" rows="6"></textarea>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-success rounded-3 px-4 py-2 mt-4">Submit</button>
                                </div>
                            </form>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
}

export default AddCompany;
