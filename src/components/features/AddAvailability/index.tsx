import AvailabilityDatePicker from "components/ui/datePicker";
const AddAvailability: React.FC = () => {
  return (
    <div className=" bg-white w-full p-10 border rounded-xl">
      <div>
        <AvailabilityDatePicker />
      </div>
      <div className="text-end">
        <button className="border p-2 rounded-2xl shadow text-sm font-extrabold hover:bg-slate-50">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddAvailability;
