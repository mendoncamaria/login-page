// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5br1pP3v_KelFein5JgCJlmGOOdaYzck",
  authDomain: "register-app-b9d4d.firebaseapp.com",
  projectId: "register-app-b9d4d",
  storageBucket: "register-app-b9d4d.appspot.com",
  messagingSenderId: "1039721053503",
  appId: "1:1039721053503:web:6d1af507fe48ee07bde78a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)