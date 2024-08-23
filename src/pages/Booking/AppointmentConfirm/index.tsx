import { useLocation } from "react-router-dom";
import washAsset from "assets/images/wash-asset-1.png";
import { CheckIcon } from "components/ui/icons";

const AppointmentConfirm = () => {
  const location = useLocation();

  const { userName, date, time } = location.state || {};

  return (
    <div className="m-8">
      {location.state !== null ? (
        <div className="mx-auto grid h-fit max-w-lg grid-cols-1 gap-y-10 rounded-2xl p-12 dark:bg-slate-800 lg:max-w-6xl lg:grid-cols-12">
          {/* TEXT */}
          <div className="col-span-12 flex flex-col items-center justify-center sm:col-span-6">
            <div className="mb-4 flex items-center">
              <h1 className="mr-2 whitespace-nowrap text-lg font-bold text-gray-800 dark:text-slate-300 sm:text-3xl">
                Appointment Confirmed
              </h1>
              <CheckIcon size="size-8" />
            </div>
            <div>
              <p className="sm:text-md text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-200">
                Thank you,{" "}
                <span className="text-teal-600 dark:text-teal-400">
                  {userName}
                </span>
                , for booking with us. Your appointment is scheduled for{" "}
                <span className="font-semibold text-gray-900 dark:text-slate-200">
                  {date} at {time}.
                </span>
              </p>
            </div>
          </div>
          {/* IMG */}
          <div className="col-span-12 grid sm:col-span-6">
            <img className="" src={washAsset} alt="Your Company" />
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
