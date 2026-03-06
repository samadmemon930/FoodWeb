import { initializeApp } from "firebase/app";
import { 
  getAuth,
  setPersistence,
  indexedDBLocalPersistence
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoziRJ-XtN1didHwSd98_6iSdO2zc3O2w",
  authDomain: "food-express-f1066.firebaseapp.com",
  projectId: "food-express-f1066",
  storageBucket: "food-express-f1066.firebasestorage.app",
  messagingSenderId: "297251107851",
  appId: "1:297251107851:web:5a0d3501b08775830d430e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// ⭐ Force IndexedDB persistence
setPersistence(auth, indexedDBLocalPersistence);

export default app;