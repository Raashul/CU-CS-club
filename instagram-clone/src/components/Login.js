import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';


class SignIn extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:'',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn(){
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error =>{
        this.setState({error});
      })
  }


  render(){


    return(
      <div className="container box text-center">

         <h1>Meetgram</h1>
         <h6>Start your journey with us.</h6>

         <div className="login-details">
           <div className="form-group">
             <input
               type="email"
               className="form-control"
               placeholder="Username or email"
               name="email"
               onChange={event => this.setState({email: event.target.value})}
             />
           </div>

           <div className="form-group">
             <input
               type="password"
               className="form-control"
               placeholder="Password"
               name="password"
               onChange={event => this.setState({password: event.target.value})}
            />
           </div>
           <button
             type="submit"
             className='btn btn-success'
             onClick={() => this.signIn()}
              >
              Log in
            </button>

            <br />
            <br />

            <div style={{color: 'red'}}>
              {this.state.error.message}
            </div>


          <h6 className="or">or</h6>
          <div className="line"></div>

          <div className="other-options">
            <a href=""><button className='btn btn-success'><i className="fa fa-google"></i> Log in with Google</button></a>
            <p className="forgot">
              <a href="forgot.html">Forgot password?
              </a></p>

          </div>
         </div>
          <br/>
          <p className="sign-up">
            Don't have an account?
            <Link to = {'/signup'} id="login">Sign Up</Link>
          </p>
        </div>


    )
  }
}

export default SignIn;
