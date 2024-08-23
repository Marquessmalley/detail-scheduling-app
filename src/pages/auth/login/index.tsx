import { useState } from "react";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthProvider";
import Alert from "components/ui/alert";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login, error, setError } = useAuth();

  const handleLogin = (e: any): void => {
    e.preventDefault();

    login(email, password);
    setError(null);
  };

  return (
    <>
      <div className="dark:via-slate-900/700 flex h-screen flex-1 flex-col justify-center px-6 py-12 dark:bg-gradient-to-b dark:from-slate-900/70 dark:to-slate-900 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-14 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-300">
            Login to your account
          </h2>
        </div>
        {error !== null && (
          <Alert alertType={error?.name} alertMsg={error?.message} />
        )}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleLogin}
          >
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
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border border-slate-700 p-1 py-1.5 text-gray-900 shadow-sm focus:border-teal-400 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-300 sm:text-sm sm:leading-6"
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
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border border-slate-700 p-1 py-1.5 text-gray-900 placeholder-slate-300 dark:bg-slate-950 dark:text-slate-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-10 text-sm">
              <Link
                to="/forgot"
                className="font-semibold text-teal-400 hover:text-teal-500"
              >
                Forgot password?
              </Link>
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
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-teal-400 hover:text-teal-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
