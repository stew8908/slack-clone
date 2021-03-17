import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOXXrEvYuqjO0U61__SHnSEoySp3MdhtE",
    authDomain: "slack-clone-facc2.firebaseapp.com",
    projectId: "slack-clone-facc2",
    storageBucket: "slack-clone-facc2.appspot.com",
    messagingSenderId: "561625856954",
    appId: "1:561625856954:web:dbbfd5224e1b121274bb83",
    measurementId: "G-RVBPBTSY84"
  };

  const firbaseApp = firebase.initializeApp(firebaseConfig);
  const db = firbaseApp.firestore();

  export default db;