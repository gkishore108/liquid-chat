import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHIP9wNciFPPLFe8UoxtgJgZh_ZkGSFCc",
  authDomain: "jukebox-a230b.firebaseapp.com",
  projectId: "jukebox-a230b",
  storageBucket: "jukebox-a230b.appspot.com",
  messagingSenderId: "83005538598",
  appId: "1:83005538598:web:da58122e1515133b7741e7",
};

// init firebase

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, projectAuth, timestamp };
