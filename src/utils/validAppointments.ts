import { FirebaseAppointments } from "constants/interfaces";
import { deleteUserAppointment } from "services/appointmentServices";

export const checkExpiredAppointments = (
  appointments: FirebaseAppointments,
) => {
  const currentDate = new Date();

  const valid = Object.entries(appointments).filter(([key, value]) => {
    const { date, startTime } = value.appointment;
    const appointmentDate = new Date(`${date} ${startTime}`);
    const isValid = appointmentDate > currentDate;

    if (!isValid) {
      deleteUserAppointment(key);
    }

    return isValid;
  });

  return valid;
};
