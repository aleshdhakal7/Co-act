// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//import "firebase/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAZxFTUQ1BNiKLkjUn6T9inCL_n7ZChOw0",
  authDomain: "myapp-20fe6.firebaseapp.com",
  projectId: "myapp-20fe6",
  storageBucket: "myapp-20fe6.appspot.com",
  messagingSenderId: "356743280313",
  appId: "1:356743280313:web:92b37f6dc3c528b7188d68",
  measurementId: "G-CZ10DDT38F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
