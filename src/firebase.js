// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDndiMCqN8_dBpgM4KsnLiHGBaoik6KMz8",
  authDomain: "netflix-e5fb8.firebaseapp.com",
  projectId: "netflix-e5fb8",
  storageBucket: "netflix-e5fb8.appspot.com",
  messagingSenderId: "704170378553",
  appId: "1:704170378553:web:7f3a48bedfd2b5df0fd4e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)