import { useState } from "react";
import { CartIcon, MenuIcon, ShoppingBagIcon, XIcon } from "../ui/Icons.jsx";
import { findProduct, products } from "../data/products.js";

export default function ProductDetail({ slug }) {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const product = findProduct(slug);
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const thumbnails = [0, 1, 2];

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
          <a href="#/admin/products">Products</a>
          <a className="ghost-button" href="#/login">Login</a>
          <a className="primary-button" href="#/signup">Start free</a>
          <a className="cart-link" href="#/cart" aria-label="Cart"><CartIcon /><span>4</span></a>
        </nav>
      </header>

      <main className="product-detail-page">
        <section className="detail-grid">
          <div className="detail-gallery">
            <div className={`detail-image product-image image-${activeImage}`}>
              <ShoppingBagIcon />
            </div>
            <div className="thumb-row">
              {thumbnails.map((thumb) => (
                <button
                  className={activeImage === thumb ? "active" : ""}
                  key={thumb}
                  onClick={() => setActiveImage(thumb)}
                  type="button"
                >
                  <span className={`product-image image-${thumb}`}>
                    <ShoppingBagIcon />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <article className="detail-info">
            <span className="pill">{product.tag}</span>
            <h1>{product.name}</h1>
            <p>{product.details}</p>
            <div className="review-row">
              <span>5 stars</span>
              <b>{product.rating}</b>
              <small>({product.reviews} reviews)</small>
            </div>
            <div className="price-row detail-price">
              <strong>{product.price}</strong>
              <s>{product.oldPrice}</s>
            </div>
            <p className="stock-note">In stock. {product.stock} available.</p>

            <div className="quantity-row">
              <span>Quantity</span>
              <button type="button">-</button>
              <strong>1</strong>
              <button type="button">+</button>
            </div>

            <button className="primary-button detail-cart" type="button">
              <CartIcon /> Add to cart
            </button>
          </article>
        </section>

        <section className="panel review-panel">
          <div>
            <span className="eyebrow">Review</span>
            <h2>Write a review</h2>
          </div>
          <textarea placeholder="Write your review here..." />
          <button className="secondary-button" type="button">Submit review</button>
        </section>

        <section className="related-section">
          <div className="section-heading">
            <span className="eyebrow">Related</span>
            <h2>You may also like</h2>
          </div>
          <div className="product-grid compact-products">
            {related.map((item, index) => (
              <article className="product-card" key={item.slug}>
                <div className={`product-image image-${index}`}>
                  <ShoppingBagIcon />
                </div>
                <div>
                  <span className="pill">{item.tag}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="price-row">
                    <strong>{item.price}</strong>
                    <s>{item.oldPrice}</s>
                  </div>
                  <div className="card-actions">
                    <a className="secondary-button" href={`#/product/${item.slug}`}>View product</a>
                    <button className="primary-button" type="button"><CartIcon /> Add to cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
