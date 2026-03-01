// src/hooks/UseAuth.jsx
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

// Named export hook
export const useAuth = () => {
  return useContext(AuthContext);
};