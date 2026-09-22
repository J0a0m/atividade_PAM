// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgySc6-usjxj1kpxAzz-SFC33uFecXD-Q",
  authDomain: "login-firebase-23455.firebaseapp.com",
  projectId: "login-firebase-23455",
  storageBucket: "login-firebase-23455.firebasestorage.app",
  messagingSenderId: "654632770360",
  appId: "1:654632770360:web:0743cc675b0f7ea36b7fcd",
  measurementId: "G-6KBCTBZ24W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);