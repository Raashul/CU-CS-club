import * as firebase from 'firebase';

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

export const firebaseApp = firebase.initializeApp(config);
export const posts = firebase.database().ref('posts');
export const users = firebase.database().ref('users/');

export const provider = new firebase.auth.GoogleAuthProvider();
