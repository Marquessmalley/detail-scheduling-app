import { useState } from "react";
import { bookingSteps } from "constants/bookingSteps";
import { MobileStepper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ScheduleAppointment from "components/features/ScheduleAppointment/ScheduleAppointment";

const BookingStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps = bookingSteps.length;

  const theme = useTheme();

  const handleNext = (): void => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleBack = (): void => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex flex-col h-full">
      {/* HEADER */}
      <div className="p-2 mt-5 flex items-center justify-center">
        <p className="h-10 w-10 border shadow rounded-xl mr-2 p-1 text-center text-xl text-white font-bold bg-gradient-to-br from-teal-400 to-pink-300">
          {activeStep + 1}/{bookingSteps.length}
        </p>
        <p className="text-2xl font-bold">{bookingSteps[activeStep]}</p>
      </div>

      {/* CONTENT */}
      <ScheduleAppointment activeStep={activeStep} />

      {/* STEPPER */}
      <div className="flex-none">
        <MobileStepper
          variant="text"
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
              disabled={activeStep === maxSteps - 1}
              className="text-md font-semibold"
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeftIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </button>
          }
          backButton={
            <button
              onClick={handleBack}
              disabled={activeStep === 0}
              className="text-md font-semibold"
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowLeftIcon />
              )}
              Back
            </button>
          }
        />
      </div>
    </div>
  );
};

export default BookingStepper;
