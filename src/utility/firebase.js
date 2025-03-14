
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const API_KEY = import.meta.env.VITE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "clone-c612c.firebaseapp.com",
  projectId: "clone-c612c",
  storageBucket: "clone-c612c.firebasestorage.app",
  messagingSenderId: "429256989601",
  appId: "1:429256989601:web:a31f6d3a1f6e2bac7389e0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = firebase.firestore(app);