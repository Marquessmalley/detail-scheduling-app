import {
  FirebaseAvailabilities,
  FirebaseAppointments,
} from "constants/interfaces";

export const sortedAvailabilities = (data: FirebaseAvailabilities) => {
  const availabilities = Object.entries(data);

  // removes booked availability
  const availableBookings = availabilities.filter((item) => {
    return item[1].availability.isBooked === false;
  });

  // sorts by date
  availableBookings.sort((a, b) => {
    const dateA = new Date(
      `${a[1].availability.date} ${a[1].availability.startTime}`,
    );
    const dateB = new Date(
      `${b[1].availability.date} ${b[1].availability.startTime}`,
    );
    return dateA.getTime() - dateB.getTime();
  });

  return availableBookings;
};

export const sortedAppointments = (data: FirebaseAppointments) => {
  const appointments = Object.entries(data);

  appointments.sort((a, b) => {
    const dateA = new Date(
      `${a[1].appointment.date} ${a[1].appointment.startTime}`,
    );
    const dateB = new Date(
      `${b[1].appointment.date} ${b[1].appointment.startTime}`,
    );
    return dateA.getTime() - dateB.getTime();
  });

  return appointments;
};
