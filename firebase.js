import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUESs0pO0ZraLbxKcACga1oQ86kPWhzCI",
  authDomain: "whatsapp-clone-7027e.firebaseapp.com",
  projectId: "whatsapp-clone-7027e",
  storageBucket: "whatsapp-clone-7027e.appspot.com",
  messagingSenderId: "35728934345",
  appId: "1:35728934345:web:07c6e972479070a760d418",
  measurementId: "G-0SG8F0S8HX",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
