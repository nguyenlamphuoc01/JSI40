import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBXfOst8depu_-bERaVQ4ug67ZDqTcL6T4",
    authDomain: "jsi40-80580.firebaseapp.com",
    projectId: "jsi40-80580",
    storageBucket: "jsi40-80580.firebasestorage.app",
    messagingSenderId: "1087123381667",
    appId: "1:1087123381667:web:8207d0ddc74f4877148e16",
    measurementId: "G-G1KLWCQ0BX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("btnRegister").addEventListener("click", () => {
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;

    createUserWithEmailAndPassword(auth, email, pass)
        .then(() => alert("Đăng ký thành công!"))
        .catch(err => alert("Lỗi: " + err.message));
});

document.getElementById("btnLogin").addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;

    signInWithEmailAndPassword(auth, email, pass)
        .then(() => alert("Đăng nhập thành công!"))
        .catch(err => alert("Lỗi: " + err.message));
});
