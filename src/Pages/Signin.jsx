import { useEffect } from 'react';
import './SignIn.scss';

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
    <div className="sign-in-modal">
      <div className="sign-in-content">
        <button className="close-btn" onClick={closeModal}>✖</button>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">UserName</label>
          <input type="email" placeholder="Username" id='username' name='username' required />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id='password' name='password' required />
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#forgot-password" className="forgot-password">Lost password?</a>
          <button className="login-btn">Login</button>
        </form>
        <p className="sign-up-prompt">
          Not a Member? <a href="#signup">Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
