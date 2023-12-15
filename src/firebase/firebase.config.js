// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_apiKey,
  authDomain:process.env.REACT_authDomain,
  projectId:process.env.REACT_projectId,
  storageBucket:process.env.REACT_storageBucket,
  messagingSenderId:process.env.REACT_messagingSenderId,
  appId:process.env.REACT_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);