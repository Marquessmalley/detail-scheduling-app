import { useState } from "react";
import { carType } from "constants/carType";
import { useUserAppointmentContext } from "context/AppointmentContext";
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
  const [selectedCar, setSelectedCar] = useState<string | undefined>(
    userAppointment.vehicleType ? userAppointment.vehicleType : undefined
  );

  return (
    <>
      {activeStep === 0 && appointmentError.errorType === "Select Vehicle" && (
        <>
          <Alert alertType="Error" alertMsg={appointmentError.errorMsg} />
        </>
      )}
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-y-2 justify-items-center p-2 my-5">
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
            <>
              <div
                key={car.id}
                className={
                  isSelected
                    ? "p-px border-3 border-teal-300 rounded-2xl shadow-2xl h-22 w-28 sm:h-32 sm:w-32 flex flex-col items-center justify-center cursor-pointer bg-slate-100 hover:bg-slate-50 transition duration-200"
                    : "p-px border border-slate-300 rounded-2xl shadow h-22 w-28 sm:h-32 sm:w-32  flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition duration-200"
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
                <img src={car.img[0]} alt="car_type" />
                <p className={"text-sm font-semibold whitespace-nowrap"}>
                  {carType}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SelectVehicle;
