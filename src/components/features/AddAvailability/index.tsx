import DatePicker from "components/ui/datePicker";
import TimePicker from "components/ui/timePicker";
import { useAvailabilityContext } from "context/AvailabilityContext";

const AddAvailability: React.FC = () => {
  const { step } = useAvailabilityContext();
  return (
    <>
      {step === 0 && (
        <>
          <DatePicker />
        </>
      )}
      {step === 1 && (
        <>
          <TimePicker />
        </>
      )}
    </>
  );
};

export default AddAvailability;
