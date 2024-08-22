import AddDatePicker from "components/ui/datePicker/AddDatePicker/AddDatePicker";
import { useAvailabilityContext } from "context/AvailabilityContext";
import { addAdminAvailability } from "services/availabilityServices";
import { AdminAvailabilityType } from "constants/interfaces";
import { CloseIcon } from "components/ui/icons";

interface AddAvailabilityProps {
  handleClose: () => void;
}

const AddAvailability: React.FC<AddAvailabilityProps> = ({ handleClose }) => {
  const {
    detailer,
    date,
    startTime,
    endTime,
    isBooked,
    customerInfo,
    detailPackage,
    setDate,
  } = useAvailabilityContext();

  const availability: AdminAvailabilityType = {
    detailer,
    date,
    startTime,
    endTime,
    isBooked,
    customerInfo,
    detailPackage,
  };

  const handleConfirmAvailability = () => {
    addAdminAvailability(availability);
    setDate("");
    handleClose();
  };
  return (
    <div className="h-screen w-11/12">
      {/* ADD AVAILABILITY  */}
      <div className="my-4 cursor-pointer text-end">
        <button
          className="rounded-lg border bg-slate-50 p-2 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="my-10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 size-5 h-12 w-12 rounded-full border bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 p-3 text-white shadow dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>

          <p className="text-4xl font-bold text-zinc-50">Set Availability</p>
        </div>
        <div className="w-full rounded-xl border bg-white p-10 dark:border-slate-700 dark:bg-slate-900">
          <div>
            <AddDatePicker />
          </div>
          <div className="text-end">
            <button
              className="rounded-2xl border p-2 text-sm font-extrabold text-slate-900 shadow hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              onClick={handleConfirmAvailability}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAvailability;
