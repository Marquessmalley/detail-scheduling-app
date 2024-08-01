import { useState, useEffect } from "react";
import { database } from "firebaseConfig";
import { onValue, ref } from "firebase/database";
import { bookingSteps } from "constants/bookingSteps";
import { MobileStepper } from "@mui/material";
import { sortedAvailabilities } from "utils/sortAvailabilities";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ScheduleAppointment from "components/features/ScheduleAppointment/ScheduleAppointment";
import { AdminAvailabilityType } from "constants/interfaces";
import { useUserAppointmentContext } from "context/AppointmentContext";

const BookingStepper: React.FC = () => {
  const [aptErr, setAptErr] = useState<boolean>(false);
  const [aptErrMsg, setAptErrMsg] = useState<string>("");
  const [activeStep, setActiveStep] = useState<number>(0);
  const [availableDates, setAvailableDates] = useState<
    [string, { availability: AdminAvailabilityType }][] | null
  >(null);
  const maxSteps = bookingSteps.length;

  const { userAppointment } = useUserAppointmentContext();
  const { firstName, lastName, email, phone, address } =
    userAppointment.contactInfo;

  const handleNext = (): void => {
    if (activeStep === 0 && userAppointment.vehicleType === undefined) {
      setAptErr(true);
      setAptErrMsg("Please Select a vehicle type.");
      return;
    } else if (
      activeStep === 1 &&
      userAppointment.selectedPackage === undefined
    ) {
      setAptErr(true);
      setAptErrMsg("Please Select a package.");
      return;
    } else if (activeStep === 2 && userAppointment.date === "") {
      setAptErr(true);
      setAptErrMsg("Please Select a date and time.");
      return;
    } else if (
      activeStep === 3 &&
      (!firstName || !lastName || !email || !phone || !address)
    ) {
      setAptErr(true);
      setAptErrMsg("Please fill out all fields.");
      return;
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };
  const handleBack = (): void => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    const dbRef = ref(database, "/availability");
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const sortedData = sortedAvailabilities(snapshot.val());
        setAvailableDates(sortedData);
      } else {
        console.log("not found");
        setAvailableDates(null);
      }
    });
  }, []);

  return (
    <div className="flex flex-col h-full ">
      {/* HEADER */}
      <div className="p-2 mt-5 flex items-center justify-center">
        <p className="h-10 w-10 border shadow rounded-xl mr-2 p-1 text-center text-xl text-white font-bold bg-gradient-to-br from-teal-400 to-pink-300">
          {activeStep + 1}/{bookingSteps.length}
        </p>
        <p className="text-2xl font-bold">{bookingSteps[activeStep]}</p>
      </div>

      {/* CONTENT */}
      <ScheduleAppointment
        activeStep={activeStep}
        availableDates={availableDates}
        aptErr={aptErr}
        aptErrMsg={aptErrMsg}
        setAptErr={setAptErr}
      />

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
              disabled={activeStep === maxSteps - 1 || activeStep === 4}
              className={
                activeStep !== 4
                  ? "text-md font-semibold bg-teal-400 text-white p-2 rounded-xl text-center transition duration-200 hover:bg-teal-500"
                  : "text-md font-semibold bg-teal-500 text-white p-2 rounded-xl"
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
                  ? "text-md font-semibold bg-teal-400 text-white p-2 rounded-xl text-center transition duration-200 hover:bg-teal-500"
                  : "text-md font-semibold bg-teal-500 text-white p-2 rounded-xl "
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
