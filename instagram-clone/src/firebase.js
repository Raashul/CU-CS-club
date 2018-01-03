import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBsoLwsrPUY3rjfU5IiIKMsnTm6QV23V-U",
    authDomain: "cuproject-4907b.firebaseapp.com",
    databaseURL: "https://cuproject-4907b.firebaseio.com",
    projectId: "cuproject-4907b",
    storageBucket: "cuproject-4907b.appspot.com",
    messagingSenderId: "446191614597"
  };

export const firebaseApp = firebase.initializeApp(config);
export const posts = firebase.database().ref('posts');
