import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Cart from "./pages/Cart.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/", element: React.createElement(Landing) }),
      React.createElement(Route, { path: "/login", element: React.createElement(Login) }),
      React.createElement(Route, { path: "/signup", element: React.createElement(Signup) }),
      React.createElement(Route, { path: "/cart", element: React.createElement(Cart) }),
      React.createElement(Route, { path: "/product/:slug", element: React.createElement(ProductDetail) }),
      React.createElement(Route, {
        path: "/admin",
        element: React.createElement(AdminDashboard, { section: "overview" })
      }),
      React.createElement(Route, {
        path: "/admin/orders",
        element: React.createElement(AdminDashboard, { section: "orders" })
      }),
      React.createElement(Route, {
        path: "/admin/products",
        element: React.createElement(AdminDashboard, { section: "products" })
      }),
      React.createElement(Route, {
        path: "/admin/customers",
        element: React.createElement(AdminDashboard, { section: "customers" })
      }),
      React.createElement(Route, {
        path: "/admin/settings",
        element: React.createElement(AdminDashboard, { section: "settings" })
      }),
      React.createElement(Route, { path: "*", element: React.createElement(Landing) })
    )
  );
}

export default App;
