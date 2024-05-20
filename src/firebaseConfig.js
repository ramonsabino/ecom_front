import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Sua configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYPxEzO9-uxZ7GPr2wjpjh_MgjWtqOjoo",
  authDomain: "lr-project-cd862.firebaseapp.com",
  projectId: "lr-project-cd862",
  storageBucket: "lr-project-cd862.appspot.com",
  messagingSenderId: "466498883870",
  appId: "1:466498883870:web:2a458b003feb7df397b90f"
};

// Inicialize o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Auth e os provedores
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
