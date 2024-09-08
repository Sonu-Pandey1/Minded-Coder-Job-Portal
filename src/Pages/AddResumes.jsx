import "./AddResumes.scss";
import { useState } from "react";

function AddResumes() {
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
    <main className="addResumes-container container-fluid py-4 overflow-y-scroll">
     <div className="emailVerifaction d-flex px-3 py-1 rounded-3  align-items-center">
        <div>
          <h5 className="pt-2">Email Verification Required</h5>
          <p>Please verify your email address by clicking the link in the email we sent you. Please check your spam folder if you don't see the email. If you still don't see the email, please contact us.</p>
        </div>
        <div className="ms-auto ">
          <button className="btn btn-outline-danger">Resend Email</button>
        </div>
      </div>
      <div className="col-12 bg-black text-white ps-4 pt-3 pb-2 mt-0 rounded-3 mt-5 "><h6>Submit resume</h6></div>
      <div className="addResumes-wrapper bg-light p-4 rounded-3 shadow-sm">
        <form className="row g-3 flex-row">
          <div className="col-6">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" placeholder="Full Name" className="form-control" id="name" required />
          </div>

          <div className="col-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" placeholder="info@youremail.com" className="form-control" id="email" required />
          </div>

          <div className="col-6">
            <label htmlFor="region" className="form-label">Region</label>
            <select id="region" className="form-select">
              <option>Choose a region</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>America</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="location" className="form-label">Location</label>
            <input type="text" placeholder="London, UK" className="form-control" id="location" />
          </div>

          <div className="col-md-6">
            <label htmlFor="video" className="form-label">Video (optional)</label>
            <input type="url" placeholder="https://example.com" className="form-control" id="video" />
          </div>

          <div className="col-md-6">
            <label htmlFor="rate" className="form-label">Minimum rate/h ($) (optional)</label>
            <input type="number" placeholder="40" className="form-control" id="rate" />
          </div>

          <div className="col-12">
            <label htmlFor="resumeContent" className="form-label">Resume Content</label>
            <textarea className="form-control" placeholder="Enter your resume content here..." id="resumeContent" rows="4"></textarea>
          </div>

          <div className="col-md-6">
            <label htmlFor="skills" className="form-label">Skills</label>
            <input type="text" placeholder="Add Skills..." className="form-control m-0" id="skills" />
          </div>

          <div className="col-md-6">
            <label htmlFor="resume-category" className="form-label">Resume Category</label>
            <select id="resume-category" className="form-select">
              <option>Choose a Category</option>
              <option>IT/Telecommunication</option>
              <option>Engineering</option>
              <option>Marketing</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="resume-file" className="form-label">Resume File (optional)</label>
            <input type="file" className="form-control m-0" id="resume-file" />
          </div>

          <div className="col-md-6">
            <label htmlFor="education" className="form-label">Education (optional)</label>
            <button type="button" className="btn btn-outline-success w-100">Add Education +</button>
          </div>

          <div className="col-md-6">
            <label htmlFor="experience" className="form-label">Experience (optional)</label>
            <button type="button" className="btn btn-outline-success w-100">Add Experience +</button>
          </div>

          <div className="col-md-6">
            <label htmlFor="url" className="form-label">URL(s) (optional)</label>
            <button type="button" className="btn btn-outline-success w-100">Add URL +</button>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-success rounded-3 px-4 py-2">Submit</button>
          </div>
        </form>
      </div>
      {/*  */}

    </main>
  );
}

export default AddResumes;
