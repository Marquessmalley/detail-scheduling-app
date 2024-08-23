import Navbar from "components/ui/navbars/rootNavbar";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <div className="dark:via-slate-900/700 flex min-h-screen flex-col justify-between dark:bg-gradient-to-b dark:from-slate-900/70 dark:to-slate-900">
      <div>
        <div className="">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <footer className="flex justify-center border-t border-b-slate-300 py-4 dark:border-t-slate-700">
        <p className="text-sm font-semibold">
          Developed by{" "}
          <a
            href="https://marquessmalley.netlify.app/"
            className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent"
          >
            Marques Smalley
          </a>
        </p>
      </footer>
    </div>
  );
};

export default RootLayout;
