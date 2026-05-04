import AuthLayout from "../ui/AuthLayout";
import { Link } from "react-router-dom";
import { ArrowRightIcon, LockIcon, MailIcon, UserIcon } from "../ui/Icons";

export default function Signup() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start managing your store"
      footerText="Already registered?"
      footerLink="Login"
      footerHref="/login"
    >
      <label>
        Full name
        <span className="input-shell">
          <UserIcon />
          <input type="text" placeholder="Alex Carter" />
        </span>
      </label>
      <label>
        Work email
        <span className="input-shell">
          <MailIcon />
          <input type="email" placeholder="alex@company.com" />
        </span>
      </label>
      <label>
        Password
        <span className="input-shell">
          <LockIcon />
          <input type="password" placeholder="Create a password" />
        </span>
      </label>
      <Link className="primary-button form-submit" to="/admin">Create account <ArrowRightIcon /></Link>
    </AuthLayout>
  );
}
