import { useLocation } from "react-router-dom";
import washAsset from "assets/images/wash-asset-1.png";
import { CheckIcon } from "components/ui/icons";

const AppointmentConfirm = () => {
  const location = useLocation();

  const { userName, date, time } = location.state || {};

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-transparent">
      {location.state !== null ? (
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-3xl max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-5xl w-full mx-auto p-12 grid lg:grid-cols-2 gap-12 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-200  whitespace-nowrap mr-2 ">
                Appointment Confirmed
              </h1>
              <CheckIcon size="size-8" />
            </div>
            {/*  */}
            <p className="mt-6 text-md font-medium text-gray-700 dark:text-gray-200 leading-relaxed ">
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
              className=" max-h-96 w-full object-cover"
              src={washAsset}
              alt="Your Company"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-3xl max-w-5xl w-full mx-auto p-12 text-center transform transition-all duration-300 hover:shadow-2xl">
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
