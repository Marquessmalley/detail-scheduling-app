import { useState } from "react";
import { useUserAppointmentContext } from "context/AppointmentContext";
import { AdminAvailabilityType } from "constants/interfaces";
import Alert from "components/ui/alert";
import { Calendar } from "@nextui-org/react";
import { useDateFormatter } from "@react-aria/i18n";

import {
  now,
  today,
  DateValue,
  getLocalTimeZone,
  parseDate,
} from "@internationalized/date";

interface SelectDateProps {
  activeStep: number;
  availableDates: [string, { availability: AdminAvailabilityType }][] | null;
  appointmentError: { errorType: string; errorMsg: string };
  setAppointmentError: (x: { errorType: string; errorMsg: string }) => void;
  setUpdateAvailability: (
    x: [string, { availability: AdminAvailabilityType }] | null,
  ) => void;
}

const SelectDate: React.FC<SelectDateProps> = ({
  activeStep,
  availableDates,
  appointmentError,
  setAppointmentError,
  setUpdateAvailability,
}) => {
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const [calendarValue, setCalendarValue] = useState<DateValue>(
    userAppointment.date !== ""
      ? parseDate(new Date(userAppointment.date).toISOString().split("T")[0])
      : now(getLocalTimeZone()),
  );

  const [selectedDate, setSelectedDate] = useState<string>(
    userAppointment.date,
  );
  const [selectedTime, setSelectedTime] = useState<string>(
    userAppointment.startTime,
  );

  let dateFormatter = useDateFormatter({
    dateStyle: "full",
  });

  const calendarDate = dateFormatter.format(
    calendarValue.toDate(getLocalTimeZone()),
  );

  const match = availableDates?.filter(
    (availability) => availability[1].availability.date === calendarDate,
  );

  return (
    <>
      {activeStep === 2 &&
        appointmentError.errorType === "Select Date & Time" && (
          <>
            <Alert alertType="Error" alertMsg={appointmentError.errorMsg} />
          </>
        )}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
        <div className="flex justify-center">
          <Calendar
            aria-label="Date (Controlled)"
            value={calendarValue}
            onChange={setCalendarValue}
            minValue={today(getLocalTimeZone())}
          />
        </div>
        <div className=" ">
          <p className="text-center text-lg font-bold text-slate-600 dark:text-slate-300">
            {calendarDate}
          </p>
          {match && match.length > 0 ? (
            match?.map((availability) => {
              const isSelected =
                availability[1].availability.date === selectedDate &&
                availability[1].availability.startTime === selectedTime;

              return (
                <div
                  key={availability[0]}
                  className={
                    isSelected
                      ? "m-2 flex h-12 cursor-pointer justify-center rounded-2xl border border-slate-300 bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 p-4 shadow transition duration-200 dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
                      : "m-2 flex h-12 cursor-pointer justify-center rounded-2xl border border-slate-300 p-4 shadow transition duration-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  }
                  onClick={() => {
                    setUserAppointment((prevState: any) => ({
                      ...prevState,
                      date: availability[1].availability.date,
                      startTime: availability[1].availability.startTime,
                    }));
                    setSelectedDate(availability[1].availability.date);
                    setSelectedTime(availability[1].availability.startTime);
                    setUpdateAvailability([
                      availability[0],
                      { availability: availability[1].availability },
                    ]);

                    setAppointmentError({ errorType: "", errorMsg: "" });
                  }}
                >
                  <p
                    className={
                      isSelected
                        ? "text-sm font-semibold text-white"
                        : "text-sm font-semibold text-slate-500 dark:text-slate-200"
                    }
                  >
                    {availability[1].availability.startTime}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center">
              <p className="text-md m-2 text-center font-semibold text-slate-500 dark:text-slate-400">
                No Availability
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectDate;
