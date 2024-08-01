import { useState } from "react";
import { detailMenu } from "constants/detail-menu";
import { useUserAppointmentContext } from "context/AppointmentContext";
import Alert from "components/ui/alert";

interface SelectVehicleType {
  aptErr?: boolean;
  aptErrMsg?: string;
  setAptErr: (x: boolean) => void;
}

const SelectPackage: React.FC<SelectVehicleType> = ({
  aptErr,
  aptErrMsg,
  setAptErr,
}) => {
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const [selectedDetailPackage, setSelectedDetailPackage] = useState<
    string | undefined
  >(
    userAppointment.selectedPackage
      ? userAppointment.selectedPackage
      : undefined
  );
  return (
    <>
      {aptErr && (
        <>
          <Alert alertType="Error" alertMsg={aptErrMsg} />
        </>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-5 p-6 justify-items-center">
        {detailMenu.map((detail) => {
          const isSelected = detail.packageName === selectedDetailPackage;
          return (
            <div
              key={detail.id}
              className={
                isSelected
                  ? "p-4 border border-slate-300 rounded-2xl shadow h-32 w-32 sm:h-32 sm:w-40 flex items-center justify-center cursor-pointer bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 "
                  : "p-4 border border-slate-300 rounded-2xl shadow h-32 w-32 sm:h-32 sm:w-40 flex items-center justify-center cursor-pointer hover:bg-slate-50 transition duration-200"
              }
              onClick={() => {
                setUserAppointment((prevState: any) => ({
                  ...prevState,
                  selectedPackage: detail.packageName,
                }));
                setSelectedDetailPackage(detail.packageName);
                setAptErr(false);
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
    </>
  );
};

export default SelectPackage;
