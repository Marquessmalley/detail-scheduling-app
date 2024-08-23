import BookingStepper from "components/ui/bookingStepper";
import { AdminAvailabilityType } from "constants/interfaces";
import { onValue, ref, off } from "firebase/database";
import { database } from "firebaseConfig";
import { useEffect, useState } from "react";
import { sortedAvailabilities } from "utils/sortAvailabilities";

const Booking: React.FC = () => {
  const [availableDates, setAvailableDates] = useState<
    [string, { availability: AdminAvailabilityType }][] | null
  >(null);

  useEffect(() => {
    const dbRef = ref(database, "/availability");

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const sortedData = sortedAvailabilities(snapshot.val());
        setAvailableDates(sortedData);
      } else {
        console.log("not found");
        setAvailableDates(null);
      }
    });
    off(dbRef, "value", (snapshot) => {
      if (snapshot.exists()) {
        setAvailableDates(snapshot.val());
      } else {
        setAvailableDates(null);
      }
    });
  }, []);

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center justify-center pb-4 sm:container">
      <div className="my-10 w-full max-w-3xl">
        <span className="text-4xl font-bold text-gray-800 dark:bg-gradient-to-r dark:from-teal-400 dark:to-pink-400 dark:bg-clip-text dark:text-transparent">
          Set Appointment
        </span>
      </div>
      <div className="mx-auto w-full max-w-5xl rounded-2xl border shadow-2xl dark:border-teal-600 dark:shadow-lg dark:shadow-slate-700">
        <BookingStepper availableDates={availableDates} />
      </div>
    </div>
  );
};

export default Booking;
