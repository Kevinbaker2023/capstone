// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIs2wayeXzPqDy5E8q1cwcPVA0oV8Es5c",
  authDomain: "capstone-coding-temple.firebaseapp.com",
  projectId: "capstone-coding-temple",
  storageBucket: "capstone-coding-temple.appspot.com",
  messagingSenderId: "196143527183",
  appId: "1:196143527183:web:55cbd935fef0d0cce73a7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);