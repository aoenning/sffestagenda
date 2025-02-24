// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: "1:862796151594:web:83258be59660fba858bc53",
  measurementId: "G-63CZ0610C6",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Inicializar Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Inicializar Firestore
// const db = firebaseApp.firestore();

// Inicializar Realtime Database
const db = firebaseApp.database();

export { db };
