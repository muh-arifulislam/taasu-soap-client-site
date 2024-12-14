// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBooNQdKXa3j-YAbOWFOFO7AlLPBmy--Ss",
  authDomain: "taasu-soap.firebaseapp.com",
  projectId: "taasu-soap",
  storageBucket: "taasu-soap.firebasestorage.app",
  messagingSenderId: "762768368375",
  appId: "1:762768368375:web:b040646680266cebbaa9f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
