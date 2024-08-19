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
  activeStep: number;

  appointmentError: { errorType: string; errorMsg: string };
  setAppointmentError: (x: { errorType: string; errorMsg: string }) => void;
}

const SelectPackage: React.FC<SelectVehicleType> = ({
  activeStep,

  appointmentError,
  setAppointmentError,
}) => {
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const [selectedDetailPackage, setSelectedDetailPackage] = useState<
    string | undefined
  >(
    userAppointment.selectedPackage
      ? userAppointment.selectedPackage
      : undefined,
  );

  return (
    <>
      {activeStep === 1 && appointmentError.errorType === "Select Package" ? (
        <>
          <Alert alertType="Error" alertMsg={appointmentError.errorMsg} />
        </>
      ) : null}
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
            <div key={detail.id} className="w-full">
              <Disclosure
                key={detail.id}
                as="div"
                className={
                  isSelected
                    ? "p-4 rounded-2xl bg-slate-50 w-full hover:bg-slate-100 transition duration-200  bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
                    : "p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 w-full hover:bg-slate-100 transition duration-200"
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
                  <ChevronDownIcon className="size-5 text-black dark:text-white group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-10 text-sm/5  bg-white dark:bg-slate-900 rounded-xl p-2 shadow-xl">
                  <div className="grid grid-cols-2 m-2">
                    <div className="flex">
                      <p className="text-2xl text-white font-bold ml-2 p-2 shadow-xl rounded-lg  whitespace-nowrap bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500  dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600">
                        ${price}
                      </p>
                    </div>

                    <div className="text-end">
                      <button
                        className={
                          isSelected
                            ? "text-white font-bold p-2 border shadow-xl rounded-xl mr-2  bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
                            : "text-black dark:text-white font-bold p-2 border dark:border-slate-700 shadow-xl dark:shadow-sm dark:shadow-teal-400 rounded-xl mr-2 bg-slate-100 dark:bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 transition duration-200"
                        }
                        onClick={() => {
                          const vehicleType = userAppointment.vehicleType;

                          // Check if detail.vehicleType and vehicleType are valid
                          const vehicleDetails =
                            vehicleType &&
                            detail.vehicleType &&
                            detail.vehicleType[vehicleType];

                          setUserAppointment((prevState: any) => ({
                            ...prevState,
                            selectedPackage: detail.packageName,
                            duration: vehicleDetails?.estimatedTime,
                          }));
                          setSelectedDetailPackage(detail.packageName);
                          setAppointmentError({ errorType: "", errorMsg: "" });
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {detail.services.interior?.map((service) => (
                      <div key={service} className="">
                        <div className="flex m-2">
                          <CheckIcon />
                          <p className="ml-2 font-bold text-black/80 dark:text-white">
                            {service}
                          </p>
                        </div>
                      </div>
                    ))}
                    {detail.services.exterior?.map((service) => (
                      <div key={service} className="">
                        <div className="flex m-2">
                          <CheckIcon />
                          <p className="ml-2 font-bold text-black/80 dark:text-white">
                            {service}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectPackage;
