import { detailMenu } from "constants/detail-menu";
import { Appointment } from "constants/interfaces";

export const calculatePrice = (userAppointment: Appointment) => {
  let price = 0;
  const filteredPackage = detailMenu.filter(
    (item) => item.packageName === userAppointment.selectedPackage
  );
  if (filteredPackage[0].vehicleType) {
    const carTypeArr = Object.keys(filteredPackage[0].vehicleType);

    for (let i = 0; i < carTypeArr.length; i++) {
      if (carTypeArr[i] === userAppointment.vehicleType) {
        const y = carTypeArr[i];

        switch (y) {
          case "sedan":
            price = filteredPackage[0].vehicleType["sedan"].price;
            break;
          case "suvTwoRows":
            price = filteredPackage[0].vehicleType["suvTwoRows"].price;
            break;
          case "suvThreeRows":
            price = filteredPackage[0].vehicleType["suvThreeRows"].price;
            break;

          default:
            break;
        }
      }
    }
  }

  return price;
};
