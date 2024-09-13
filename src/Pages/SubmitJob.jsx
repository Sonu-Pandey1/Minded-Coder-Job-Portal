import "./SubmitJob.scss";
import { useState } from "react";
import EmailVerifaction from "../Components/EmailVerifaction"
import Sidebar from "./Sidebar"

function SubmitJob() {
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
                        <div className="col-12 bg-black text-white ps-4 pt-3 pb-2 mt-0 rounded-3 mt-5 "><h6>Job Details</h6></div>
                        <div className="addResumes-wrapper bg-white p-4 rounded-3 shadow-lg">
                            <form className="row g-3 flex-row">
                                <div className="col-6">
                                    <label htmlFor="j-title" className="form-label">Job Title</label>
                                    <input type="text" placeholder="React Develpoer" className="form-control" id="j-title" required />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="j-region" className="form-label">Job Country</label>
                                    <select id="j-region" className="form-select mt-2">
                                        <option>Choose a Countery</option>
                                        <option>India</option>
                                        <option>UK</option>
                                        <option>America</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="j-location" className="form-label">Location</label>
                                    <input type="text" placeholder=" e.g. London, UK" className="form-control" id="j-location" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="j-tags" className="form-label">Job Tags</label>
                                    <input type="text" placeholder="html,css,js" className="form-control" id="j-tags" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="j-category" className="form-label">Job Category</label>
                                    <select id="j-category" className="form-select">
                                        <option>Choose a Category</option>
                                        <option>IT/Telecommunication</option>
                                        <option>Engineering</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="j-type" className="form-label">Job Type</label>
                                    <select id="j-type" className="form-select">
                                        <option>Choose a Type</option>
                                        <option value={"full-time"}>Full Time</option>
                                        <option value={"part-time"}>Part Time</option>
                                        <option value={"hybird"} >Hybird</option>
                                        <option value={"internship"}>Internship</option>
                                        <option value={"freelance"}>Freelance</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="j-min-salary" className="form-label">Minimum Salary($) (optional)</label>
                                    <input type="text" placeholder="$100" id="j-min-salary" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="j-max-salary" className="form-label">Maximum Salary($) (optional)</label>
                                    <input type="text" placeholder="$10000" className="form-control" id="j-max-salary"  />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="j-max-rate" className="form-label">Maximum Rate/h(optional)</label>
                                    <input type="text" placeholder="$40" className="form-control" id="j-max-rate" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="resume-file" className="form-label">Resume File (optional)</label>
                                    <input type="file" className="form-control mt-2 m-0" id="resume-file" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="j-header" className="form-label">Job Header (optional)</label>
                                    <input type="file" className="form-control m-0" id="j-header" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="j-description" className="form-label"> Description</label>
                                    <textarea className="form-control" placeholder="We are a team of expert designers and developers committed to rendering the best WordPress website designing services in a cost-effective practice. We are on a mission to help small business owners build their presence online. Our customer-centric approach ensures that the final product is unbeatable." id="j-description" rows="6"></textarea>
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

export default SubmitJob;
