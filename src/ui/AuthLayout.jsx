import { Link } from "react-router-dom";
import { HomeIcon } from "./Icons.jsx";
import "../styles/AuthStyles.css";

export default function AuthLayout({ title, subtitle, footerText, footerLink, footerHref, children }) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link className="auth-icon" to="/" aria-label="Home">
          <HomeIcon />
        </Link>
        <div className="auth-heading">
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <form className="auth-form">
          {children}
        </form>
        <p className="auth-footer">
          {footerText} <Link to={footerHref}>{footerLink}</Link>
        </p>
      </section>
    </main>
  );
}
