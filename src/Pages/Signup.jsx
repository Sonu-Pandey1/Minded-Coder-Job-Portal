import { useEffect } from 'react';
import './SignUp.scss';

function SignUp({ closeModal }) {
  // Add an event listener to detect clicks outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('sign-up-modal')) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="sign-up-modal">
      <div className="sign-up-content">
        <button className="close-btn" onClick={closeModal}>✖</button>
        <h2>Create an Account</h2>
        <div className="btn-group">
          <button className="btn active">Candidate</button>
          <button className="btn">Employer</button>
        </div>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <button className="next-btn">Next</button>
        </form>
        <p className="login-prompt">
          Already have an account? <a href="#login">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
