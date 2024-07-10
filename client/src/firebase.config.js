// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5TdKd1aI649upZJYCewBLE1PLUhEMSMQ",
  authDomain: "social-hub-45200.firebaseapp.com",
  projectId: "social-hub-45200",
  storageBucket: "social-hub-45200.appspot.com",
  messagingSenderId: "264229075520",
  appId: "1:264229075520:web:f065dcad30bf4a1fb3bda5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
