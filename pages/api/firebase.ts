// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmTG3kKdlmAUmqt8PfrQcqFGNkqKNcfS8",
  authDomain: "apro-10c17.firebaseapp.com",
  projectId: "apro-10c17",
  storageBucket: "apro-10c17.appspot.com",
  messagingSenderId: "827349806186",
  appId: "1:827349806186:web:48c0ccb45059afad452e13",
  measurementId: "G-LJ362MVKQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
