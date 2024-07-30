import { AdminAvailabilityType } from "constants/interfaces";

interface FirebaseAvailabilities {
  [key: string]: {
    availability: AdminAvailabilityType;
  };
}

export const sortedAvailabilities = (data: FirebaseAvailabilities) => {
  const availabilities = Object.entries(data);

  availabilities.sort((a, b) => {
    const dateA = new Date(
      `${a[1].availability.date} ${a[1].availability.startTime}`
    );
    const dateB = new Date(
      `${b[1].availability.date} ${b[1].availability.startTime}`
    );
    return dateA.getTime() - dateB.getTime();
  });

  return availabilities;
};
