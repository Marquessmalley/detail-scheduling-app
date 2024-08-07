import { useState } from "react";
import { AdminAvailabilityType } from "constants/interfaces";
import SelectVehicle from "components/features/ScheduleAppointment/SelectVehicle";
import SelectPackage from "components/features/ScheduleAppointment/SelectPackage";
import SelectDate from "components/features/ScheduleAppointment/SelectDate";
import ContactForm from "components/features/ScheduleAppointment/ContactForm";
import AppointmentSummary from "components/features/ScheduleAppointment/AppointmentSummary";

interface ScheduleAppointmentProps {
  activeStep: number;
  availableDates: [string, { availability: AdminAvailabilityType }][] | null;
  appointmentError: { errorType: string; errorMsg: string };
  setAppointmentError: (x: { errorType: string; errorMsg: string }) => void;
}

const ScheduleAppointment: React.FC<ScheduleAppointmentProps> = ({
  activeStep,
  availableDates,
  appointmentError,
  setAppointmentError,
}) => {
  const [updateAvailability, setUpdateAvailability] = useState<
    [string, { availability: AdminAvailabilityType }] | null
  >(null);

  return (
    <>
      {activeStep === 0 && (
        <SelectVehicle
          activeStep={activeStep}
          appointmentError={appointmentError}
          setAppointmentError={setAppointmentError}
        />
      )}
      {activeStep === 1 && (
        <SelectPackage
          activeStep={activeStep}
          appointmentError={appointmentError}
          setAppointmentError={setAppointmentError}
        />
      )}
      {activeStep === 2 && (
        <SelectDate
          activeStep={activeStep}
          availableDates={availableDates}
          setUpdateAvailability={setUpdateAvailability}
          appointmentError={appointmentError}
          setAppointmentError={setAppointmentError}
        />
      )}
      {activeStep === 3 && (
        <ContactForm
          activeStep={activeStep}
          appointmentError={appointmentError}
          setAppointmentError={setAppointmentError}
        />
      )}
      {activeStep === 4 && (
        <AppointmentSummary updateAvailability={updateAvailability} />
      )}
    </>
  );
};

export default ScheduleAppointment;
