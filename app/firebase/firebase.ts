import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔥 Firebase Config-ni shu yerga joylashtiring (Firebase Console-dan olingan kod)
const firebaseConfig = {
  apiKey: "AIzaSyCrezFOl0tKLFH1pClg1x_hhMkCp8kz_KI",
  authDomain: "iqtibos-57af8.firebaseapp.com",
  projectId: "iqtibos-57af8",
  storageBucket: "iqtibos-57af8.firebasestorage.app",
  messagingSenderId: "294069665101",
  appId: "1:294069665101:web:31fc1d5c7639487dd54b04",
};

// Firebase-ni ishga tushirish
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
