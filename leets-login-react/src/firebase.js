// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ2NXwf8C7Q_L0hBpMznIETnxM8___MMg",
    authDomain: "leets-login-react-793c1.firebaseapp.com",
    projectId: "leets-login-react-793c1",
    storageBucket: "leets-login-react-793c1.appspot.com",
    messagingSenderId: "86055632259",
    appId: "1:86055632259:web:5d7f9045b0d665badbcab6",
    measurementId: "G-19M7MVM2K6"
  };
//
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
//
// 꼭 이렇게 해야하는 건 아니니까 편한대로 해당 스크립트에서 import해서 사용해도 된다
export { firebaseAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword };