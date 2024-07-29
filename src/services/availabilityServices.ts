import { AdminAvailabilityType } from "constants/interfaces";
import { ref, set, push, get, update, remove } from "firebase/database";
import { database } from "firebaseConfig";

// ref: reeference a location in db
// push: create child nodes at a specified location, with unique ids

export const addAdminAvailability = async (
  availability: AdminAvailabilityType
): Promise<void> => {
  const dbLocation = push(ref(database, "/availability"));
  try {
    // set: used to dave data at a specific location
    await set(dbLocation, {
      availability,
    });
  } catch (err) {
    console.log(err);
  }
};

export const readAdminAvailability = async () => {
  try {
    const dbRef = ref(database, "/availability");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return snapshot.val();
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateAdminAvailability = async (
  availability: AdminAvailabilityType,
  key: string
) => {
  const dbRef = ref(database, `/availability/${key}/availability`);
  await update(dbRef, availability);

  try {
  } catch (err) {
    console.log(err);
  }
};
export const deleteAdminAvailability = async (key: string) => {
  const dbRef = ref(database, `/availability/${key}/availability`);
  await remove(dbRef);

  try {
  } catch (err) {
    console.log(err);
  }
};
