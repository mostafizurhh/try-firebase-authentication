// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmTGHiuE1yHEh9e72pXbUgJfWbiFX0uQU",
    authDomain: "try-firebase-authintication.firebaseapp.com",
    projectId: "try-firebase-authintication",
    storageBucket: "try-firebase-authintication.appspot.com",
    messagingSenderId: "629139927459",
    appId: "1:629139927459:web:b84772bdd6618749b7aa16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;