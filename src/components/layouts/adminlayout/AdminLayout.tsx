import AdminNavbar from "components/ui/navbar/adminNavbar";
import AdminHeader from "components/ui/header";

const AdminLayout = () => {
  return (
    <div className="min-h-screen">
      <AdminNavbar />
      <AdminHeader />
    </div>
  );
};

export default AdminLayout;
