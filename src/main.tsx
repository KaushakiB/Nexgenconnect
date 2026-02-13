import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "nexgen-connect-9df40.firebaseapp.com",
  projectId: "nexgen-connect-9df40",
  storageBucket: "nexgen-connect-9df40.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

import { db } from "./firebase";

console.log("Firebase connected:", db);

export const auth = getAuth(app);
export const db = getFirestore(app);
