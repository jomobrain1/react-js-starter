import { CartIcon, MenuIcon, ShoppingBagIcon, XIcon } from "../ui/Icons.jsx";
import { categories, products } from "../data/products.js";
import { useState } from "react";

const process = [
  { title: "Launch", text: "Publish a calm storefront with clean product cards." },
  { title: "Track", text: "Watch orders, inventory, and customers in one place." },
  { title: "Grow", text: "Use focused reports to decide what to restock next." }
];

const stats = [
  ["1.2k", "monthly orders"],
  ["98%", "fulfillment rate"],
  ["24h", "average dispatch"]
];

export default function Landing() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#/">
          <span className="brand-mark">B</span>
          <span>Beast Commerce</span>
        </a>

        <button className="icon-button mobile-only" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <XIcon /> : <MenuIcon />}
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <a href="#/">Home</a>
          <a href="#collections">Collections</a>
          <a href="#features">Features</a>
          <a href="#/admin">Dashboard</a>
          <a className="ghost-button" href="#/login">Login</a>
          <a className="primary-button" href="#/signup">Start free</a>
          <a className="cart-link" href="#/cart" aria-label="Cart"><CartIcon /><span>4</span></a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <h1>Clean ecommerce for modern teams.</h1>
            <p>Storefront, login, and dashboard in one minimal React app.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#/signup">Create account</a>
              <a className="secondary-button" href="#/admin">View dashboard</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured ecommerce preview">
            <div className="phone-mockup">
              <div className="phone-speaker" />
              <div className="phone-total">
                <span>Today</span>
                <strong>$24,820</strong>
              </div>
              <div className="phone-bars">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="phone-product">
                <div className="phone-thumb">
                  <ShoppingBagIcon />
                </div>
                <div>
                  <strong>Core Hoodie</strong>
                  <span>184 in stock</span>
                </div>
                <b>$84</b>
              </div>
              <div className="phone-product">
                <div className="phone-thumb muted">
                  <ShoppingBagIcon />
                </div>
                <div>
                  <strong>Desk Mat Pro</strong>
                  <span>241 in stock</span>
                </div>
                <b>$38</b>
              </div>
            </div>
            <div className="floating-product">
              <div className="product-art">
                <ShoppingBagIcon />
              </div>
              <div>
                <span className="pill">In stock</span>
                <h2>Minimal Carry Set</h2>
                <p>Premium goods managed from one focused workspace.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Store metrics">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section-grid" id="collections">
          <div>
            <span className="eyebrow">Collections</span>
            <h2>Simple collections that keep products easy to scan.</h2>
          </div>
          <div className="category-list">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "active" : ""}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="product-grid">
          {filteredProducts.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className={`product-image image-${index % 4}`}>
                <ShoppingBagIcon />
              </div>
              <div>
                <span className="pill">{product.tag}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="review-row">
                  <span>5 stars</span>
                  <b>{product.rating}</b>
                  <small>({product.reviews})</small>
                </div>
                <div className="price-row">
                  <strong>{product.price}</strong>
                  <s>{product.oldPrice}</s>
                </div>
                <div className="card-actions">
                  <a className="secondary-button" href={`#/product/${product.slug}`}>View product</a>
                  <button className="primary-button" type="button"><CartIcon /> Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="feature-band" id="features">
          <div>
            <span className="eyebrow">Workflow</span>
            <h2>From launch to restock without clutter.</h2>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div>
            <span className="eyebrow">Admin ready</span>
            <h2>Manage products, orders, and customers from day one.</h2>
          </div>
          <a className="primary-button" href="#/admin/products">Open products</a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#/">
              <span className="brand-mark">B</span>
              <span>Beast Commerce</span>
            </a>
            <p className="footer-p">Minimal shopping and clean store management for modern teams.</p>
            <div className="social-row">
              <a href="#/">IG</a>
              <a href="#/">FB</a>
              <a href="#/">X</a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Shop</h3>
            <a href="#collections">Essentials</a>
            <a href="#collections">Workspace</a>
            <a href="#collections">Accessories</a>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <a href="#/login">My Account</a>
            <a href="#/admin/orders">Orders</a>
            <a href="#/admin/products">Products</a>
          </div>

          <form className="newsletter">
            <h3>Newsletter</h3>
            <input type="email" placeholder="you@example.com" />
            <button className="primary-button" type="button">Subscribe</button>
          </form>
        </div>
        <div className="footer-bottom">
          <span>2026 Beast Commerce.</span>
          <span>Privacy Policy | Terms | Cookies</span>
        </div>
      </footer>
    </div>
  );
}
