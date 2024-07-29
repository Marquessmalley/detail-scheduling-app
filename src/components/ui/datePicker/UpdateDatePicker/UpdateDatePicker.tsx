import { useState, useEffect } from "react";
import { DatePicker } from "@nextui-org/react";
import {
  now,
  today,
  DateValue,
  getLocalTimeZone,
} from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { useAvailabilityContext } from "context/AvailabilityContext";

interface UpdateDatePickerProps {
  savedDate?: DateValue;
}

const UpdateDatePicker: React.FC<UpdateDatePickerProps> = ({ savedDate }) => {
  const [dateValue, setDateValue] = useState<DateValue | null>(
    now(getLocalTimeZone())
  );

  const { date, setDate, setStartTime } = useAvailabilityContext();

  let dateFormatter = useDateFormatter({
    dateStyle: "full",
  });
  let timeFormatter = useDateFormatter({
    timeStyle: "short",
  });

  useEffect(() => {
    if (dateValue !== null) {
      setDate(dateFormatter.format(dateValue.toDate(getLocalTimeZone())));
      setStartTime(timeFormatter.format(dateValue.toDate(getLocalTimeZone())));
    }
  }, [dateValue, setDate, setStartTime, dateFormatter, timeFormatter]);

  return (
    <div>
      <DatePicker
        label="Update Available Date"
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
