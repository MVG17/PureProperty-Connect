// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "pureproperty-79dfe.firebaseapp.com",
    projectId: "pureproperty-79dfe",
    storageBucket: "pureproperty-79dfe.appspot.com",
    messagingSenderId: "1047063229475",
    appId: "1:1047063229475:web:fa339f4103c65a426fed96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);