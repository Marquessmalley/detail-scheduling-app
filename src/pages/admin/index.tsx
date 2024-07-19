import { useState, useEffect } from "react";
import PreviousAppointmentCard from "components/ui/cards/PreviousAppointmentCard";
import UpcomingAppointmentsCard from "components/ui/cards/UpcomingAppointmentsCard";
import { readAdminAvailability } from "services/availabilityServices";

const AdminPage = () => {
  const [availabilities, setAvailabilities] = useState();

  const fetchAvailabilities = async () => {
    try {
      const slots = await readAdminAvailability();
      setAvailabilities(slots);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAvailabilities();
  }, []);

  console.log(availabilities);
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid md:grid-cols-2">
        <div className="">
          <PreviousAppointmentCard />
        </div>
        <div>
          <UpcomingAppointmentsCard />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
