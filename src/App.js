import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBofXkWr44yMNlvLqn2c4PKOGHi76oy0d8",
  authDomain: "ivoireshop-42a5e.firebaseapp.com",
  projectId: "ivoireshop-42a5e",
  storageBucket: "ivoireshop-42a5e.firebasestorage.app",
  messagingSenderId: "400331225646",
  appId: "1:400331225646:web:260e30034b325da455fdbf",
  measurementId: "G-LLHR3NDSKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
