import AuthLayout from "../ui/AuthLayout";
import { Link } from "react-router-dom";
import { ArrowRightIcon, LockIcon, MailIcon } from "../ui/Icons";

export default function Login() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to manage your store"
      footerText="New here?"
      footerLink="Sign up"
      footerHref="/signup"
    >
      <label>
        Email address
        <span className="input-shell">
          <MailIcon />
          <input type="email" placeholder="you@example.com" />
        </span>
      </label>
      <label>
        Password
        <span className="input-shell">
          <LockIcon />
          <input type="password" placeholder="Password" />
        </span>
      </label>
      <div className="form-row">
        <label className="check-row">
          <input type="checkbox" />
          Remember me
        </label>
        <Link to="/signup">Forgot password?</Link>
      </div>
      <Link className="primary-button form-submit" to="/admin">Sign In <ArrowRightIcon /></Link>
    </AuthLayout>
  );
}
