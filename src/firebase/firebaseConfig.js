import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDii4Q49wLcsjDBv3-1ydzY3A3BIAU-_6s",
  authDomain: "fb-reactjs-e3b63.firebaseapp.com",
  projectId: "fb-reactjs-e3b63",
  storageBucket: "fb-reactjs-e3b63.appspot.com",
  messagingSenderId: "888096728591",
  appId: "1:888096728591:web:5ebe752ca73d27cf7ca57a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
