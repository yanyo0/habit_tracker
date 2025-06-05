import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANO24t1YtTUbbcglUd09w8rVotFSCHqQo",
    authDomain: "habit-tracker-18e3e.firebaseapp.com",
    projectId: "habit-tracker-18e3e",
    storageBucket: "habit-tracker-18e3e.firebasestorage.app",
    messagingSenderId: "537242181619",
    appId: "1:537242181619:web:cf8f3a6dc7182c684d3c86"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

