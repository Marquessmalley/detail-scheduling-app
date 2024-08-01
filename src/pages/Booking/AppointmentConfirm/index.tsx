import { useLocation } from "react-router-dom";
import logo from "assets/images/logo.png";
import { CheckIcon } from "components/ui/icons";

const AppointmentConfirm = () => {
  const location = useLocation();

  const { userName, date, time } = location.state || {};

  return (
    <div className="h-screen flex justify-center items-center">
      {location.state !== null ? (
        <div className=" max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center mb-20">
          <div className="p-8 text-center border shadow-xl rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-teal-400 flex items-center">
              Appointment Confirmed <CheckIcon size="size-8" />
            </h1>
            <p className="mt-4 text-md font-normal  text-justify">
              Thank you, {userName} for booking with us. Your appointment is
              scheduled for{" "}
              <span className="font-bold">
                {date} at {time}.
              </span>
            </p>
          </div>
          <div>
            <img className="h-80 w-80" src={logo} alt="Your Company" />
          </div>
        </div>
      ) : (
        <div className=" max-w-6xl mx-auto mb-20">
          <div className="p-8 text-center border shadow-xl rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-teal-400 flex items-center">
              No appointment confirmed
            </h1>
            <p className="mt-4 text-md font-normal  text-justify">
              Please book an appointment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentConfirm;
