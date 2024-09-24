import { useState } from "react";
import "./MyProfile.scss"
import EmailVerification from "../Components/EmailVerifaction"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar"
import { useSignupContext } from "../context/signupContext";

const MyProfile = () => {

  const {user} = useSignupContext();
  // console.log(user);
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
    <div className="container-fulid myProfile-W">
      <div className="row g-0">
        <div className="col-2 bg-white shadow-lg ">
          <div className="bg-info">
            <Sidebar />
          </div>
        </div>
        <div className="col-10">
          <div className="myProfile-container py-5 px-5">

            <EmailVerification />
            <div className="bg-dark text-white mt-5 p-2 ps-4 rounded-3">
      <p className="fs-4 m-0 ">My Profile</p>
      </div>

            <div className=" bg-white shadow-lg p-4">
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
                      <input type="text" className="form-control" value={user.username} />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input type="text" className="form-control" value={user.userlastname} />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                      <input type="email" className="form-control" value={user.email} />
                    </div>
                    <div className="col-md-6">
                      <label>Phone</label>
                      <input type="text" className="form-control" value={user.ph} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label>About Me</label>
                <textarea className="form-control" rows="6" placeholder="Type something..."></textarea>
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

              <button className="btn btn-primary mt-4">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
