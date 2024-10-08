import { useUserAppointmentContext } from "context/AppointmentContext";
import { AdminAvailabilityType } from "constants/interfaces";
import { addUserAppointment } from "services/appointmentServices";
import { useNavigate } from "react-router-dom";

interface AppointmentSummaryProp {
  updateAvailability: [string, { availability: AdminAvailabilityType }] | null;
}

const AppointmentSummary: React.FC<AppointmentSummaryProp> = ({
  updateAvailability,
}) => {
  const navigate = useNavigate();
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const handleSubmitAppointment = () => {
    addUserAppointment(userAppointment, updateAvailability);

    navigate("/booking-confirm", {
      state: {
        userName: `${userAppointment.contactInfo.firstName} ${userAppointment.contactInfo.lastName} `,
        date: userAppointment.date,
        time: userAppointment.startTime,
      },
    });
    setUserAppointment(null);
  };

  return (
    <div className="mx-auto mt-2 max-w-lg p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold text-teal-400 sm:text-lg">
            Vehicle Type
          </h3>
          <p className="text-gray-700 sm:text-lg">
            {userAppointment.vehicleType}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold text-teal-400 sm:text-lg">
            Selected Package
          </h3>
          <p className="text-sm text-gray-700 sm:text-lg">
            {userAppointment.selectedPackage}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold text-teal-400 sm:text-lg">
            Appointment Date
          </h3>
          <p className="text-sm text-gray-700 sm:text-lg">
            {userAppointment.date}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold text-teal-400 sm:text-lg">
            Start Time
          </h3>
          <p className="text-sm text-gray-700 sm:text-lg">
            {userAppointment.startTime}
          </p>
        </div>

        {userAppointment.endTime && (
          <div className="grid grid-cols-2 sm:grid-cols-1">
            <h3 className="text-sm font-semibold text-teal-400 sm:text-lg">
              End Time
            </h3>
            <p className="text-sm text-gray-700 sm:text-lg">
              {userAppointment.endTime}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold text-teal-400 sm:text-lg">
            Price
          </h3>
          <p className="text-sm text-gray-700 sm:text-lg">
            ${userAppointment.price}
          </p>
        </div>
      </div>
      <span className="mt-6 grid grid-cols-1 gap-4 border-t-1 sm:grid-cols-2"></span>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold sm:text-lg">First Name</h3>
          <p className="text-gray-700 sm:text-lg">
            {userAppointment.contactInfo.firstName}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold sm:text-lg">Last Name</h3>
          <p className="text-sm text-gray-700 sm:text-lg">
            {userAppointment.contactInfo.lastName}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold sm:text-lg">Phone</h3>
          <p className="text-sm text-gray-700 sm:text-lg">
            {userAppointment.contactInfo.phone}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold sm:text-lg">Email</h3>
          <p className="text-sm text-gray-700 sm:text-lg">
            {userAppointment.contactInfo.email}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1">
          <h3 className="text-sm font-semibold sm:text-lg">Address</h3>
          <p className="text-sm text-gray-700 sm:text-lg">
            {userAppointment.contactInfo.address}
          </p>
        </div>
      </div>

      <button
        className="mt-4 w-full rounded-xl bg-teal-400 px-4 py-2 font-bold text-white transition duration-200 hover:bg-teal-500"
        onClick={handleSubmitAppointment}
      >
        Submit Appointment
      </button>
    </div>
  );
};

export default AppointmentSummary;
