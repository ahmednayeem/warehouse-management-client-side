// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg5KlKuW6vfJ7a-9j7BYSwoe1F2mPLXOE",
  authDomain: "project-11-48db5.firebaseapp.com",
  projectId: "project-11-48db5",
  storageBucket: "project-11-48db5.appspot.com",
  messagingSenderId: "943223790177",
  appId: "1:943223790177:web:259644a6445518d077a820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth