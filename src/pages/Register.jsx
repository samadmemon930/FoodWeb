import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../Services/AuthService";
import Swal from "sweetalert2";
import { User, Mail, Lock } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!name.trim() || !email.trim() || !password.trim()) {
      Swal.fire({
        icon: "error",
        title: "All fields are required",
        text: "Please fill in all fields before continuing.",
        confirmButtonColor: "#e74c3c",
        customClass: {
    title: "swal-title-small",
    htmlContainer: "swal-text-small"
  }
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#e74c3c",
        customClass: {
    title: "swal-title-small",
    htmlContainer: "swal-text-small"
  }
      });
      return;
    }

    // Validate password length
    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 8 characters long.",
        confirmButtonColor: "#e74c3c",
        customClass: {
    title: "swal-title-small",
    htmlContainer: "swal-text-small"
  }
      });
      return;
    }

    try {
      // Call AuthService to register
      await registerUser(name, email, password);

      Swal.fire({
        icon: "success",
        title: "Account Created Successfully!",
        text: "Please login to continue.",
        confirmButtonColor: "#f97316",
        customClass: {
    title: "swal-title-small",
    htmlContainer: "swal-text-small"
  }
      }).then(() => {
        navigate("/login");
      });

    } catch (err) {
      // Show the exact error from Firebase
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.message,
        confirmButtonColor: "#e74c3c",
        customClass: {
    title: "swal-title-small",
    htmlContainer: "swal-text-small"
  }
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 px-4">

      {/* LOGO */}
      <Link
        to="/"
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-8"
      >
        FoodExpress
      </Link>

      {/* CARD */}
      <form
        onSubmit={handleRegister}
        className="bg-white w-full max-w-md p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Create Account
        </h2>

        {/* Name */}
        <div className="relative mb-4">
          <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-md transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-md transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="relative mb-5">
          <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-md transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-lg text-white py-3 rounded-lg font-medium cursor-pointer transition transform hover:scale-105 active:scale-95 shadow-md"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-600 text-sm md:text-base">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;