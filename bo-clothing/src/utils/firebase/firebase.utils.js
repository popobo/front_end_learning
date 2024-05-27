import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjpvhjgX5YqvehISdj1ZT559EcVgZ2H1s",
  authDomain: "bo-clothing-db.firebaseapp.com",
  projectId: "bo-clothing-db",
  storageBucket: "bo-clothing-db.appspot.com",
  messagingSenderId: "569758574383",
  appId: "1:569758574383:web:429d4f5060d0221d4a63da",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
