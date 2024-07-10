import Navbar from "components/ui/navbar/rootNavbar";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
