import { Link } from "react-router-dom";

export default function AuthLayout({ title, subtitle, footerText, footerLink, footerHref, children }) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link className="brand" to="/">
          <span className="brand-mark">B</span>
          <span>Beast Commerce</span>
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
