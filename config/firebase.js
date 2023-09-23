// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider).then((data) => {
      const name = data.user.displayName;
      const email = data.user.email;
      const profilePic = data.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);

      window.location.href = "/screens/SignUpScreen.js";
    }).catch((error) => {
      console.log(error)
    })
 } catch (error) {
  console.log(error);
 }
}

const signInWithFacebook = async () => {
  try {
    await signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const user = result.user;
  
      const credential = FacebookAuthProvider.credentialFromResult(result);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
  
    });
 } catch (error) {
  console.log(error);
 }
}
export {auth, signInWithGoogle, signInWithFacebook};