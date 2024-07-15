import { previousAppointments } from "constants/appointment";
import Accordion from "components/ui/accordion";

const PreviousAppointmentCard = () => {
  return (
    <div className="bg-slate-50 mx-auto max-w-xl rounded-lg shadow-md overflow-hidden py-4">
      <div className="max-w-lg mx-auto my-4">
        <p className="text-md font-semibold text-gray-800">
          Previous Appointments
        </p>
      </div>
      {previousAppointments &&
        previousAppointments.map((appointment) => {
          return <Accordion appointment={appointment} />;
        })}
    </div>
  );
};

export default PreviousAppointmentCard;
