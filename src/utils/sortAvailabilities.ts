import { AdminAvailabilityType, Appointment } from "constants/interfaces";

interface FirebaseAvailabilities {
  [key: string]: {
    availability: AdminAvailabilityType;
  };
}
interface FirebaseAppointments {
  [key: string]: {
    appointment: Appointment;
  };
}

export const sortedAvailabilities = (data: FirebaseAvailabilities) => {
  const availabilities = Object.entries(data);

  const filterBookings = availabilities.filter(
    (item) => item[1].availability.isBooked === false
  );

  filterBookings.sort((a, b) => {
    const dateA = new Date(
      `${a[1].availability.date} ${a[1].availability.startTime}`
    );
    const dateB = new Date(
      `${b[1].availability.date} ${b[1].availability.startTime}`
    );
    return dateA.getTime() - dateB.getTime();
  });

  return filterBookings;
};

export const sortedAppointments = (data: FirebaseAppointments) => {
  const appointment = Object.entries(data);

  appointment.sort((a, b) => {
    const dateA = new Date(
      `${a[1].appointment.date} ${a[1].appointment.startTime}`
    );
    const dateB = new Date(
      `${b[1].appointment.date} ${b[1].appointment.startTime}`
    );
    return dateA.getTime() - dateB.getTime();
  });

  return appointment;
};
