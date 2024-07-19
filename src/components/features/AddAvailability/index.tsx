import AvailabilityDatePicker from "components/ui/datePicker";
import { useAvailabilityContext } from "context/AvailabilityContext";
import { addAdminAvailability } from "services/availabilityServices";
import { AdminAvailabilityType } from "constants/interfaces";

interface AddAvailabilityProps {
  handleClose: () => void;
}

const AddAvailability: React.FC<AddAvailabilityProps> = ({ handleClose }) => {
  const { date, startTime, endTime, isBooked, customerInfo, detailPackage } =
    useAvailabilityContext();

  const availability: AdminAvailabilityType = {
    date,
    startTime,
    endTime,
    isBooked,
    customerInfo,
    detailPackage,
  };

  const handleConfirmAvailability = () => {
    addAdminAvailability(availability);
    handleClose();
  };
  return (
    <div className=" bg-white w-full p-10 border rounded-xl">
      <div>
        <AvailabilityDatePicker />
      </div>
      <div className="text-end">
        <button
          className="border p-2 rounded-2xl shadow text-sm font-extrabold hover:bg-slate-50"
          onClick={handleConfirmAvailability}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddAvailability;
