import React, { Component } from 'react';

class SignUp extends Component{
  render(){
    return(
      <div class="container">

         <div class="main">

             <div id="first">
                 <h1 id="siteTitle">Meetgram</h1>
                 <span id="tagline">Start Your Journey With Us.</span>
             </div>
             <br />

             <div class="second">
                 <a href="#" class="loginFacebook">
                     <span class="fa fa-facebook"></span><span id="loginwithFacebook">Login With Facebook</span>
                 </a>
             </div>

             <br />
             <p class="signinInitialStep__divider">
                or
             </p>

             <div class="third">
               <input type="text" placeholder="Username" name="userName" required /> <br />
               <input type="text" placeholder="Full Name" name="fullName" required /> <br/>
               <input type="email" placeholder="Email" name="emailAddress" required /> <br />
               <input type="password" placeholder="Password" name="password" required pattern=".{8,}" title="Eight or more characters."/> <br />
               <button type="submit" class="btn btn-primary signup">Sign Up</button>

              <div id="signUpterms">By signing up you agree to our terms and privacy policy.</div>
            </div>

          </div>

         <div id="alreadyAccount">Have an account? <a href="login.html" id="login">Login</a></div>
     </div>

    )
  }
}

export default SignUp;
