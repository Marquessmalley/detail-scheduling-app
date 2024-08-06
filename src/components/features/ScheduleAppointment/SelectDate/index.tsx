import { useState } from "react";
import { useUserAppointmentContext } from "context/AppointmentContext";
import { AdminAvailabilityType } from "constants/interfaces";
import Alert from "components/ui/alert";

interface SelectDateProps {
  availableDates: [string, { availability: AdminAvailabilityType }][] | null;
  aptErr?: boolean;
  aptErrMsg?: string;
  setAptErr: (x: boolean) => void;
  setUpdateAvailability: (
    x: [string, { availability: AdminAvailabilityType }] | null
  ) => void;
}

const SelectDate: React.FC<SelectDateProps> = ({
  availableDates,
  aptErr,
  aptErrMsg,
  setAptErr,
  setUpdateAvailability,
}) => {
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const [selectedDate, setSelectedDate] = useState<string>(
    userAppointment.date
  );
  console.log(availableDates);

  return (
    <>
      {aptErr && (
        <>
          <Alert alertType="Error" alertMsg={aptErrMsg} />
        </>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {availableDates &&
          availableDates.map((slot) => {
            const isSelected = slot[1].availability.date === selectedDate;
            return (
              <div
                key={slot[0]}
                className={
                  isSelected
                    ? "p-4 border border-slate-300 rounded-2xl shadow h-24 sm:h-32 w-full flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
                    : "p-4 border border-slate-300 rounded-2xl shadow h-24 sm:h-32 w-full flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition duration-200"
                }
                onClick={() => {
                  setUserAppointment((prevState: any) => ({
                    ...prevState,
                    date: slot[1].availability.date,
                    startTime: slot[1].availability.startTime,
                  }));
                  setSelectedDate(slot[1].availability.date);

                  setUpdateAvailability([
                    slot[0],
                    { availability: slot[1].availability },
                  ]);

                  setAptErr(false);
                }}
              >
                <p
                  className={
                    isSelected
                      ? "text-sm  sm:text-lg font-semibold text-white"
                      : "text-sm  sm:text-lg font-semibold"
                  }
                >
                  {slot[1].availability.date}
                </p>
                <p className={isSelected ? "text-sm text-white" : "text-sm"}>
                  {slot[1].availability.startTime}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SelectDate;
