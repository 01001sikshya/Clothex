// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyDLJQdjhrbH-hJWz7QmHQ7TwT01_p8Hv-Y",
  authDomain: "ecommerce-authentication-932f6.firebaseapp.com",
  projectId: "ecommerce-authentication-932f6",
  storageBucket: "ecommerce-authentication-932f6.appspot.com",
  messagingSenderId: "193685067115",
  appId: "1:193685067115:web:3441071c65e461635ce82e",
  measurementId: "G-MBDQ6WC1SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}; 