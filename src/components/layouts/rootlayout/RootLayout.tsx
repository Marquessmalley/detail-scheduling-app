import Navbar from "components/ui/navbars/rootNavbar";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <div className="dark:via-slate-900/700 min-h-screen dark:bg-gradient-to-b dark:from-slate-900/70 dark:to-slate-900">
      <div className="border-b border-b-slate-300 dark:border-b-slate-700">
        <Navbar />
        <Outlet />
      </div>
      <div className="flex justify-center py-4">
        <p className="text-sm font-semibold">
          Developed by{" "}
          <a
            href="https://marquessmalley.netlify.app/"
            className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent"
          >
            {" "}
            Marques Smalley
          </a>
        </p>
      </div>
    </div>
  );
};

export default RootLayout;
