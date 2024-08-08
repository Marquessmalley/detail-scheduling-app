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
    x: [string, { availability: AdminAvailabilityType }] | null
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
      : now(getLocalTimeZone())
  );

  const [selectedDate, setSelectedDate] = useState<string>(
    userAppointment.date
  );
  let dateFormatter = useDateFormatter({
    dateStyle: "full",
  });

  const calendarDate = dateFormatter.format(
    calendarValue.toDate(getLocalTimeZone())
  );

  const match = availableDates?.filter(
    (availability) => availability[1].availability.date === calendarDate
  );

  return (
    <>
      {activeStep === 2 &&
        appointmentError.errorType === "Select Date & Time" && (
          <>
            <Alert alertType="Error" alertMsg={appointmentError.errorMsg} />
          </>
        )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <div className="flex justify-center">
          <Calendar
            aria-label="Date (Controlled)"
            value={calendarValue}
            onChange={setCalendarValue}
            minValue={today(getLocalTimeZone())}
          />
        </div>
        <div className=" ">
          <p className="text-lg text-center font-bold text-slate-600">
            {calendarDate}
          </p>
          {match && match.length > 0 ? (
            match?.map((availability) => {
              const isSelected =
                availability[1].availability.date === selectedDate;
              return (
                <div
                  className={
                    isSelected
                      ? "flex justify-center m-2 h-12  p-4 border border-slate-300 rounded-2xl shadow cursor-pointer bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 transition duration-200"
                      : "flex justify-center m-2 h-12  p-4 border border-slate-300 rounded-2xl shadow cursor-pointer hover:bg-slate-50 transition duration-200"
                  }
                  onClick={() => {
                    setUserAppointment((prevState: any) => ({
                      ...prevState,
                      date: availability[1].availability.date,
                      startTime: availability[1].availability.startTime,
                    }));
                    setSelectedDate(availability[1].availability.date);

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
                        ? "text-sm font-semibold text-white "
                        : "text-sm font-semibold text-slate-500 "
                    }
                  >
                    {availability[1].availability.startTime}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center">
              <p className="text-md text-center font-semibold text-slate-500 m-2">
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
