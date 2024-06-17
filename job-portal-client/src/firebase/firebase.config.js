// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAegQCOZd6XJmdLj-H0T7bHgTOERPrzILs",
  authDomain: "job-portal-2de9b.firebaseapp.com",
  projectId: "job-portal-2de9b",
  storageBucket: "job-portal-2de9b.appspot.com",
  messagingSenderId: "370385557182",
  appId: "1:370385557182:web:9fd7b08a35f8f3bb24b0ef",
  measurementId: "G-DZ3GCF90EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;