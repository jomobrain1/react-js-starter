export default function AuthLayout({ title, subtitle, footerText, footerLink, footerHref, children }) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <a className="brand" href="#/">
          <span className="brand-mark">B</span>
          <span>Beast Commerce</span>
        </a>
        <div className="auth-heading">
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <form className="auth-form">
          {children}
        </form>
        <p className="auth-footer">
          {footerText} <a href={footerHref}>{footerLink}</a>
        </p>
      </section>
    </main>
  );
}
