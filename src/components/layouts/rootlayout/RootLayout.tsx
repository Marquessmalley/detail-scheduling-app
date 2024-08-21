import Navbar from "components/ui/navbars/rootNavbar";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <div className="dark:via-slate-900/700 min-h-screen dark:bg-gradient-to-b dark:from-slate-900/70 dark:to-slate-900">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
