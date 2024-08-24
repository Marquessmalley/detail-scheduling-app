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
      <div className="grid grid-cols-1 justify-items-center gap-x-5 gap-y-5 p-6">
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
            case "truck":
              carType = "truck";
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
                    ? "w-full rounded-2xl bg-slate-50 bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 p-4 transition duration-200 hover:bg-slate-100 dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
                    : "w-full rounded-2xl bg-slate-50 p-4 transition duration-200 hover:bg-slate-100 dark:bg-slate-800"
                }
                defaultOpen={false}
              >
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <p
                    className={
                      isSelected
                        ? "text-center text-lg font-semibold text-white"
                        : "text-center text-lg font-semibold"
                    }
                  >
                    {detail.packageName}
                  </p>
                  <ChevronDownIcon className="size-5 text-black group-data-[open]:rotate-180 dark:text-white" />
                </DisclosureButton>
                <DisclosurePanel className="mt-10 rounded-xl bg-white p-2 text-sm/5 shadow-xl dark:bg-slate-900">
                  <div className="m-2 grid grid-cols-2">
                    <div className="flex">
                      <p className="ml-2 whitespace-nowrap rounded-lg bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 p-2 text-2xl font-bold text-white shadow-xl dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600">
                        ${price}
                      </p>
                    </div>

                    <div className="text-end">
                      <button
                        className={
                          isSelected
                            ? "mr-2 rounded-xl border bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 p-2 font-bold text-white shadow-xl dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
                            : "mr-2 rounded-xl border bg-slate-100 p-2 font-bold text-black shadow-xl transition duration-200 hover:bg-slate-200 dark:border-slate-700 dark:bg-transparent dark:text-white dark:shadow-sm dark:shadow-teal-400 dark:hover:bg-slate-800"
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
                        <div className="m-2 flex">
                          <CheckIcon />
                          <p className="ml-2 font-bold text-black/80 dark:text-white">
                            {service}
                          </p>
                        </div>
                      </div>
                    ))}
                    {detail.services.exterior?.map((service) => (
                      <div key={service} className="">
                        <div className="m-2 flex">
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
