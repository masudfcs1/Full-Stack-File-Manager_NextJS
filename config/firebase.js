// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FiREBASE_API_KEY,
  authDomain: "file-manger-f33a9.firebaseapp.com",
  projectId: "file-manger-f33a9",
  storageBucket: "file-manger-f33a9.appspot.com",
  messagingSenderId: "538625327356",
  appId: "1:538625327356:web:0de0a1636ac8aefc849779",
  measurementId: "G-1BJ672W3YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
    app
}