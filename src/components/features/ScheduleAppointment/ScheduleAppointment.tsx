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
  aptErr?: boolean;
  aptErrMsg?: string;
  setAptErr: (x: boolean) => void;
}

const ScheduleAppointment: React.FC<ScheduleAppointmentProps> = ({
  activeStep,
  availableDates,
  aptErrMsg,
  aptErr,
  setAptErr,
}) => {
  const [updateAvailability, setUpdateAvailability] = useState<
    [string, { availability: AdminAvailabilityType }] | null
  >(null);

  return (
    <>
      {activeStep === 0 && (
        <SelectVehicle
          aptErr={aptErr}
          aptErrMsg={aptErrMsg}
          setAptErr={setAptErr}
        />
      )}
      {activeStep === 1 && (
        <SelectPackage
          aptErr={aptErr}
          aptErrMsg={aptErrMsg}
          setAptErr={setAptErr}
        />
      )}
      {activeStep === 2 && (
        <SelectDate
          availableDates={availableDates}
          aptErr={aptErr}
          aptErrMsg={aptErrMsg}
          setAptErr={setAptErr}
          setUpdateAvailability={setUpdateAvailability}
        />
      )}
      {activeStep === 3 && (
        <ContactForm
          aptErr={aptErr}
          aptErrMsg={aptErrMsg}
          setAptErr={setAptErr}
        />
      )}
      {activeStep === 4 && (
        <AppointmentSummary updateAvailability={updateAvailability} />
      )}
    </>
  );
};

export default ScheduleAppointment;
