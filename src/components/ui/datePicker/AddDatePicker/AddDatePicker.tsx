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
import { useAuth } from "context/AuthProvider";

const AddDatePicker: React.FC = () => {
  const [dateValue, setDateValue] = useState<DateValue | null>(
    now(getLocalTimeZone())
  );
  const { user } = useAuth();

  const { date, setDate, setStartTime, setDetailer } = useAvailabilityContext();

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

    if (user?.email) {
      setDetailer(user.email);
    }
  }, [
    dateValue,
    dateFormatter,
    setDate,
    timeFormatter,
    setStartTime,
    setDetailer,
    user?.email,
  ]);

  return (
    <div className="">
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

export default AddDatePicker;
