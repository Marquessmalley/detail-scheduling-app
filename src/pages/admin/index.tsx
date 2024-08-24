import { useState, useEffect } from "react";
import { AdminAvailabilityType, Appointment } from "constants/interfaces";
import UpcomingDescription from "components/ui/upcomingDescription";
import AvailableDate from "components/ui/availableDate";
import { database } from "firebaseConfig";
import { ref, onValue, off } from "firebase/database";
import { SpinnerIcon } from "components/ui/icons";
import {
  sortedAvailabilities,
  sortedAppointments,
} from "utils/sortAvailabilities";

const Admin: React.FC = () => {
  const [availabilities, setAvailabilities] = useState<
    [string, { availability: AdminAvailabilityType }][] | null
  >(null);

  const [appointments, setAppointments] = useState<
    [string, { appointment: Appointment }][] | null
  >(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(database, "/availability");
    const dbAppointmentsRef = ref(database, "/appointments");
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const sortedAva = sortedAvailabilities(snapshot.val());
        setAvailabilities(sortedAva);
        setLoading(false);
      } else {
        setAvailabilities(null);
        setLoading(false);
      }
    });
    onValue(dbAppointmentsRef, (snapshot) => {
      if (snapshot.exists()) {
        const sortedApt = sortedAppointments(snapshot.val());
        setAppointments(sortedApt);
        setLoading(false);
      } else {
        setAppointments(null);
        setLoading(false);
      }
    });

    return () => {
      off(dbRef, "value", (snapshot) => {
        if (snapshot.exists()) {
          setAvailabilities(snapshot.val());
          setLoading(false);
        } else {
          setAvailabilities(null);
          setLoading(false);
        }
      });
      off(dbAppointmentsRef, "value", (snapshot) => {
        if (snapshot.exists()) {
          setAppointments(snapshot.val());
          setLoading(false);
        } else {
          // setAppointments(null);
          setLoading(false);
        }
      });
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:mx-auto sm:max-w-7xl lg:grid lg:grid-cols-12">
        {/* AVAILABILITIES */}
        <div className="col-span-6 p-8">
          <div className="px-4 sm:px-0 lg:mx-auto lg:max-w-xl">
            <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-slate-300">
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
        <div className="col-span-6 p-8">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-slate-300">
              Upcoming Appointments...
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-slate-400">
              Apointment details.
            </p>
          </div>
          <div className="rounded-lg border dark:border-slate-700">
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
