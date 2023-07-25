// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEsfeSSZRIxnJDthkIGxvrxvBvAEzEv5Y",
  authDomain: "book-catalog-2848f.firebaseapp.com",
  projectId: "book-catalog-2848f",
  storageBucket: "book-catalog-2848f.appspot.com",
  messagingSenderId: "333119360194",
  appId: "1:333119360194:web:cb670f1ff218b35a213f5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
