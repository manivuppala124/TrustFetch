// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT3Uy6MEjXac6newmju-BAX6wWimXzDGE",
  authDomain: "trustfetch.firebaseapp.com",
  projectId: "trustfetch",
  storageBucket: "trustfetch.firebasestorage.app",
  messagingSenderId: "130410407930",
  appId: "1:130410407930:web:9a4f83fb9780913a97e643",
  measurementId: "G-ZT8S`7VLJVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;