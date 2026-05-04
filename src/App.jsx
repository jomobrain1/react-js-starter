import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import Home from "./pages/Landing.jsx";
import Register from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/AdminDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard section="overview" />} />
        <Route
          path="/admin/dashboard"
          element={<Dashboard section="overview" />}
        />
        <Route path="/admin/orders" element={<Dashboard section="orders" />} />
        <Route
          path="/admin/products"
          element={<Dashboard section="products" />}
        />
        <Route
          path="/admin/customers"
          element={<Dashboard section="customers" />}
        />
        <Route
          path="/admin/settings"
          element={<Dashboard section="settings" />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
