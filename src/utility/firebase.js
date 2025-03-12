
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLMs3isUzEdV9EDONao3y9u0ZZWeozFQI",
  authDomain: "clone-c612c.firebaseapp.com",
  projectId: "clone-c612c",
  storageBucket: "clone-c612c.firebasestorage.app",
  messagingSenderId: "429256989601",
  appId: "1:429256989601:web:a31f6d3a1f6e2bac7389e0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore;