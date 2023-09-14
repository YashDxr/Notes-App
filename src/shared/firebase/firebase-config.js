// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2ILTY3exRM0som1ODmKdALOalBJt_bGI",
  authDomain: "oauthapp-b80b9.firebaseapp.com",
  projectId: "oauthapp-b80b9",
  storageBucket: "oauthapp-b80b9.appspot.com",
  messagingSenderId: "1051066057248",
  appId: "1:1051066057248:web:c899cdf5639d1991963245",
  measurementId: "G-6GC829Z69X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);