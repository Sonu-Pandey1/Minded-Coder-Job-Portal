import { useState } from "react";
import "./Myprofile.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons/faCameraAlt";

const MyProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="myProfile-container mt-4">
      
        <div className="emailVerifaction d-flex px-3 py-1 rounded-3  align-items-center">
          <div>
            <h5 className="pt-2">Email Verification Required</h5>
            <p>Please verify your email address by clicking the link in the email we sent you. Please check your spam folder if you don't see the email. If you still don't see the email, please contact us.</p>
          </div>
          <div className="ms-auto ">
            <button className="btn btn-outline-danger">Resend Email</button>
          </div>
        </div>
        <div className="myProfile-Wrapper">
          <div className="form">

          </div>
        </div>
      
      <div className="mt-4 bg-white shadow-sm p-4">
        <h2 className="mb-4">My Profile</h2>

        {/* Profile Image Section */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-2 text-center">
            <div className="profile-image-wrapper" style={{ position: 'relative', width: '150px', height: '150px' }}>
              <img
                src={profileImage || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <label
                htmlFor="profileImageInput"
                className="camera-icon"
                style={{
                  
                  position: 'absolute',
                  bottom: '10px',
                  right: '0px',
                  backgroundColor: '#fff',
                  borderRadius: '100%',
                  padding: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                <i className="fas fa-camera "></i>
                <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
              </label>
              <input
                type="file"
                id="profileImageInput"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6">
                <label>First Name</label>
                <input type="text" className="form-control" defaultValue="Sonu" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input type="text" className="form-control" defaultValue="Pandey" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" defaultValue="Banner@gmail.com" />
              </div>
              <div className="col-md-6">
                <label>Phone</label>
                <input type="text" className="form-control" defaultValue="(406) 555-0120" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label>About Me</label>
          <textarea className="form-control" rows="3" placeholder="Type something..."></textarea>
        </div>

        {/* Change Password Section */}
        <h3 className="mb-3">Change Password</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Current Password</label>
            <input
              type="password"
              className="form-control"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="col-md-6">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <button className="btn btn-success">Save Changes</button>
      </div>
    </div>
  );
};

export default MyProfile;
