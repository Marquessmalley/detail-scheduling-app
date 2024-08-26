import { useState } from "react";
import { bookingSteps } from "constants/bookingSteps";
import { MobileStepper } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ScheduleAppointment from "components/features/ScheduleAppointment/ScheduleAppointment";
import { AdminAvailabilityType } from "constants/interfaces";
import { useUserAppointmentContext } from "context/AppointmentContext";
import { calculatePrice } from "utils/calculatePrice";
import calculateEndTime from "utils/calculateEndTime";

interface BookingStepperProps {
  availableDates: [string, { availability: AdminAvailabilityType }][] | null;
}

const BookingStepper: React.FC<BookingStepperProps> = ({ availableDates }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [appointmentError, setAppointmentError] = useState({
    errorType: "",
    errorMsg: "",
  });

  const maxSteps = bookingSteps.length;

  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const handleNext = (): void => {
    if (activeStep === 0 && userAppointment.vehicleType === undefined) {
      setAppointmentError({
        errorType: "Select Vehicle",
        errorMsg: "Please Select a vehicle type.",
      });
      return;
    } else if (
      activeStep === 1 &&
      userAppointment.selectedPackage === undefined
    ) {
      setAppointmentError({
        errorType: "Select Package",
        errorMsg: "Please Select a package",
      });
      return;
    } else if (activeStep === 2 && userAppointment.date === "") {
      setAppointmentError({
        errorType: "Select Date & Time",
        errorMsg: "Please Select a date and time.",
      });
      return;
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }

    if (activeStep === 1) {
      setUserAppointment((prevState: any) => ({
        ...prevState,
        price: calculatePrice(userAppointment),
      }));
    } else if (activeStep === 2) {
      const calcEndTime = calculateEndTime(userAppointment);
      setUserAppointment((prevState: any) => ({
        ...prevState,
        endTime: calcEndTime,
      }));
    }
  };
  const handleBack = (): void => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex h-full flex-col">
      {/* HEADER */}
      <div className="my-5 flex flex-col items-center justify-center p-2">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-300">
          {bookingSteps[activeStep].title}
        </h2>

        <p className="text-center text-sm leading-6 text-slate-600 dark:text-gray-400">
          {bookingSteps[activeStep]?.desc}{" "}
        </p>
      </div>

      {/* CONTENT */}
      <ScheduleAppointment
        activeStep={activeStep}
        availableDates={availableDates}
        appointmentError={appointmentError}
        setAppointmentError={setAppointmentError}
      />

      {/* STEPPER */}
      <div className="flex-none">
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            background: "none",
            width: "100%",
            overflowX: "auto",
            fontWeight: "bold",
          }}
          nextButton={
            <button
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1 || activeStep === 3}
              className={
                activeStep !== 3
                  ? "text-md m-6 rounded-xl bg-teal-400 p-2 text-center font-semibold text-white transition duration-200 hover:bg-teal-500 dark:border dark:border-slate-600 dark:bg-inherit dark:shadow-slate-600 dark:hover:bg-slate-800"
                  : "text-md m-6 rounded-xl bg-teal-500 p-2 font-semibold text-white dark:border dark:border-slate-600 dark:bg-inherit dark:shadow-slate-600 dark:ring-1 dark:ring-teal-600"
              }
            >
              Next
              <KeyboardArrowRightIcon />
            </button>
          }
          backButton={
            <button
              onClick={handleBack}
              disabled={activeStep === 0}
              className={
                activeStep !== 0
                  ? "text-md m-6 rounded-xl bg-teal-400 p-2 text-center font-semibold text-white transition duration-200 hover:bg-teal-500 dark:border dark:border-slate-600 dark:bg-inherit dark:shadow-slate-600 dark:hover:bg-slate-800"
                  : "text-md m-6 rounded-xl bg-teal-500 p-2 font-semibold text-white dark:border dark:border-slate-800 dark:bg-inherit dark:shadow-slate-600"
              }
            >
              <KeyboardArrowLeftIcon />
              Back
            </button>
          }
        />
      </div>
    </div>
  );
};

export default BookingStepper;
