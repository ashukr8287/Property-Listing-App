import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDz_mnQmkb3m5aCERLNiEBmcPeL8xbvmJQ",
  authDomain: "auth-6e9bd.firebaseapp.com",
  projectId: "auth-6e9bd",
  storageBucket: "auth-6e9bd.firebasestorage.app",
  messagingSenderId: "226536607126",
  appId: "1:226536607126:web:3062e6ee218ff3a2c661b7",
  measurementId: "G-LBDSG0LRHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);
