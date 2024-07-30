import { useState } from "react";
import { carType } from "constants/carType";
import { detailMenu } from "constants/detail-menu";
import { useUserAppointmentContext } from "context/AppointmentContext";
import { AdminAvailabilityType } from "constants/interfaces";

interface ScheduleAppointmentProps {
  activeStep: number;
  availableDates: [string, { availability: AdminAvailabilityType }][] | null;
}

const ScheduleAppointment: React.FC<ScheduleAppointmentProps> = ({
  activeStep,
  availableDates,
}) => {
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const [selectedCar, setSelectedCar] = useState<string>(
    userAppointment.vehicleType
  );
  const [selectedDetailPackage, setSelectedDetailPackage] = useState<string>(
    userAppointment.selectedPackage
  );

  const [selectedDate, setSelectedDate] = useState<string>(
    userAppointment.startTime
  );

  const handleContactChange = (e: any) => {
    setUserAppointment((prevState: any) => ({
      ...prevState,
      contactInfo: {
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <>
      {activeStep === 0 && (
        <div className=" grid xs:grid-cols-2 sm:grid-cols-3 gap-y-2 justify-items-center p-2">
          {carType.map((car) => {
            const isSelected = car.type === selectedCar;
            return (
              <div
                key={car.id}
                className={
                  isSelected
                    ? "p-4 border border-slate-300 rounded-2xl shadow h-22 w-28 sm:h-32 sm:w-32 flex flex-col items-center justify-center cursor-pointer  bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
                    : "p-4 border border-slate-300 rounded-2xl shadow h-22 w-28 sm:h-32 sm:w-32  flex flex-col items-center justify-center cursor-pointer "
                }
                onClick={() => {
                  setUserAppointment((prevState: any) => ({
                    ...prevState,
                    vehicleType: car.type,
                  }));
                  setSelectedCar(car.type);
                }}
              >
                <img
                  src={isSelected ? car.img[1] : car.img[0]}
                  alt="car_type"
                />
                <p
                  className={
                    isSelected
                      ? "text-lg font-semibold text-white"
                      : "text-lg font-semibold"
                  }
                >
                  {car.type}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {activeStep === 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-5 p-6 justify-items-center">
          {detailMenu.map((detail) => {
            const isSelected = detail.packageName === selectedDetailPackage;
            return (
              <div
                key={detail.id}
                className={
                  isSelected
                    ? "p-4 border border-slate-300 rounded-2xl shadow h-32 w-32 sm:h-32 sm:w-40 flex items-center justify-center cursor-pointer bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
                    : "p-4 border border-slate-300 rounded-2xl shadow h-32 w-32 sm:h-32 sm:w-40 flex items-center justify-center cursor-pointer"
                }
                onClick={() => {
                  setUserAppointment((prevState: any) => ({
                    ...prevState,
                    selectedDetailPackage: detail.packageName,
                  }));
                  setSelectedDetailPackage(detail.packageName);
                }}
              >
                <p
                  className={
                    isSelected
                      ? "text-lg font-semibold text-center text-white"
                      : "text-lg font-semibold text-center"
                  }
                >
                  {detail.packageName}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {activeStep === 2 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {availableDates &&
            availableDates.map((slot) => {
              const isSelected = slot[1].availability.date === selectedDate;
              return (
                <div
                  key={slot[0]}
                  className={
                    isSelected
                      ? "p-4 border border-slate-300 rounded-2xl shadow h-24 sm:h-32 w-full flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
                      : "p-4 border border-slate-300 rounded-2xl shadow h-24 sm:h-32 w-full flex flex-col items-center justify-center cursor-pointer"
                  }
                  onClick={() => {
                    setUserAppointment((prevState: any) => ({
                      ...prevState,
                      date: slot[1].availability.date,
                      startTime: slot[1].availability.startTime,
                    }));
                    setSelectedDate(slot[1].availability.date);
                  }}
                >
                  <p
                    className={
                      isSelected
                        ? "text-sm  sm:text-lg font-semibold text-white"
                        : "text-sm  sm:text-lg font-semibold"
                    }
                  >
                    {slot[1].availability.date}
                  </p>
                  <p className={isSelected ? "text-sm text-white" : "text-sm"}>
                    {slot[1].availability.startTime}
                  </p>
                </div>
              );
            })}
        </div>
      )}
      {activeStep === 3 && (
        <div>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2 p-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400 focus:border-teal-500 block w-full p-2.5 "
                  placeholder="John"
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite"
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Address"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  onChange={handleContactChange}
                  required
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ScheduleAppointment;
