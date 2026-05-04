import AuthLayout from "../ui/AuthLayout.jsx";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <AuthLayout
      title="Sign up"
      subtitle="Create your account."
      footerText="Already registered?"
      footerLink="Login"
      footerHref="/login"
    >
      <label>
        Full name
        <input type="text" placeholder="Alex Carter" />
      </label>
      <label>
        Work email
        <input type="email" placeholder="alex@company.com" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Create a password" />
      </label>
      <Link className="primary-button form-submit" to="/admin">Create account</Link>
    </AuthLayout>
  );
}
