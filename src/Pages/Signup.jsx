import { useEffect, useState } from 'react';
import './Signup.scss';
import { useFormik } from "formik"
import { SignupSchema } from '../Schemas/SignUpSchema';

let initialValues = {
  username: "",
  name: "",
  user: "",
  email: "",
  e_email: "",
  password: "",
  e_password: "",
  designation: "",
  companyname: "",
  c_password: "",
  e_c_password: "",


}

// eslint-disable-next-line react/prop-types
function SignUp({ closeModal }) {



  let { errors, values, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: SignupSchema
  })

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

  const [selectedCategory, setSelectedCategory] = useState('candidate');
  console.log(selectedCategory)

  const handleWrapperClick = (event) => {
    const inputElement = event.currentTarget.querySelector('input');
    if (inputElement) {
      inputElement.click();
      setSelectedCategory(inputElement.id);
    }
  };


  return (
    <div className="signup-wrapper">
      <div className="sign-up-modal">
        <div className="sign-up-content">
          <div className="wrapper d-flex justify-content-between align-items-center">
            <button className="close-btn p-2 rounded" onClick={closeModal}>✖</button>
            <h2 >Create an Account</h2>
          </div>
          <div className="select-category d-flex justify-content-center mt-5 mb-3 gap-5 ">
            <div
              className={`category-wrapper ${selectedCategory === 'candidate' ? 'selected' : ''}`}
              onClick={handleWrapperClick}
            >
              <label htmlFor="candidate1">Candidate</label>
              <input type="radio" name="user" value={values.user} onChange={handleChange} onBlur={handleBlur} id="candidate" />
            </div>
            <div
              className={`category-wrapper ${selectedCategory === 'employer' ? 'selected' : ''}`}
              onClick={handleWrapperClick}
            >
              <label htmlFor="candidate2">Employer</label>
              <input type="radio" name="user" value={values.user} onChange={handleChange} onBlur={handleBlur} id="employer" />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {selectedCategory == "employer" ?
              <>
                <label htmlFor="name">Name</label>
                <input type="text" autoFocus id='name' name='name' placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur} required />
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.name}</p>
              </> :
              <>
                <label htmlFor="username">User Name</label>
                <input type="text" autoFocus id='username' name='username' placeholder="Name" value={values.username} onChange={handleChange} onBlur={handleBlur} required />
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.username}</p>
              </>
            }

            {selectedCategory == "employer" ?
              <>
                <label htmlFor="e_email">Email</label>
                <input type="email" placeholder="Email" id='e_email' name='e_email' value={values.e_email} onChange={handleChange} onBlur={handleBlur} required />
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.email}</p>
              </> :
              <>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.e_email}</p>
              </>
            }

            {
              selectedCategory == "employer" ? <><label htmlFor="Designation" className='mb-2'>Designation</label>
                <select name='designation' value={values.designation} onChange={handleChange} onBlur={handleBlur}>
                  <option value="">Choose Your Designation</option>
                  <option value="hr">HR</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                  <option value="seniorDeveloper">Senior Developer</option>
                </select>
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.designation}</p>
              </> : null
            }
            {
              selectedCategory == "employer" ? <><label htmlFor="company-name">Comapny`s name</label>
                <input type="text" placeholder="company-name" id='company-name' name='companyname' value={values.companyname} onChange={handleChange} onBlur={handleBlur} required />
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.companyname}</p>
                </> : null
            }

            {selectedCategory == "employer" ?
              <>
                <label htmlFor="e_password">Password</label>
                <input type="password" id='e_password' name='e_password' placeholder="Password" value={values.e_password} onChange={handleChange} onBlur={handleBlur} required />
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.e_password}</p>
              </> :
              <>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} required />
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.password}</p>
              </>
            }

            {selectedCategory == "employer" ?
              <>
                <label htmlFor="e_c_password">Confirm Password</label>
                <input type="password" id="e_c_password" name='e_c_password' placeholder="Confirm_Password" value={values.e_c_password} onChange={handleChange} onBlur={handleBlur} required />
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.e_c_password}</p>
              </> :
              <>
                <label htmlFor="c_password">Confirm Password</label>
                <input type="password" id="c_password" name='c_password' placeholder="Confirm_Password" value={values.c_password} onChange={handleChange} onBlur={handleBlur} required />
                <p className='form-error text-danger badge bg-danger-subtle'>{errors.c_password}</p>
              </>
            }

            <button type='submit' className="submit-btn">Submit</button>
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
