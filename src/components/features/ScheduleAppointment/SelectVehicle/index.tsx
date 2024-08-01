import { useState } from "react";
import { carType } from "constants/carType";
import { useUserAppointmentContext } from "context/AppointmentContext";
import Alert from "components/ui/alert";

interface SelectVehicleType {
  aptErr?: boolean;
  aptErrMsg?: string;
  setAptErr: (x: boolean) => void;
}

const SelectVehicle: React.FC<SelectVehicleType> = ({
  aptErr,
  aptErrMsg,
  setAptErr,
}) => {
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();
  const [selectedCar, setSelectedCar] = useState<string | undefined>(
    userAppointment.vehicleType ? userAppointment.vehicleType : undefined
  );

  return (
    <>
      {aptErr && (
        <>
          <Alert alertType="Error" alertMsg={aptErrMsg} />
        </>
      )}
      <div className=" grid xs:grid-cols-2 sm:grid-cols-3 gap-y-2 justify-items-center p-2">
        {carType.map((car) => {
          const isSelected = car.type === selectedCar;
          let carType;
          switch (car.type) {
            case "sedan":
              carType = "Sedan";
              break;
            case "suvTwoRows":
              carType = "SUV - 2 door";
              break;
            case "suvThreeRows":
              carType = "SUV - 3 door";
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
                    ? "p-4 border border-slate-300 rounded-2xl shadow h-22 w-28 sm:h-32 sm:w-32 flex flex-col items-center justify-center cursor-pointer  bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
                    : "p-4 border border-slate-300 rounded-2xl shadow h-22 w-28 sm:h-32 sm:w-32  flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition duration-200"
                }
                onClick={() => {
                  setUserAppointment((prevState: any) => ({
                    ...prevState,
                    vehicleType: car.type,
                  }));
                  setSelectedCar(car.type);
                  setAptErr(false);
                }}
              >
                <img
                  src={isSelected ? car.img[1] : car.img[0]}
                  alt="car_type"
                />
                <p
                  className={
                    isSelected
                      ? "text-sm font-semibold text-white"
                      : "text-sm font-semibold"
                  }
                >
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
