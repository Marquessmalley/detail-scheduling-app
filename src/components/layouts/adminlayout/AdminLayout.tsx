import { Outlet } from "react-router-dom";
import AdminNavbar from "components/ui/navbars/adminNavbar";
import AdminHeader from "components/ui/header";

const AdminLayout = () => {
  return (
    <div className="dark:via-slate-900/700 min-h-screen dark:bg-gradient-to-b dark:from-slate-900/70 dark:to-slate-900">
      <AdminNavbar />
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
