import { auth, db } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  signOut
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export const registerUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email,
      createdAt: serverTimestamp()
    });

    // Logout immediately
    await signOut(auth);

    // Clear storage
    localStorage.clear();
    sessionStorage.clear();

    return userCredential;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") throw new Error("Email already in use. Try logging in.");
    if (error.code === "auth/invalid-email") throw new Error("Invalid email address");
    if (error.code === "auth/weak-password") throw new Error("Weak password. Must be at least 6 characters");
    throw new Error(error.message);
  }
};

// Login with session-only persistence
export const loginUser = async (email, password) => {
  await setPersistence(auth, browserSessionPersistence);
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout function
export const logoutUser = async () => {
  await signOut(auth);
  localStorage.clear();
  sessionStorage.clear();
};