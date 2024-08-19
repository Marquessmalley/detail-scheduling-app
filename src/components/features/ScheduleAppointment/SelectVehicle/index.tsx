import { useState } from "react";
import { useUserAppointmentContext } from "context/AppointmentContext";
import { useDarkMode } from "context/DarkModeContext";
import { carType } from "constants/carType";
import Alert from "components/ui/alert";

interface SelectVehicleType {
  activeStep: number;

  appointmentError: { errorType: string; errorMsg: string };
  setAppointmentError: (x: { errorType: string; errorMsg: string }) => void;
}

const SelectVehicle: React.FC<SelectVehicleType> = ({
  activeStep,
  appointmentError,
  setAppointmentError,
}) => {
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();
  const { isDarkMode } = useDarkMode();
  const [selectedCar, setSelectedCar] = useState<string | undefined>(
    userAppointment.vehicleType ? userAppointment.vehicleType : undefined,
  );

  return (
    <>
      {activeStep === 0 && appointmentError.errorType === "Select Vehicle" && (
        <>
          <Alert alertType="Error" alertMsg={appointmentError.errorMsg} />
        </>
      )}
      <div className="my-5 grid grid-cols-2 justify-items-center gap-y-2 p-2 sm:grid-cols-3">
        {carType.map((car) => {
          const isSelected = car.type === selectedCar;
          let carType;
          switch (car.type) {
            case "sedan":
              carType = "Sedan";
              break;
            case "suvTwoRows":
              carType = "SUV(2 Rows)";
              break;
            case "suvThreeRows":
              carType = "SUV(3 Rows)";
              break;

            default:
              break;
          }
          return (
            <div key={car.id}>
              <div
                className={
                  isSelected
                    ? "h-22 flex w-28 cursor-pointer flex-col items-center justify-center rounded-2xl border-3 border-teal-300 bg-slate-200 p-px transition duration-200 dark:bg-slate-700 sm:h-32 sm:w-32"
                    : "h-22 flex w-28 cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-300 p-px transition duration-200 hover:bg-slate-50 dark:hover:bg-slate-700 sm:h-32 sm:w-32"
                }
                onClick={() => {
                  setUserAppointment((prevState: any) => ({
                    ...prevState,
                    vehicleType: car.type,
                  }));
                  setSelectedCar(car.type);

                  setAppointmentError({ errorType: "", errorMsg: "" });
                }}
              >
                <img
                  src={isDarkMode ? car.img[1] : car.img[0]}
                  alt="car_type"
                />
                <p className={"whitespace-nowrap text-sm font-semibold"}>
                  {carType}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectVehicle;
