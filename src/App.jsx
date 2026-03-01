// src/App.jsx
import React from "react";
import AppRoutes from "./Routes/AppRoute";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;