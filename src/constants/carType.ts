import { CarType } from "constants/interfaces";
import whiteMalibu from "assets/images/white-malibu.png";
import whiteBlazer from "assets/images/white-blazer.png";
import whiteTahoe from "assets/images/white-tahoe.png";
import whiteTruck from "assets/images/white-truck.png";
import blackTruck from "assets/images/black-truck.png";
import blackMalibu from "assets/images/black-malibu.png";
import blackTahoe from "assets/images/black-tahoe.png";
import blackBlazer from "assets/images/black-blazer.png";

export const carType: CarType[] = [
  {
    id: 0,
    type: "sedan",
    img: [blackMalibu, whiteMalibu],
  },
  {
    id: 1,
    type: "suvTwoRows",
    img: [blackBlazer, whiteBlazer],
  },
  {
    id: 2,
    type: "truck",
    img: [blackTruck, whiteTruck],
  },
  {
    id: 3,
    type: "suvThreeRows",
    img: [blackTahoe, whiteTahoe],
  },
];
