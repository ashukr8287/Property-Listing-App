import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Signup
export const signup = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logout = async () => {
  return await signOut(auth);
};
