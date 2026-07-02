import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc4zaZ0CInBYtnmo2rvul6QfzPFcM1LsQ",
  authDomain: "ccb-inventario.firebaseapp.com",
  projectId: "ccb-inventario",
  storageBucket: "ccb-inventario.firebasestorage.app",
  messagingSenderId: "210388191340",
  appId: "1:210388191340:web:332838a646192b5d01b049"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
