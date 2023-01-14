// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZnTTmAjmjW8TS06X2fSHYyrTtSzp2T7U",
  authDomain: "auth-development-1b5d3.firebaseapp.com",
  projectId: "auth-development-1b5d3",
  storageBucket: "auth-development-1b5d3.appspot.com",
  messagingSenderId: "569148097640",
  appId: "1:569148097640:web:30355c42a5c321ea21e7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth(app);