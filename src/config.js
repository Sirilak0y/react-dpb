import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXEhZRF3pL6yLBimgeGhlQdj5UnDv1H1M",
    authDomain: "test-acaa7.firebaseapp.com",
    databaseURL: "https://test-acaa7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-acaa7",
    storageBucket: "test-acaa7.appspot.com",
    messagingSenderId: "1011286892343",
    appId: "1:1011286892343:web:ca77f6d2018277023544b2"
  };
// Initialize Firebase
const fireConfig = firebase.initializeApp(firebaseConfig)
//const db =  firebase.firestore(firebaseConfig)


export default fireConfig ;

