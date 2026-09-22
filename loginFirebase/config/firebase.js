// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOJ6hG0TDmI7-ic9HAKVZTV7YvBVF9dZI",
  authDomain: "fir-attpam.firebaseapp.com",
  projectId: "fir-attpam",
  storageBucket: "fir-attpam.firebasestorage.app",
  messagingSenderId: "60272664242",
  appId: "1:60272664242:web:51459ad738d6888eb5f3ab",
  measurementId: "G-Q75XSXX9SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
