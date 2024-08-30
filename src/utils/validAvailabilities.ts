import { FirebaseAvailabilities } from "constants/interfaces";
import { deleteAdminAvailability } from "services/availabilityServices";

export const checkExpiredAvailabilities = (
  availabilities: FirebaseAvailabilities,
) => {
  const currentDate = new Date();

  const valid = Object.entries(availabilities).filter(([key, value]) => {
    const { date, startTime } = value.availability;
    const availabilityDate = new Date(`${date} ${startTime}`);
    const isValid = availabilityDate > currentDate;

    if (!isValid) {
      deleteAdminAvailability(key);
    }

    return isValid;
  });

  return valid;
};
