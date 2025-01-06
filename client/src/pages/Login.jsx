import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginimg from '/img/icon/loginimg.png';
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username, password);
    await axios.post('http://localhost:3000/login', {
        username: username,
        password: password
    });
    console.log("DATA SENT");

    setUsername("");
    setPassword("");
  }

  return (
    <div className="main-wrapper log-wrap">
      <div className="row">
        {/* Login Banner */}

        <div className="col-md-6 login-bg flex flex-col">
          <div className=" mt-5 login-banner">
            <img src="/img/icon/loginimg.png" className="img-fluid" alt="Logo" />
            {/* Ensure that the image path is correct */}
          </div>
          <div className="mentor-course text-center">
            <h2>Welcome to <br />CodeXpress Courses.</h2>
            <p>At CodeXpress, we provide high-quality online coding courses.<br/>Start your coding journey with us today and take the next step in your career!</p>
          </div>
        </div>

        {/* /Login Banner */}

        <div className="col-md-6 login-wrap-bg">
          {/* Login */}
          <div className="login-wrapper">
            <div className="loginbox">
              <div className="w-100">
                <div className="img-logo">
                  {/* Update logo path */}
                  <h3 className=' text-2xl font-semibold'>&lt;CodeXpress/&gt;</h3>

                  <div className="back-home">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign into Your Account</h1>
                <form onSubmit={submitHandler}>
                  <div className="input-block">
                    <label className="form-control-label">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control" 
                      placeholder="Enter your email address" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)} 
                    />
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group">
                      <input 
                        type="password" 
                        name="password" 
                        className="form-control pass-input" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                      />
                      <span className="feather-eye toggle-password"></span>
                    </div>
                  </div>
                  <div className="forgot">
                    <span><Link className="forgot-link" to="/forgot-password">Forgot Password ?</Link></span>
                  </div>
                  <div className="remember-me">
                    <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                      Remember me
                      <input type="checkbox" name="remember" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-start" type="submit">Sign In</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="google-bg text-center">
              <span><Link to="#">Or sign in with</Link></span>
              <div className="sign-google">
                <ul>
                  <li><Link to="#"><img src="/img/net-icon-01.png" className="img-fluid" alt="Logo" /> Sign In using Google</Link></li>
                  <li><Link to="#"><img src="/img/net-icon-02.png" className="img-fluid" alt="Logo" />Sign In using Facebook</Link></li>
                </ul>
              </div>
              <p className="mb-0">New User ? <Link to="/register">Create an Account</Link></p>
            </div>
          </div>
          {/* /Login */}
        </div>
      </div>
    </div>
  );
};

export default Login;
