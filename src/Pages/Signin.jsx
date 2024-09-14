import { useEffect } from 'react';
import './Signin.scss';
import { useFormik } from 'formik';
import { SignInSchema } from '../Schemas/SignInSchema';

const initialValues = {
  username: "",
  password: "",

}

function SignIn({ closeModal }) {

  // handle form valadition
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: SignInSchema,
  })

  // close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('sign-in-modal')) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="signin-wrapper">
      <div className="sign-in-modal ">
        <div className="sign-in-content ">

          <div className="wrapper d-flex mb-5 border-bottom">
            <button className="close-btn  p-2 rounded" onClick={closeModal}>✖</button>
            <h2>Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">User Name</label>
            <input type="email"  placeholder="User Name" id='username' name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} />

            {errors.username && touched.username ?
              <p className='form-error text-danger badge bg-danger-subtle'>{errors.username}</p> : null
            }

            <label htmlFor="Cpassword">Password</label>
            <input type="password" placeholder="Password" id='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />

            {errors.password && touched.password ?
              <p  className='form-error text-danger badge bg-danger-subtle'>{errors.password}</p> : null
            }

            <div className="remember-me">

              <input type="checkbox" id="remember" value={values.saved} onChange={handleChange} onBlur={handleBlur} />
              <label htmlFor="remember">Remember me</label>

            </div>
            <a href="#forgot-password" className="forgot-password">Forget password?</a>
            <button type='submit' className="login-btn">Login</button>

          </form>

          <p className="sign-up-prompt">
            Not a Member? <button onClick={closeModal}> Create Account</button>
          </p>

        </div>
      </div>
    </div>
  );
}

export default SignIn;
