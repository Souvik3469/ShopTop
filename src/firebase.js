import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL5v0YUFgcqz-adxYesbXnxJsFrzIuKmw",
  authDomain: "shoptop-c2ba7.firebaseapp.com",
  projectId: "shoptop-c2ba7",
  storageBucket: "shoptop-c2ba7.appspot.com",
  messagingSenderId: "734971948344",
  appId: "1:734971948344:web:5b849d04355e77180ae5cd",
  measurementId: "G-7SXENG51RF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };