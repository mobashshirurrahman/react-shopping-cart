import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase  from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHwp15cnCnFZZKZfRoDaJZfJPykAXChrs",
  authDomain: "cart-react-7201a.firebaseapp.com",
  projectId: "cart-react-7201a",
  storageBucket: "cart-react-7201a.appspot.com",
  messagingSenderId: "707830857506",
  appId: "1:707830857506:web:f6666a4cc5d09eb6b9af7b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
