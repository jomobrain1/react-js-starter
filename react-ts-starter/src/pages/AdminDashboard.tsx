import {
  BellIcon,
  BoxIcon,
  CartIcon,
  ChartIcon,
  EditIcon,
  MenuIcon,
  RefreshIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingBagIcon,
  TrashIcon,
  UsersIcon,
  XIcon
} from "../ui/Icons";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/DashboardStyles.css";

const metrics = [
  { label: "Revenue", value: "$48,240", change: "+12.4%" },
  { label: "Orders", value: "1,284", change: "+8.1%" },
  { label: "Customers", value: "9,430", change: "+5.7%" },
  { label: "Conversion", value: "6.8%", change: "+1.2%" }
];

const orders = [
  ["#BC-1048", "Maya Reed", "Core Hoodie", "$84", "Paid"],
  ["#BC-1047", "Noah Miles", "Desk Mat Pro", "$38", "Packed"],
  ["#BC-1046", "Ivy Chen", "Minimal Carry Set", "$142", "Shipped"],
  ["#BC-1045", "Owen Brooks", "Everyday Tote", "$52", "Pending"]
];

const productSections = [
  { title: "Low stock", count: "2", text: "Products that need a restock decision." },
  { title: "Drafts", count: "4", text: "Items waiting for photos or pricing." },
  { title: "Categories", count: "8", text: "Collection groups visible in the store." }
];

const customers = [
  ["Maya Reed", "maya@example.com", "12 orders", "$1,842"],
  ["Noah Miles", "noah@example.com", "8 orders", "$934"],
  ["Ivy Chen", "ivy@example.com", "15 orders", "$2,410"],
  ["Owen Brooks", "owen@example.com", "5 orders", "$522"]
];

const navItems = [
  { label: "Overview", to: "/admin", section: "overview", icon: ChartIcon },
  { label: "Orders", to: "/admin/orders", section: "orders", icon: ShoppingBagIcon },
  { label: "Products", to: "/admin/products", section: "products", icon: BoxIcon },
  { label: "Customers", to: "/admin/customers", section: "customers", icon: UsersIcon },
  { label: "Settings", to: "/admin/settings", section: "settings", icon: SettingsIcon }
];

const sectionTitles = {
  overview: "Commerce Overview",
  orders: "Orders",
  products: "Products",
  customers: "Customers",
  settings: "Settings"
};

function OrdersTable({ compact = false }) {
  const statusClass = (status) => `status-pill status-${status.toLowerCase().replace(" ", "-")}`;

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order[0]}>
              {order.map((cell, index) => (
                <td key={cell}>
                  {index === 4 ? <span className={statusClass(cell)}>{cell}</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {compact ? null : <p className="panel-note">Showing the latest high-priority fulfillment queue.</p>}
    </div>
  );
}

function ProductsPanel() {
  return (
    <>
      <section className="product-summary-grid">
        {productSections.map((item) => (
          <article className="panel product-summary-card" key={item.title}>
            <span className="muted-text">{item.title}</span>
            <strong>{item.count}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="panel orders-panel">
        <div className="panel-head">
          <div>
            <span className="muted-text">Inventory</span>
            <h2>Product catalog</h2>
          </div>
          <button className="primary-button">Add product</button>
        </div>
        <div className="catalog-grid">
          {products.map((product, index) => (
            <article className="catalog-card" key={product.name}>
              <div className={`product-image image-${index % 4}`}>
                <ShoppingBagIcon />
              </div>
              <div>
                <span className="pill">{product.status}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="review-row">
                  <span>5 stars</span>
                  <b>{product.rating}</b>
                  <small>({product.reviews})</small>
                </div>
                <div className="catalog-meta">
                  <span className="price-row">
                    <strong>{product.price}</strong>
                    <s>{product.oldPrice}</s>
                  </span>
                  <b>{product.sales}</b>
                </div>
                <small className="stock-note">{product.stock} units available</small>
                <div className="card-actions">
                  <Link className="secondary-button" to={`/product/${product.slug}`}>View product</Link>
                  <button className="primary-button" type="button"><CartIcon /> Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function CustomersPanel() {
  return (
    <section className="panel orders-panel">
      <div className="panel-head">
        <div>
          <span className="muted-text">Audience</span>
          <h2>Customer list</h2>
        </div>
        <button className="secondary-button">Import</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Orders</th>
              <th>Lifetime value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer[1]}>
                {customer.map((cell) => <td key={cell}>{cell}</td>)}
                <td>
                  <div className="table-actions">
                    <button className="icon-button" type="button" aria-label="Edit customer"><EditIcon /></button>
                    <button className="icon-button" type="button" aria-label="Update customer"><RefreshIcon /></button>
                    <button className="icon-button danger" type="button" aria-label="Delete customer"><TrashIcon /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SettingsPanel() {
  return (
    <section className="settings-grid">
      {["Store profile", "Payments", "Shipping", "Team access"].map((item) => (
        <article className="panel settings-card" key={item}>
          <span className="muted-text">Configuration</span>
          <h2>{item}</h2>
          <p>Manage the details that keep your storefront and operations aligned.</p>
          <button className="secondary-button">Manage</button>
        </article>
      ))}
    </section>
  );
}

function OverviewContent() {
  return (
    <>
      <section className="metric-grid">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.change} this month</small>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel sales-panel">
          <div className="panel-head">
            <div>
              <span className="muted-text">Performance</span>
              <h2>Revenue trend</h2>
            </div>
            <button className="secondary-button">Export</button>
          </div>
          <div className="bar-chart" aria-label="Revenue bar chart">
            {[52, 66, 48, 74, 62, 86, 78, 93, 72, 88, 96, 84].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div>
              <span className="muted-text">Inventory</span>
              <h2>Top products</h2>
            </div>
          </div>
          <div className="product-list">
            {products.map((product) => (
              <div className="product-row" key={product.name}>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.stock} in stock</span>
                </div>
                <b>{product.sales}</b>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panel orders-panel">
        <div className="panel-head">
          <div>
            <span className="muted-text">Recent activity</span>
            <h2>Latest orders</h2>
          </div>
          <Link className="primary-button" to="/admin/orders">View orders</Link>
        </div>
        <OrdersTable compact />
      </section>
    </>
  );
}

function DashboardContent({ section }) {
  if (section === "orders") {
    return (
      <section className="panel orders-panel">
        <div className="panel-head">
          <div>
            <span className="muted-text">Fulfillment</span>
            <h2>All orders</h2>
          </div>
          <button className="primary-button">New order</button>
        </div>
        <OrdersTable />
      </section>
    );
  }

  if (section === "products") {
    return <ProductsPanel />;
  }

  if (section === "customers") {
    return <CustomersPanel />;
  }

  if (section === "settings") {
    return <SettingsPanel />;
  }

  return <OverviewContent />;
}

export default function AdminDashboard({ section = "overview" }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-shell">
      <aside className={`sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="sidebar-head">
          <Link className="brand" to="/">
            <span className="brand-mark">B</span>
            <span>Beast</span>
          </Link>
          <button className="icon-button mobile-only" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            <XIcon />
          </button>
        </div>
        <nav className="side-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link className={section === item.section ? "active" : ""} to={item.to} key={item.section}>
                <Icon /> {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="sidebar-card">
          <strong>Growth plan</strong>
          <p>Unlock automation, advanced reports, and team permissions.</p>
          <button className="secondary-button">Upgrade</button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <button className="icon-button mobile-only" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </button>
          <div>
            <p className="muted-text">Admin dashboard</p>
            <h1>{sectionTitles[section]}</h1>
          </div>
          <div className="topbar-actions">
            <label className="search-box">
              <SearchIcon />
              <input placeholder="Search orders, products..." />
            </label>
            <button className="icon-button" aria-label="Notifications"><BellIcon /></button>
            <span className="avatar">AM</span>
          </div>
        </header>

        <DashboardContent section={section} />
      </main>
    </div>
  );
}
