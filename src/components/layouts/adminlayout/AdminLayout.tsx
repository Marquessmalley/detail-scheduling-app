import { Outlet } from "react-router-dom";
import AdminNavbar from "components/ui/navbars/adminNavbar";
import AdminHeader from "components/ui/header";

const AdminLayout = () => {
  return (
    <div className="min-h-screen dark:bg-slate-900">
      <AdminNavbar />
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
