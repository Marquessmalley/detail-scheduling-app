import sedan from "assets/images/sedan.png";
import suv from "assets/images/suv.png";

interface CarType {
  id: number;
  type: string;
  img: string;
}

export const carType: CarType[] = [
  {
    id: 0,
    type: "Sedan",
    img: sedan,
  },
  {
    id: 1,
    type: "Suv/2Row",
    img: suv,
  },
  {
    id: 2,
    type: "Suv/3Row",
    img: suv,
  },
];
