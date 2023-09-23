// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfvDZhNA4QYX19O63sxreQx5h5E5PrawY",
  authDomain: "maclab-auth-399711.firebaseapp.com",
  projectId: "maclab-auth-399711",
  storageBucket: "maclab-auth-399711.appspot.com",
  messagingSenderId: "1466418591",
  appId: "1:1466418591:web:d5e89df076c9850fa3e9aa"
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