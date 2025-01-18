// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAw9QXBDkx4tRju7VJUt1uEeNsFhn6bEb0",
  authDomain: "convohub-git.firebaseapp.com",
  projectId: "convohub-git",
  storageBucket: "convohub-git.firebasestorage.app",
  messagingSenderId: "948391343278",
  appId: "1:948391343278:web:e27138ad3bf3b36412293f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app);

export const userRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');