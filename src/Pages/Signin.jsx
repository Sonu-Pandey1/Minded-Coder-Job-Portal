import { useEffect } from 'react';
import './Signin.scss';

// eslint-disable-next-line react/prop-types
function SignIn({ closeModal }) {

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
    <div className="sign-in-modal ">
      <div className="sign-in-content ">
        <div className="wrapper d-flex mb-5 border-bottom">
          <button className="close-btn  p-2 rounded" onClick={closeModal}>✖</button>
          <h2>Login</h2>
        </div>
        <form>
          <label htmlFor="username">UserName</label>
          <input type="email" autoFocus placeholder="Username" id='username' name='username' required />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id='password' name='password' required />
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#forgot-password" className="forgot-password">Forget password?</a>
          <button className="login-btn">Login</button>
        </form>
        <p className="sign-up-prompt">
          Not a Member? <button onClick={closeModal}> Create Account</button>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
