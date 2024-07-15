import AdminNavbar from "components/ui/navbars/adminNavbar";
import AdminHeader from "components/ui/header";
import PreviousAppointmentCard from "components/ui/cards/PreviousAppointmentCard";
import UpcomingAppointmentsCard from "components/ui/cards/UpcomingAppointmentsCard";

const AdminLayout = () => {
  return (
    <div className="min-h-screen">
      <AdminNavbar />
      <AdminHeader />
      {/* CARD SECTION */}
      <div className="grid grid-cols-1 gap-10 md:grid md:grid-cols-2">
        <div className="">
          <PreviousAppointmentCard />
        </div>
        <div>
          <UpcomingAppointmentsCard />
        </div>
      </div>
      {/* CARD SECTION END */}
    </div>
  );
};

export default AdminLayout;
