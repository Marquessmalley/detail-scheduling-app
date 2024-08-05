import { useState } from "react";
import { detailMenu } from "constants/detail-menu";
import { useUserAppointmentContext } from "context/AppointmentContext";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Alert from "components/ui/alert";
import { CheckIcon } from "components/ui/icons";
import { VehicleType } from "constants/interfaces";

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
      <div className="grid grid-cols-1 gap-y-5 gap-x-5 p-6 justify-items-center">
        {detailMenu.map((detail) => {
          const isSelected = detail.packageName === selectedDetailPackage;

          let price;
          let carType: keyof VehicleType | "" = "";

          switch (userAppointment.vehicleType) {
            case "sedan":
              carType = "sedan";
              break;
            case "suvTwoRows":
              carType = "suvTwoRows";
              break;
            case "suvThreeRows":
              carType = "suvThreeRows";
              break;

            default:
              break;
          }

          if (carType && detail.vehicleType && detail.vehicleType[carType]) {
            price = detail.vehicleType[carType].price;
          }

          return (
            <Disclosure
              key={detail.id}
              as="div"
              className={
                isSelected
                  ? "p-4 rounded-2xl bg-slate-50 w-full hover:bg-slate-100 transition duration-200  bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 "
                  : "p-4 rounded-2xl bg-slate-50 w-full hover:bg-slate-100 transition duration-200"
              }
              defaultOpen={false}
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <p
                  className={
                    isSelected
                      ? "text-lg font-semibold text-center text-white"
                      : "text-lg font-semibold text-center"
                  }
                >
                  {detail.packageName}
                </p>
                <ChevronDownIcon className="size-5 text-black group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-10 text-sm/5 text-black/80  bg-white rounded-xl p-2 shadow-xl">
                <div className="grid grid-cols-2 m-2">
                  <div className="flex">
                    <p className="text-2xl text-white font-bold ml-2 p-2 shadow-xl rounded-lg  whitespace-nowrap bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500">
                      ${price}
                    </p>
                  </div>

                  <div className="text-end">
                    <button
                      className={
                        isSelected
                          ? "text-white font-bold p-2 border shadow-xl rounded-xl mr-2  bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 "
                          : "text-black font-bold p-2 border shadow-xl rounded-xl mr-2 bg-slate-100 hover:bg-slate-200 transition duration-200"
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
                      Select
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {detail.services.interior?.map((service) => (
                    <div className="">
                      <div className="flex m-2">
                        <CheckIcon />
                        <p className="ml-2 font-bold">{service}</p>
                      </div>
                    </div>
                  ))}
                  {detail.services.exterior?.map((service) => (
                    <div className="">
                      <div className="flex m-2">
                        <CheckIcon />
                        <p className="ml-2 font-bold">{service}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>
          );
        })}
      </div>
    </>
  );
};

export default SelectPackage;
