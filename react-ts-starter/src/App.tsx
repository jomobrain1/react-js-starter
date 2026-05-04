import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import AdminDashboard from "./pages/AdminDashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminDashboard section="overview" />} />
        <Route path="/admin/orders" element={<AdminDashboard section="orders" />} />
        <Route path="/admin/products" element={<AdminDashboard section="products" />} />
        <Route path="/admin/customers" element={<AdminDashboard section="customers" />} />
        <Route path="/admin/settings" element={<AdminDashboard section="settings" />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
