import Navbar from "components/ui/navbars/rootNavbar";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
