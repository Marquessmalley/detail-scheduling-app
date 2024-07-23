import { useState } from "react";
import { DatePicker } from "@nextui-org/react";
import { today, DateValue, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { useAvailabilityContext } from "context/AvailabilityContext";
import { useAuth } from "context/AuthProvider";

interface UpdateDatePickerProps {
  savedDate?: DateValue;
}

const UpdateDatePicker: React.FC<UpdateDatePickerProps> = ({ savedDate }) => {
  const [dateValue, setDateValue] = useState<DateValue | null>(
    savedDate ? savedDate : null
  );

  const { setDate, setStartTime, setDetailer } = useAvailabilityContext();
  const { user } = useAuth();

  let dateFormatter = useDateFormatter({
    dateStyle: "full",
  });
  let timeFormatter = useDateFormatter({
    timeStyle: "short",
  });

  return (
    <div>
      <DatePicker
        label="Add Available Date"
        variant="flat"
        value={dateValue}
        onChange={setDateValue}
        minValue={today(getLocalTimeZone())}
      />
      <p className=" my-4 text-sm text-black ">
        Selected date:{" "}
        <span className="text-sm text-black font-semibold">
          {dateValue
            ? dateFormatter.format(dateValue.toDate(getLocalTimeZone()))
            : "--"}
        </span>
      </p>
      <p className=" my-4 text-sm text-black ">
        Selected time:{" "}
        <span className="text-sm text-black font-semibold">
          {dateValue
            ? timeFormatter.format(dateValue.toDate(getLocalTimeZone()))
            : "00:00:00"}
        </span>
      </p>
    </div>
  );
};

export default UpdateDatePicker;
