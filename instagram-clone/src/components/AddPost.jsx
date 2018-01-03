import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp, posts } from '../firebase';
import { FormGroup, FormControl } from 'react-bootstrap';
import { browserHistory } from 'react-router';

class AddPost extends Component{

  constructor(props) {
    super(props);

     this.state = {
        pictureToAdd: {},
        caption: '',
        pictureUrl: '',
        upvote: 0,
        pictureDownloadUrl: '',
        success: ''
      };


    }

    submitPhoto(){
      const {pictureToAdd} = this.state ;
      console.log('pictureToAdd', pictureToAdd);
      let random = Math.floor(Math.random(10-1) +1);
      console.log('random', random);
      const pictureName = random.toString() + pictureToAdd.name;
      console.log('pictureName', pictureName);

      this.setState({pictureUrl: 'images/' + pictureName});

      const metadata = {
        caption: this.state.caption
      }

      const storageRef = firebaseApp.storage().ref('images/' + pictureName);
      storageRef.put(pictureToAdd, metadata);
      this.setState({
        success: <div style= {{color: 'green'}} >
          Your post has been added</div>
        });

    } //end of submitPhoto()

    displayPhoto(){

      let pc = this.state.pictureUrl;
      let displayRef = firebaseApp.storage().ref(pc);
      displayRef.getDownloadURL().then(url => {
        this.setState({
          pictureDownloadUrl: url
        });
        console.log('this.state', this.state);

        const postData = {
          caption: this.state.caption,
          pictureDownloadUrl: this.state.pictureDownloadUrl
        }

        posts.push({
          caption: this.state.caption,
          pictureDownloadUrl: this.state.pictureDownloadUrl
        })

        browserHistory.push('/app');
      });

    }




    render() {
        return (
          <div className="form-inline post-body">

            <FormGroup>
              <FormControl type="file"
                onChange={event => this.setState({pictureToAdd: event.target.files[0]})}/>
              <input
                type = 'text'
                placeholder= 'Enter a caption'
                onChange = {event => this.setState({caption: event.target.value})}
              />
              <button
                className='btn btn-success'
                onClick= {() => this.submitPhoto()}
                type = 'button'
                >
                Post Photo
              </button>

            </FormGroup>

            {this.state.success}
            <br />  <br />
            <button
              className='btn btn-success'
              onClick= {() => this.displayPhoto()}
              type = 'button'
              >
              Go back home
            </button>

          </div>

        );
    }
}

  function mapStateToProps(state){

    const {uid} = state;
    return {
      uid
    };

  }

export default connect(mapStateToProps, null) (AddPost);
