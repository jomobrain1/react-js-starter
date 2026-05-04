import AuthLayout from "../ui/AuthLayout.jsx";

export default function Signup() {
  return (
    <AuthLayout
      title="Sign up"
      subtitle="Create your account."
      footerText="Already registered?"
      footerLink="Login"
      footerHref="#/login"
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
      <a className="primary-button form-submit" href="#/admin">Create account</a>
    </AuthLayout>
  );
}
