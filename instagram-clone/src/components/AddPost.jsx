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
        loveCounts: 0,
        pictureDownloadUrl: '',
        success: '',
        aboutPhotoCharacters: '',
        error: '',
        tag: '#funny'
      };
    }

    handleFileChange(event){

      const pictureToAdd = event.target.files[0];
      console.log('pictureToAdd', pictureToAdd);

      let random = Math.floor(Math.random(10-1) +1);

      const pictureName = random.toString() + pictureToAdd.name;


      const metadata = {
        caption: this.state.caption
      }

      const storageRef = firebaseApp.storage().ref('images/' + pictureName);
      let uploadTask = storageRef.put(pictureToAdd, metadata);

      uploadTask.on('state_changed', snapshot => {
        console.log('uploading image');
        let uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('upload is ' + uploadProgress + '% done');
      }, error => {
        console.log('error while uploading', error);
      }, function(){
        //upload is completed
        this.setState({
          success: <div style= {{color: 'green'}} >
                  Your upload is complete</div>,
          pictureUrl: 'images/' + pictureName
          });
      }.bind(this));
    } //end of handleFileChange


    handleSubmit(){

      let pc = this.state.pictureUrl;
      let displayRef = firebaseApp.storage().ref(pc);
      displayRef.getDownloadURL().then(url => {
        this.setState({
          pictureDownloadUrl: url
        });

        posts.push({
          caption: this.state.caption,
          pictureDownloadUrl: this.state.pictureDownloadUrl,
          totalLoves: this.state.loveCounts,
          tag: this.state.tag
        })

        browserHistory.push('/app');
      }).catch(error => {
        console.log('error', error);
      });

    } //end of handleSubmit

    //count characters in textarea

    wordCount(e){
      let currentText = e.target.value;
      let characterCount = currentText.length;

      let captionCharacters = characterCount + '/60';
      let error = '';

      if(characterCount > 50){
          error = 'Caption should be less than 60 characters'
      }
      else{
        error = ''
      }

      this.setState({
        aboutPhotoCharacters: captionCharacters,
        caption: currentText,
        error: error
      })

    }//end of wordCount


    render() {
      let disableSubmit = true;
      if((this.state.success !== '') && (this.state.error === '')){
        disableSubmit = false;
      }
        return (
          <div className="form-inline post-body">

            <FormGroup>
              <FormControl type="file"
                // onChange={event => this.setState({pictureToAdd: event.target.files[0]})}
                onChange= {event => this.handleFileChange(event)}

              />
                {/* Status of upload */}
                {this.state.success}
                <div>
                  <select
                    onChange= {e => this.setState({tag: e.target.value})}
                    >
                    <option>#funny</option>
                    <option>#college</option>
                    <option>#nature</option>
                    <option>#technology</option>
                    <option>#news</option>
                    <option>#science</option>
                    <option>#awkward moment</option>
                    <option>#savage</option>
                    <option>#wtf</option>
                  </select>
                </div>

              <textarea
                type = 'text'
                className='about-photo-textarea'
                placeholder= 'Enter a caption in less than 60 characters'
                // onChange = {event => this.setState({caption: event.target.value})}
                onChange={e => this.wordCount(e)}

              />
              <br />
              <p>{this.state.aboutPhotoCharacters} </p>
              <div style={{color: 'red'}}>{this.state.error}</div>
            </FormGroup>
            <br />  <br />
            <button
              className='btn btn-success'
              onClick= {() => this.handleSubmit()}
              type = 'button'
              disabled = {disableSubmit}
              >
              Submit
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
