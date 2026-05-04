import AuthLayout from "../ui/AuthLayout.jsx";

export default function Login() {
  return (
    <AuthLayout
      title="Login"
      subtitle="Welcome back."
      footerText="New here?"
      footerLink="Sign up"
      footerHref="#/signup"
    >
      <label>
        Email address
        <input type="email" placeholder="you@example.com" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Enter your password" />
      </label>
      <div className="form-row">
        <label className="check-row">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#/signup">Forgot password?</a>
      </div>
      <a className="primary-button form-submit" href="#/admin">Continue</a>
    </AuthLayout>
  );
}
