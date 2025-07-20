// src/firebase.js - Updated Firebase Configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT3Uy6MEjXac6newmju-BAX6wWimXzDGE",
  authDomain: "trustfetch.firebaseapp.com",
  projectId: "trustfetch",
  storageBucket: "trustfetch.firebasestorage.app",
  messagingSenderId: "130410407930",
  appId: "1:130410407930:web:9a4f83fb9780913a97e643",
  measurementId: "G-ZT8S7VLJVM" // Fixed the typo in measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;