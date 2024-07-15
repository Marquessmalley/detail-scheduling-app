import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useAvailabilityContext } from "context/AvailabilityContext";
import { Dayjs } from "dayjs";

const DatePicker: React.FC = () => {
  const { date, setDate, setStep } = useAvailabilityContext();

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setDate(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="landscape"
        disablePast={true}
        value={date}
        onChange={handleDateChange}
        onAccept={() => {
          setStep(1);
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
