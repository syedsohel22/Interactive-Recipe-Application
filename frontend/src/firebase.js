// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yummy-recipes-3f6d8.firebaseapp.com",
  projectId: "yummy-recipes-3f6d8",
  storageBucket: "yummy-recipes-3f6d8.appspot.com",
  messagingSenderId: "1061378045747",
  appId: "1:1061378045747:web:28662b57c8fe0a3c21f046",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
