// Import the functions you need from the SDKs you need

// Initialize Firebase and configure the firebase.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2bqNjnhzmW3wSIpH1HIfPiX6aKmTYHnA",
  authDomain: "busybuy-1-3c079.firebaseapp.com",
  projectId: "busybuy-1-3c079",
  storageBucket: "busybuy-1-3c079.firebasestorage.app",
  messagingSenderId: "45839814420",
  appId: "1:45839814420:web:137d60598c789debd6fc01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export {db};
