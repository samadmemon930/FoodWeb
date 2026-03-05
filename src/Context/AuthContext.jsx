// src/Context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../Services/FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Loader from "../Components/common/Loader";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = (userData) => setUser(userData);

  const logout = async () => {
    await signOut(auth);            // Firebase logout
    setUser(null);                  // React state reset
    localStorage.removeItem("uid"); // Remove UID from localStorage
    alert("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;