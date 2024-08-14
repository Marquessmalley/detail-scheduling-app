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
import { calculatePrice } from "utils/calculatePrice";
import calculateEndTime from "utils/calculateEndTime";

const BookingStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [appointmentError, setAppointmentError] = useState({
    errorType: "",
    errorMsg: "",
  });
  const [availableDates, setAvailableDates] = useState<
    [string, { availability: AdminAvailabilityType }][] | null
  >(null);
  const maxSteps = bookingSteps.length;

  const { userAppointment, setUserAppointment } = useUserAppointmentContext();
  const { firstName, lastName, email, phone, address } =
    userAppointment.contactInfo;

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
    } else if (
      activeStep === 3 &&
      (!firstName || !lastName || !email || !phone || !address)
    ) {
      setAppointmentError({
        errorType: "Contact Information",
        errorMsg: "Please fill out all fields.",
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

  useEffect(() => {
    const dbRef = ref(database, "/availability");
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const sortedData = sortedAvailabilities(snapshot.val());
        setAvailableDates(sortedData);
      } else {
        console.log("not found");
        // setAvailableDates(null);
      }
    });
  }, []);

  return (
    <div className="flex flex-col h-full ">
      {/* HEADER */}
      <div className="p-2 my-5 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">{bookingSteps[activeStep].title}</h2>

        <p className="text-sm  text-slate-600 text-center leading-6">
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
                  ? "text-md font-semibold bg-teal-400 text-white p-2 m-6 rounded-xl text-center transition duration-200 hover:bg-teal-500"
                  : "text-md font-semibold bg-teal-500 text-white p-2 m-6 rounded-xl"
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
                  ? "text-md font-semibold bg-teal-400 text-white p-2 m-6 rounded-xl text-center transition duration-200 hover:bg-teal-500"
                  : "text-md font-semibold bg-teal-500 text-white p-2 m-6 rounded-xl "
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
