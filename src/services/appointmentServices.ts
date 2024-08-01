import { AdminAvailabilityType, Appointment } from "constants/interfaces";
import { ref, set, push, update } from "firebase/database";
import { database } from "firebaseConfig";

export const addUserAppointment = async (
  userAppointment: Appointment,
  adminAvailability: [string, { availability: AdminAvailabilityType }] | null
): Promise<void> => {
  const dbLocation = push(ref(database, "/appointments"));
  if (!adminAvailability) {
    console.error("No availability selected or invalid data");
    return;
  }

  const key = adminAvailability && adminAvailability[0];
  const availability = adminAvailability && adminAvailability[1].availability;

  const dbAdminLocation = ref(database, `/availability/${key}/availability`);

  const newAvailability = { ...availability, isBooked: true };

  const appointment = { ...userAppointment, status: "scheduled" };

  try {
    await set(dbLocation, {
      appointment,
    });
    await update(dbAdminLocation, newAvailability);
  } catch (err) {
    console.log(err);
  }
};
