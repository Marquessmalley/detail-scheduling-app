import { useState, useEffect } from "react";
import { AdminAvailabilityType } from "constants/interfaces";
import UpcomingDescription from "components/ui/upcomingDescription";
import AvailableDate from "components/ui/availableDate";
import { readAdminAvailability } from "services/availabilityServices";
import { upcomingAppointments } from "constants/appointments";

interface FirebaseAvailabilities {
  [key: string]: {
    availability: AdminAvailabilityType;
  };
}

const AdminPage = () => {
  const [availabilities, setAvailabilities] =
    useState<FirebaseAvailabilities | null>();

  const fetchAvailabilities = async () => {
    try {
      const slots = await readAdminAvailability();
      setAvailabilities(slots);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAvailabilities();
  }, []);

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
            {availabilities ? (
              Object.keys(availabilities).map((key) => {
                return (
                  <>
                    <AvailableDate
                      id={key}
                      availability={availabilities[key].availability}
                    />
                  </>
                );
              })
            ) : (
              <div className="text-center  p-4">
                <p className="text-4xl font-bold ">No Openings Scheduled</p>
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
          {upcomingAppointments.map((appointment) => (
            <UpcomingDescription appointment={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
