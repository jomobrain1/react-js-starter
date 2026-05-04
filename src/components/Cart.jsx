import { Link } from "react-router-dom";
import { CartIcon } from "../ui/Icons.jsx";
import "../styles/CartStyles.css";

export default function Cart() {
  return (
    <main className="cart-page">
      <section className="panel cart-empty">
        <CartIcon />
        <h1>Your cart is ready</h1>
        <p>Add products from the store to start a clean checkout flow.</p>
        <Link className="primary-button" to="/">Browse products</Link>
      </section>
    </main>
  );
}
