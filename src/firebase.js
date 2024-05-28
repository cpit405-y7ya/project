// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "soldtickets-a092c.firebaseapp.com",
  projectId: "soldtickets-a092c",
  storageBucket: "soldtickets-a092c.appspot.com",
  messagingSenderId: "323071407074",
  appId: "1:323071407074:web:0afe686e235c1c9bf9ffbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};