// src/App.jsx
import React from "react";
import AppRoutes from "./Routes/AppRoute";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Pages jahan Navbar/Footer hide karna hai
  const noHeaderFooter = ["/login", "/register"];

  const hideHeaderFooter = noHeaderFooter.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-1">
        <AppRoutes />
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;