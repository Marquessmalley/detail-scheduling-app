import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import { useAuth } from "context/AuthProvider";
import Alert from "components/ui/alert";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { signUp, error, setError } = useAuth();

  const handleSignup = (e: any): void => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError({ name: "Error", message: "Passwords must match." });
      return;
    }

    signUp(email, password);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError(null);
  };

  return (
    <>
      <div className="dark:via-slate-900/700 flex h-screen flex-1 flex-col justify-center px-6 py-12 dark:bg-gradient-to-b dark:from-slate-900/70 dark:to-slate-900 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-14 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-300">
            Create an account
          </h2>
        </div>

        {error !== null && (
          <Alert alertType={error?.name} alertMsg={error?.message} />
        )}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-300"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="Email"
                  required
                  className="block w-full rounded-md border border-slate-700 p-1 py-1.5 text-gray-900 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-300"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="block w-full rounded-md border p-1 py-1.5 text-gray-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-300"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Confirm Password"
                  required
                  className="block w-full rounded-md border p-1 py-1.5 text-gray-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-teal-400 hover:text-teal-500"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
