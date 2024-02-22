import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_pYnhCELm8l2Uh_BayYDZw2pRL_s7Tpw",
  authDomain: "twitter-clone-f34dd.firebaseapp.com",
  projectId: "twitter-clone-f34dd",
  storageBucket: "twitter-clone-f34dd.appspot.com",
  messagingSenderId: "19094407474",
  appId: "1:19094407474:web:b0ce19a5451da51e386f2b",
  measurementId: "G-MNMMLZ53R2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
