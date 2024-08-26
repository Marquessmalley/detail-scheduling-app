import { AdminAvailabilityType, Appointment } from "constants/interfaces";
import { deleteAdminAvailability } from "services/availabilityServices";
import { deleteUserAppointment } from "services/appointmentServices";
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
  const currentDate = new Date();

  // remove expired availabilities
  const vailidAvailabilities = availabilities.filter((item) => {
    const date = item[1].availability.date;
    const time = item[1].availability.startTime;
    const x = new Date(`${date} ${time}`);
    return x > currentDate ? item : deleteAdminAvailability(item[0]);
  });

  // removes booked availability
  const availableBookings = vailidAvailabilities.filter((item) => {
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
  const currentDate = new Date();
  // remove expired appointments
  const vailidAppointments = appointments.filter((item) => {
    const date = item[1].appointment.date;
    const time = item[1].appointment.startTime;
    const x = new Date(`${date} ${time}`);
    return x > currentDate ? item : deleteUserAppointment(item[0]);
  });

  vailidAppointments.sort((a, b) => {
    const dateA = new Date(
      `${a[1].appointment.date} ${a[1].appointment.startTime}`,
    );
    const dateB = new Date(
      `${b[1].appointment.date} ${b[1].appointment.startTime}`,
    );
    return dateA.getTime() - dateB.getTime();
  });

  return vailidAppointments;
};
