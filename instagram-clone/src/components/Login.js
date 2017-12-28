import React, { Component } from 'react';

class SignIn extends Component{
  render(){
    return(
      <div className="container box text-center">
         <h1>Meetgram</h1>
         <h6>Start your journey with us.</h6>
         <div className="login-details">
           <div className="form-group">
             <input type="email" className="form-control" placeholder="Username or email" name="email" />
           </div>
           <div className="form-group">
             <input type="password" className="form-control" placeholder="Password" name="password" />
           </div>
           <button type="submit"   className='btn btn-primary'>Log in</button>
           <br />
          <h6 className="or">or</h6>
          <div className="line"></div>
          <div className="other-options">
            <a href=""><button className='btn btn-primary'><i className="fa fa-facebook"></i> Log in with Facebook</button></a>
            <p className="forgot"><a href="forgot.html">Forgot password?</a></p>
          </div>
         </div>
          <br/>
          <p className="sign-up">Don't have an account? <a href="signup.html"> Sign up</a></p>
        </div>


    )
  }
}

export default SignIn;
