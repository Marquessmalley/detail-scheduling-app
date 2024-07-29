import { useState } from "react";
import { carType } from "constants/carType";
import { detailMenu } from "constants/detail-menu";
import { useUserAppointmentContext } from "context/AppointmentContext";

interface ScheduleAppointmentProps {
  activeStep: number;
}

const ScheduleAppointment: React.FC<ScheduleAppointmentProps> = ({
  activeStep,
}) => {
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const [selectedCar, setSelectedCar] = useState<string>(
    userAppointment.vehicleType
  );
  const [selectedDetailPackage, setSelectedDetailPackage] = useState<string>(
    userAppointment.selectedPackage
  );

  return (
    <>
      {activeStep === 0 && (
        <div className="flex-grow flex justify-around items-center flex-wrap">
          {carType.map((car) => {
            const isSelected = car.type === selectedCar;
            return (
              <div
                key={car.id}
                className={
                  isSelected
                    ? "p-4 border border-slate-300 rounded-2xl shadow h-32 w-32 flex flex-col items-center justify-center cursor-pointer  bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
                    : "p-4 border border-slate-300 rounded-2xl shadow h-32 w-32 flex flex-col items-center justify-center cursor-pointer "
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
        <div className="flex-grow flex flex-col justify-around items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-5">
            {detailMenu.map((detail) => {
              const isSelected = detail.packageName === selectedDetailPackage;

              return (
                <div
                  key={detail.id}
                  className={
                    isSelected
                      ? "p-4 border border-slate-300 rounded-2xl shadow h-32 w-32 flex items-center justify-center cursor-pointer bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
                      : "p-4 border border-slate-300 rounded-2xl shadow h-32 w-32 flex items-center justify-center cursor-pointer"
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
        </div>
      )}
    </>
  );
};

export default ScheduleAppointment;
