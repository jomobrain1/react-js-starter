import { CartIcon } from "../ui/Icons.jsx";

export default function Cart() {
  return (
    <main className="cart-page">
      <section className="panel cart-empty">
        <CartIcon />
        <h1>Your cart is ready</h1>
        <p>Add products from the store to start a clean checkout flow.</p>
        <a className="primary-button" href="#/">Browse products</a>
      </section>
    </main>
  );
}
