// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIK4fBZ8h8RdHI5YnVjz_TSsG24RlYCj8",
  authDomain: "vocabulary-learning-a5e09.firebaseapp.com",
  projectId: "vocabulary-learning-a5e09",
  storageBucket: "vocabulary-learning-a5e09.firebasestorage.app",
  messagingSenderId: "773150924540",
  appId: "1:773150924540:web:17cfc79fcedb5ade174179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);