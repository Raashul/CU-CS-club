import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp, users, provider } from '../firebase';


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

      firebaseApp.auth().onAuthStateChanged(user => {
        if(user){
          const currentUid = user.uid

          users.once('value', snap =>{
            snap.forEach(eachUser => {
              const {uid} = eachUser.val();
              if(currentUid === uid){
                localStorage.setItem('username', eachUser.val().username);
              }
            })
          })
        }
      });
  }

  googleSignIn(){
    firebaseApp.auth().signInWithPopup(provider).then(result => {
      //const token = result.credential.accessToken;
      const user = result.user;
      const displayPicture = user.photoURL;
      const email = user.email;
      const uid = user.uid;
      const username = user.displayName
      localStorage.setItem('username', username);
      localStorage.setItem('displayPicture', displayPicture);

      users.push({
        email: email,
        uid: uid,
        username: username,
        displayPicture: displayPicture
      })
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
               placeholder="test@gmail.com"
               name="email"
               onChange={event => this.setState({email: event.target.value})}
             />
           </div>

           <div className="form-group">
             <input
               type="password"
               className="form-control"
               placeholder="testing"
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
            <button className='btn btn-success' onClick={() => this.googleSignIn()}>
              <i className="fa fa-google"></i> Log in/Sign In with Google</button>
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
