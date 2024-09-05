import { useState, useEffect } from "react";
import {
  AdminAvailabilityType,
  Appointment,
  FirebaseAppointments,
  FirebaseAvailabilities,
} from "constants/interfaces";
import UpcomingDescription from "components/ui/upcomingDescription";
import AvailableDate from "components/ui/availableDate";
import { database } from "firebaseConfig";
import { ref, onValue, off, DataSnapshot } from "firebase/database";
import { SpinnerIcon } from "components/ui/icons";
import {
  sortedAvailabilities,
  sortedAppointments,
} from "utils/sortAvailabilities";
import { checkExpiredAvailabilities } from "utils/validAvailabilities";
import { checkExpiredAppointments } from "utils/validAppointments";

const Admin: React.FC = () => {
  const [availabilities, setAvailabilities] = useState<
    [string, { availability: AdminAvailabilityType }][] | null
  >(null);

  const [appointments, setAppointments] = useState<
    [string, { appointment: Appointment }][] | null
  >(null);

  const [loading, setLoading] = useState(true);

  const handleAvailabilitiesSnapshot = (snapshot: DataSnapshot) => {
    if (snapshot.exists()) {
      const availabilities: FirebaseAvailabilities = snapshot.val();

      const validAvailabilites = checkExpiredAvailabilities(availabilities);

      setAvailabilities(
        sortedAvailabilities(Object.fromEntries(validAvailabilites)),
      );

      setLoading(false);
    } else {
      setAvailabilities(null);
      setLoading(false);
    }
  };
  const handleAppointmentsSnapshot = (snapshot: DataSnapshot) => {
    if (snapshot.exists()) {
      const appointments: FirebaseAppointments = snapshot.val();

      const validAppointments = checkExpiredAppointments(appointments);

      setAppointments(
        sortedAppointments(Object.fromEntries(validAppointments)),
      );

      setLoading(false);
    } else {
      setAppointments(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const dbRef = ref(database, "/availability");
    const dbAppointmentsRef = ref(database, "/appointments");

    onValue(dbRef, handleAvailabilitiesSnapshot);

    onValue(dbAppointmentsRef, handleAppointmentsSnapshot);

    return () => {
      off(dbRef, "value", handleAvailabilitiesSnapshot);
      off(dbAppointmentsRef, "value", handleAppointmentsSnapshot);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 gap-y-10 sm:mx-auto sm:max-w-7xl">
        {/* AVAILABILITIES */}
        <div className="col-span-12 p-2 lg:col-span-6">
          <div className="">
            <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-slate-300">
              View your available openings
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-slate-400">
              Scheduled dates.
            </p>
          </div>

          <div className="">
            {availabilities && availabilities.length > 0 ? (
              availabilities.map((slot) => {
                return (
                  <div key={slot[0]}>
                    <AvailableDate
                      id={slot[0]}
                      availability={slot[1].availability}
                    />
                  </div>
                );
              })
            ) : (
              <div className="p-4 text-center">
                {loading ? (
                  <SpinnerIcon />
                ) : (
                  <p className="text-lg font-bold sm:text-4xl">
                    No Openings Scheduled
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* UPCOMING APPOINTMENTS */}
        <div className="col-span-12 p-2 lg:col-span-6">
          <div className="">
            <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-slate-300">
              Upcoming Appointments...
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-slate-400">
              Apointment details.
            </p>
          </div>
          <div className="">
            {appointments && appointments.length > 0 ? (
              appointments.map((appointment) => (
                <div key={appointment[0]}>
                  <UpcomingDescription
                    appointment={appointment[1].appointment}
                  />
                </div>
              ))
            ) : (
              <div className="flex h-full items-center justify-center p-4">
                {loading ? (
                  <SpinnerIcon />
                ) : (
                  <p className="text-lg font-bold sm:text-4xl">
                    No Appointments Booked
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
