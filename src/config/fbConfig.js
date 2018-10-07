import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyB2DJEmwc3QhGn9-IeoObnG4SRp9ebjDlI",
    authDomain: "my-plan-5dcfb.firebaseapp.com",
    databaseURL: "https://my-plan-5dcfb.firebaseio.com",
    projectId: "my-plan-5dcfb",
    storageBucket: "my-plan-5dcfb.appspot.com",
    messagingSenderId: "801251565848"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;