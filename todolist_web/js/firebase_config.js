// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXfOst8depu_-bERaVQ4ug67ZDqTcL6T4",
  authDomain: "jsi40-80580.firebaseapp.com",
  projectId: "jsi40-80580",
  storageBucket: "jsi40-80580.firebasestorage.app",
  messagingSenderId: "1087123381667",
  appId: "1:1087123381667:web:8207d0ddc74f4877148e16",
  measurementId: "G-G1KLWCQ0BX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);