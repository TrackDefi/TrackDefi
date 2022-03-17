// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaHh1MG29FIP50UxSur0ymkZ9BC5IBAmE",
  authDomain: "trackdefi-9c576.firebaseapp.com",
  projectId: "trackdefi-9c576",
  storageBucket: "trackdefi-9c576.appspot.com",
  messagingSenderId: "744644445193",
  appId: "1:744644445193:web:afe76d2f18f921023b24d8",
  measurementId: "G-4K3K62XEVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);