import { useState, useEffect } from "react";
import { AdminAvailabilityType, Appointment } from "constants/interfaces";
import UpcomingDescription from "components/ui/upcomingDescription";
import AvailableDate from "components/ui/availableDate";
import { database } from "firebaseConfig";
import { ref, onValue, off } from "firebase/database";
import { SpinnerIcon } from "components/ui/icons";
import { sortedAvailabilities } from "utils/sortAvailabilities";

const AdminPage = () => {
  const [availabilities, setAvailabilities] = useState<
    [string, { availability: AdminAvailabilityType }][] | null
  >(null);

  const [appointments, setAppointments] = useState<Record<
    string,
    { appointment: Appointment }
  > | null>(null);

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
        setAppointments(snapshot.val());
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
          setAppointments(null);
          setLoading(false);
        }
      });
    };
  }, []);

  console.log(appointments);

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 lg:grid lg:grid-cols-2">
        <div>
          <div className=" lg:max-w-xl lg:mx-auto px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              View your available openings
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Scheduled dates.
            </p>
          </div>
          <div>
            {availabilities && availabilities.length > 0 ? (
              availabilities.map((slot) => {
                return (
                  <>
                    <AvailableDate
                      id={slot[0]}
                      availability={slot[1].availability}
                    />
                  </>
                );
              })
            ) : (
              <div className="text-center  p-4">
                {loading ? (
                  <SpinnerIcon />
                ) : (
                  <p className="text-4xl font-bold ">No Openings Scheduled</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="">
          <div className=" lg:max-w-xl lg:mx-auto px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Upcoming Appointments...
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Apointment details.
            </p>
          </div>
          {appointments ? (
            Object.keys(appointments).map((x: string) => (
              <UpcomingDescription appointment={appointments[x].appointment} />
            ))
          ) : (
            <div className="text-center  p-4">
              {loading ? (
                <SpinnerIcon />
              ) : (
                <p className="text-4xl font-bold ">No Appointments Booked</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
