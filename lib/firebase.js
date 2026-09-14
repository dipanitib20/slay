import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfMp77wiTNToHkP0li0eKd0vgrVRe2iCg",
  authDomain: "slay-e14eb.firebaseapp.com",
  projectId: "slay-e14eb",
  storageBucket: "slay-e14eb.firebasestorage.app",
  messagingSenderId: "104494252575",
  appId: "1:104494252575:web:6280b15a92b4c598ab0b2a",
  measurementId: "G-RH6WSHEG3C"
};

// Initialize Firebase app (prevent multiple instances during hot-reloads)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore & Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Analytics only in client-side environments where supported
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

export { app, db, auth, analytics };