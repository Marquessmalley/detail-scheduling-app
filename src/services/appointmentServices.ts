import { AdminAvailabilityType, Appointment } from "constants/interfaces";
import { ref, set, push, update, remove } from "firebase/database";
import { database } from "firebaseConfig";

export const addUserAppointment = async (
  userAppointment: Appointment,
  adminAvailability: [string, { availability: AdminAvailabilityType }] | null,
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

export const updateUserAppointment = async (
  appointment: Appointment,
  key: string,
) => {
  const dbRef = ref(database, `/appointments/${key}/appointment`);

  try {
    await update(dbRef, appointment);
  } catch (err) {
    console.log(err);
  }
};
export const deleteUserAppointment = async (key: string) => {
  const dbRef = ref(database, `/appointments/${key}/appointment`);

  try {
    await remove(dbRef);
  } catch (err) {
    console.log(err);
  }
};
