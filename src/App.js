import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Email validation onChange handler
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Check if email is valid
    if (value.length > 3 && value.includes('@') && value.includes('.')) {
      setEmailError('');
    } else {
      setEmailError('Make sure email is more than 3 characters and has @ and a .');
    }

    // Check if both email and password are valid
    checkFormValidity();
  };

  // Password validation onChange handler
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Check if password is valid
    if (value.length > 8) {
      setPasswordError('');
    } else {
      setPasswordError('Make sure password is more than 8 characters.');
    }

    // Check if both email and password are valid
    checkFormValidity();
  };

  // Function to check form validity
  const checkFormValidity = () => {
    if (email.length > 3 && email.includes('@') && email.includes('.') && password.length > 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // If both email and password are valid, show confirmation window
    if (isValid) {
      const confirmed = window.confirm('Are you sure you want to sign up?');

      if (confirmed) {
        alert('Successful signup!');
        // Clear form fields
        setEmail('');
        setPassword('');
        setIsValid(false);
      } else {
        // Reload page to reset form inputs
        window.location.reload();
      }
    }
  };

  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Example@email.com"
          />
          {emailError && <p className="error-text">{emailError}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Your Password"
          />
          {passwordError && <p className="error-text">{passwordError}</p>}
        </div>

        {isValid && (
          <p className="success-text">All good to go!</p>
        )}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
