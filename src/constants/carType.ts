import sedan from "assets/images/sedan.png";
import whiteSedan from "assets/images/white-sedan.png";
import suv from "assets/images/suv.png";
import whiteSuv from "assets/images/white-suv.png";
import whiteTruck from "assets/images/white-truck.png";
import blackTruck from "assets/images/black-truck.png";
import { CarType } from "constants/interfaces";

export const carType: CarType[] = [
  {
    id: 0,
    type: "Sedan",
    img: [sedan, whiteSedan],
  },
  {
    id: 1,
    type: "Suv/2Row",
    img: [suv, whiteSuv],
  },
  {
    id: 2,
    type: "Suv/3Row",
    img: [blackTruck, whiteTruck],
  },
];
