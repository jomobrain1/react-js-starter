import { createElement, useEffect, useState } from "react";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Cart from "./pages/Cart.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Signup from "./pages/Signup.jsx";

const routes = {
  "/": { component: Landing },
  "/login": { component: Login },
  "/signup": { component: Signup },
  "/cart": { component: Cart },
  "/admin": { component: AdminDashboard, props: { section: "overview" } },
  "/admin/orders": { component: AdminDashboard, props: { section: "orders" } },
  "/admin/products": { component: AdminDashboard, props: { section: "products" } },
  "/admin/customers": { component: AdminDashboard, props: { section: "customers" } },
  "/admin/settings": { component: AdminDashboard, props: { section: "settings" } }
};

function getRouteConfig() {
  const hash = window.location.hash.replace("#", "");
  if (routes[hash]) {
    return routes[hash];
  }

  if (hash.startsWith("/product/")) {
    return {
      component: ProductDetail,
      props: { slug: hash.replace("/product/", "") }
    };
  }

  return routes["/"];
}

export default function App() {
  const [route, setRoute] = useState(getRouteConfig);

  useEffect(() => {
    const handleRoute = () => setRoute(getRouteConfig());
    window.addEventListener("hashchange", handleRoute);
    return () => window.removeEventListener("hashchange", handleRoute);
  }, []);

  const Page = route.component;

  return createElement(Page, route.props);
}
