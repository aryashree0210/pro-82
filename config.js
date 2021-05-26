import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBHa20ch5NBN8MfNQ6S3kvC8y8ijGQ3o8U",
    authDomain: "fruit-cd86f.firebaseapp.com",
    databaseURL: "https://fruit-cd86f-default-rtdb.firebaseio.com",
    projectId: "fruit-cd86f",
    storageBucket: "fruit-cd86f.appspot.com",
    messagingSenderId: "715178812937",
    appId: "1:715178812937:web:fd70f4ddaab96c411ebad8"
  };






  if(!firebase.apps.length)
  {
    firebase.initializeApp(firebaseConfig);
  }


export default firebase.firestore();
