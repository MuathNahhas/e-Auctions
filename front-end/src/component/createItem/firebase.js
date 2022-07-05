import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCzyd5xVDYVAZFms-RwFSIhNu8DaSCrM3k",
    authDomain: "bermuda-e0248.firebaseapp.com",
    projectId: "bermuda-e0248",
    storageBucket: "bermuda-e0248.appspot.com",
    messagingSenderId: "223603697492",
    appId: "1:223603697492:web:b456b581f68f145097cac1",
    measurementId: "G-PFY03Z8MR5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export  {
    storage, firebase as default
  }