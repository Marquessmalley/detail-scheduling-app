import Navbar from "components/ui/navbars/rootNavbar";
import { Outlet } from "react-router-dom";
import Footer from "sections/Footer";

const RootLayout: React.FC = () => {
  return (
    <div className="dark:via-slate-900/700 flex min-h-screen flex-col justify-between dark:bg-gradient-to-b dark:from-slate-900/70 dark:to-slate-900">
      <div>
        <div className="">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
