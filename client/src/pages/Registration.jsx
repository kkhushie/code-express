import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); // Role state to store the selected role
  const [error, setError] = useState(''); // Error message state
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!role) {
      setError("Please select a role!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
        role,  // Send the selected role to the backend
      });

      setSuccessMessage("User successfully registered!"); // Set success message
      setError(""); // Clear any previous error message

      console.log("User successfully registered!");

      // Reset form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("");  // Reset the role selection
    } catch (error) {
      setError("Error registering user: " + error.response?.data?.message || error.message); // Display error message
      setSuccessMessage(""); // Clear success message in case of error
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="main-wrapper log-wrap">
      <div className="row">
        <div className="col-md-6 login-bg flex flex-col">
          <div className="mt-5 login-banner">
            <img src="/img/icon/loginimg.png" className="img-fluid" alt="Logo" />
            {/* Ensure that the image path is correct */}
          </div>
          <div className="mentor-course text-center">
            <h2>Welcome to <br />CodeXpress Courses.</h2>
            <p>At CodeXpress, we provide high-quality online coding courses.<br />Start your coding journey with us today and take the next step in your career!</p>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="col-md-6 login-wrap-bg">
          <div className="login-wrapper">
            <div className="loginbox">
              <div className="img-logo">
              <h3 className=' text-2xl font-semibold'>&lt;CodeXpress/&gt;</h3>
              <div className="back-home">
                  <Link to="/">Back to Home</Link> {/* Replace href with Link component */}
                </div>
              </div>
              <h1>Sign up</h1>
              <form onSubmit={handleSubmit}>
                {/* Full Name Input */}
                <div className="input-block">
                  <label className="form-control-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Full Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                {/* Email Input */}
                <div className="input-block">
                  <label className="form-control-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Input */}
                <div className="input-block">
                  <label className="form-control-label">Password</label>
                  <div className="pass-group" id="passwordInput">
                    <input
                      type="password"
                      className="form-control pass-input"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="toggle-password feather-eye"></span>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="input-block">
                  <label className="form-control-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                {/* Role Selection */}
                <div className="input-block">
                  <label className="form-control-label">Select Your Role</label>
                  <div className="role-selection">
                    <div
                      className={`role-box ${role === 'Student' ? 'active' : ''}`}
                      onClick={() => setRole('Student')}
                    >
                      <p className="role-text">Student</p>
                    </div>
                    <div
                      className={`role-box ${role === 'Faculty' ? 'active' : ''}`}
                      onClick={() => setRole('Faculty')}
                    >
                      <p className="role-text">Faculty</p>
                    </div>
                  </div>
                </div>

                {/* Error and Success Messages */}
                {error && <div className="alert alert-danger">{error}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}

                {/* Terms and Conditions */}
                <div className="form-check remember-me">
                  <label className="form-check-label mb-0">
                    <input className="form-check-input" type="checkbox" name="remember" />
                    I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>. {/* Updated with Links */}
                  </label>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button className="btn btn-primary btn-start" type="submit">
                    Create Account
                  </button>
                </div>
              </form>
            </div>

            {/* Google and Facebook Sign-In */}
            <div className="google-bg text-center">
              <span><a href="#">Or sign in with</a></span>
              <div className="sign-google">
                <ul>
                  <li><a href="#"><img src="/img/net-icon-01.png" className="img-fluid" alt="Logo" /> Sign In using Google</a></li>
                  <li><a href="#"><img src="/img/net-icon-02.png" className="img-fluid" alt="Logo" /> Sign In using Facebook</a></li>
                </ul>
              </div>
              <p className="mb-0">Already have an account? <Link to="/login">Sign in</Link></p> {/* Updated with Link */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
