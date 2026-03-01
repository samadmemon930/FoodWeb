// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// User Pages
import Home from "../Pages/user/Home";
import Restaurant from "../Pages/user/Restaurant";
import Cart from "../Pages/user/Cart";
import Checkout from "../Pages/user/Checkout";
import Orders from "../Pages/user/Orders";

// Admin Pages
import Dashboard from "../Pages/admin/Dashboard";
import AddItem from "../Pages/admin/AddItem";
import ManageOrders from "../Pages/admin/ManageOrders";
import ManageRestaurants from "../Pages/admin/ManageRestaurants";

// Route Protection
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

const AppRoute = () => {
  return (
    <Routes>
      {/* User Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/add-item"
        element={
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/manage-orders"
        element={
          <AdminRoute>
            <ManageOrders />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/manage-restaurants"
        element={
          <AdminRoute>
            <ManageRestaurants />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default AppRoute;