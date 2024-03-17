// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "clone-3847b.firebaseapp.com",
  projectId: "clone-3847b",
  storageBucket: "clone-3847b.appspot.com",
  messagingSenderId: "243761469517",
  appId: "1:243761469517:web:792987a912ce9a05f06404",
  measurementId: "G-ELC8TNCP1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
