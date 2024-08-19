import { useLocation } from "react-router-dom";
import washAsset from "assets/images/wash-asset-1.png";
import { CheckIcon } from "components/ui/icons";

const AppointmentConfirm = () => {
  const location = useLocation();

  const { userName, date, time } = location.state || {};

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-transparent">
      {location.state !== null ? (
        <div className="mx-auto grid w-full max-w-md transform gap-12 rounded-3xl bg-white p-12 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-slate-800 sm:max-w-xl md:max-w-2xl lg:max-w-5xl lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <h1 className="mr-2 whitespace-nowrap text-2xl font-bold text-gray-800 dark:text-slate-200">
                Appointment Confirmed
              </h1>
              <CheckIcon size="size-8" />
            </div>
            {/*  */}
            <p className="text-md mt-6 font-medium leading-relaxed text-gray-700 dark:text-gray-200">
              Thank you,{" "}
              <span className="text-teal-600 dark:text-teal-400">
                {userName}
              </span>
              , for booking with us. Your appointment is scheduled for{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-200">
                {date} at {time}.
              </span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              className="max-h-96 w-full object-cover"
              src={washAsset}
              alt="Your Company"
            />
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-5xl transform rounded-3xl bg-white p-12 text-center shadow-lg transition-all duration-300 hover:shadow-2xl">
          <h1 className="text-4xl font-bold text-gray-800">
            No Appointment Confirmed
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-700">
            Please book an appointment.
          </p>
        </div>
      )}
    </div>
  );
};

export default AppointmentConfirm;
