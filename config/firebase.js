// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe3bxw8xL3dPmtFzHrebFUO-boB27VqnE",
  authDomain: "maclab-auth.firebaseapp.com",
  projectId: "maclab-auth",
  storageBucket: "maclab-auth.appspot.com",
  messagingSenderId: "821612567140",
  appId: "1:821612567140:web:fcf6f3ae187324a0859d71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);