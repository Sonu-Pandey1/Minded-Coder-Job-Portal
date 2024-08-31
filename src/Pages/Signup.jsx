import { useEffect, useState } from 'react';
import './Signup.scss';


// eslint-disable-next-line react/prop-types
function SignUp({ closeModal }) {

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
    <div className="sign-up-modal">
      <div className="sign-up-content">
        <div className="wrapper d-flex justify-content-between align-items-center">
          <button className="close-btn p-2 rounded" onClick={closeModal}>✖</button>
          <h2 >Create an Account</h2>
        </div>
        <div className="select-category d-flex justify-content-between mt-5 mb-3">
          <div
            className={`category-wrapper ${selectedCategory === 'candidate' ? 'selected' : ''}`}
            onClick={handleWrapperClick}
          >
            <label htmlFor="candidate1">Candidate</label>
            <input type="radio" name="candidate" id="candidate" />
          </div>
          <div
            className={`category-wrapper ${selectedCategory === 'employer' ? 'selected' : ''}`}
            onClick={handleWrapperClick}
          >
            <label htmlFor="candidate2">Employer</label>
            <input type="radio" name="candidate" id="employer" />
          </div>
        </div>
        <form>
          <label htmlFor="username">UserName</label>
          <input type="text" autoFocus id='username' name='username' placeholder="User Name" required />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id='email' name='email' required />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' placeholder="Password" required />
          <label htmlFor="c_password">Confirm Password</label>
          <input type="password" id="c_password" name='c_password' placeholder="Confirm_Password" required />
          <button type='submit' className="submit-btn">Submit</button>
        </form>
        <p className="login-prompt">
          Already have an account?
          <button className='btnn' type="button" onClick={closeModal}>Log In</button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
