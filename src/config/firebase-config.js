import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcTpZf6qPPIXv1d72UuSO6UJZXOtwukiA",
    authDomain: "booksapp-94865.firebaseapp.com",
    projectId: "booksapp-94865",
    storageBucket: "booksapp-94865.appspot.com",
    messagingSenderId: "885943411339",
    appId: "1:885943411339:web:c61005a9306d4ea8de2a8e",
    measurementId: "G-V9C55L58VP"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;