
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { SignupSchema } from "../Conf/FormSchemas/SignUpSchema";
import './Signup.scss';

function SignUp({ closeModal }) {
  const [selectedCategory, setSelectedCategory] = useState('candidate');
  const [initialValues, setInitialValues] = useState({
    username: "",
    email: "",
    password: "",
    Cpassword: "",
    name: "",
    Eemail: "",
    designation: "",
    companyname: "",
    Epassword: "",
    ECpassword: "",
    selectedCategory: 'candidate'
  });

  // Update initialValues based on selectedCategory
  useEffect(() => {
    if (selectedCategory === 'candidate') {
      setInitialValues({
        username: "",
        email: "",
        password: "",
        Cpassword: "",
        selectedCategory: 'candidate'
      });
    } else {
      setInitialValues({
        name: "",
        Eemail: "",
        designation: "",
        companyname: "",
        Epassword: "",
        ECpassword: "",
        selectedCategory: 'employer'
      });
    }
  }, [selectedCategory]);

  // Form Handling & Valdidation
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
    validationSchema: SignupSchema,
    enableReinitialize: true,
  });

  // Close Module
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('sign-up-modal')) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  // Handle Select User
  const handleUserTypeClick = (event) => {
    const id = event.currentTarget.querySelector('input').id;
    setSelectedCategory(id);
  };

  return (
    <div className="signup-wrapper">
      <div className="sign-up-modal">
        <div className="sign-up-content">

          <div className="wrapper d-flex justify-content-between align-items-center">
            <button className="close-btn p-2 rounded" onClick={closeModal}>✖</button>
            <h2>Create an Account</h2>
          </div>

          <div className="select-category d-flex justify-content-center mt-5 mb-3 gap-5">
            <div
              className={`category-wrapper ${selectedCategory === 'candidate' ? 'selected' : ''}`}
              onClick={handleUserTypeClick} >
              <label htmlFor="candidate">Candidate</label>
              <input type="radio" name="user" id="candidate" />
            </div>
            <div
              className={`category-wrapper ${selectedCategory === 'employer' ? 'selected' : ''}`}
              onClick={handleUserTypeClick} >
              <label htmlFor="employer">Employer</label>
              <input type="radio" name="user" id="employer" />
            </div>
          </div>

          {/* User Form */}
          <form onSubmit={formik.handleSubmit}>

            {selectedCategory === "employer" ? (
              <>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.name}</p>
                )}
              </>
            ) : (
              <>
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  id='username'
                  name='username'
                  placeholder="User Name"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.username && formik.touched.username && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.username}</p>
                )}
              </>
            )}

            {selectedCategory === "employer" ? (
              <>
                <label htmlFor="Eemail">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  id='Eemail'
                  name='Eemail'
                  value={formik.values.Eemail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.Eemail && formik.touched.Eemail && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.Eemail}</p>
                )}
              </>
            ) : (
              <>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  id='email'
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.email}</p>
                )}
              </>
            )}

            {selectedCategory === "employer" && (
              <>
                <label htmlFor="designation" className='mb-2'>Designation</label>
                <select
                  name='designation'
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Choose Your Designation</option>
                  <option value="hr">HR</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                  <option value="seniorDeveloper">Senior Developer</option>
                </select>
                {formik.errors.designation && formik.touched.designation && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.designation}</p>
                )}
              </>
            )}

            {selectedCategory === "employer" && (
              <>
                <label htmlFor="companyname">Company's Name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  id='companyname'
                  name='companyname'
                  value={formik.values.companyname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.companyname && formik.touched.companyname && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.companyname}</p>
                )}
              </>
            )}

            {selectedCategory === "employer" ? (
              <>
                <label htmlFor="Epassword">Password</label>
                <input
                  type="password"
                  id='Epassword'
                  name='Epassword'
                  placeholder="Password"
                  value={formik.values.Epassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.Epassword && formik.touched.Epassword && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.Epassword}</p>
                )}
                <label htmlFor="ECpassword">Confirm Password</label>
                <input
                  type="password"
                  id="ECpassword"
                  name='ECpassword'
                  placeholder="Confirm Password"
                  value={formik.values.ECpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.ECpassword && formik.touched.ECpassword && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.ECpassword}</p>
                )}
              </>
            ) : (
              <>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id='password'
                  name='password'
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.password}</p>
                )}
                <label htmlFor="Cpassword">Confirm Password</label>
                <input
                  type="password"
                  id="Cpassword"
                  name='Cpassword'
                  placeholder="Confirm Password"
                  value={formik.values.Cpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.Cpassword && formik.touched.Cpassword && (
                  <p className='form-error text-danger badge bg-danger-subtle text-start'>{formik.errors.Cpassword}</p>
                )}
              </>
            )}

            {selectedCategory === "employer" ?
              <button type='submit' className="submit-btn">Submit</button> :
              <button type='submit' className="submit-btn">Register</button>
            }

          </form>

          <p className="login-prompt">
            Already have an account?
            <button className='btnn' type="button" onClick={closeModal}>Log In</button>
          </p>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
