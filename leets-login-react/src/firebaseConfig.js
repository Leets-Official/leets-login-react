// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyCOMCSvLvzfYv3jjR9MJoQEtnBEmV9Sx4w",
  authDomain: "login-2893f.firebaseapp.com",
  projectId: "login-2893f",
  storageBucket: "login-2893f.appspot.com",
  messagingSenderId: "817595355209",
  appId: "1:817595355209:web:ba168f31c8517d7d79af98",
  measurementId: "G-G88JX6TC7L"
};

const app = initializeApp(firebaseConfig);

export default app