import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2Shm4H6iCWeS8RotOz1doYNXyLKB3Zzc",
  authDomain: "instagram-clone-react-d14b7.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-d14b7.firebaseio.com",
  projectId: "instagram-clone-react-d14b7",
  storageBucket: "instagram-clone-react-d14b7.appspot.com",
  messagingSenderId: "761651692797",
  appId: "1:761651692797:web:7b816f84b411d3bc3c6a94",
  measurementId: "G-5JH4LEB2DR",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
