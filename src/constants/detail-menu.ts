import { DetailPackage } from "constants/interfaces";

export const detailMenu: DetailPackage[] = [
  {
    id: 0,
    packageName: "Bronze Package",
    startingPrice: "$80",
    estimatedTime: "2h",
    services: {
      interior: [
        "Interior Vaccum",
        "Dashboard + Cup Holders + Vents",
        "Windows In & Out",
        "Thorough Wipedown Of All Cracks & Crevices",
      ],
      exterior: [
        "Foam Bath/ Hand Wash",
        "Hand Dry",
        "Clean & Shine Rims",
        "Tire Scrub & Shine",
        "Door Jams & Trunk Jams",
        "Spray Wax",
      ],
    },
    vehicleType: {
      sedan: {
        price: 80,
        estimatedTime: "1h 20m",
      },
      suvTwoRows: {
        price: 100,
        estimatedTime: "1h 45m",
      },
      suvThreeRows: {
        price: 110,
        estimatedTime: "1h 50m",
      },
    },
  },
  {
    id: 1,
    packageName: "Gold Package",
    startingPrice: "$250",
    estimatedTime: "4h 30m",
    services: {
      interior: [
        "Interior Vaccum",
        "Deep Cleanse Between Cracks & Crevices",
        "Leather & Vinyl Cleaning",
        "Leather Conditioning",
        "Deep Carpet & Seat Shampoo",
        "Mirror & Window Cleaning",
        "Odor Elimination",
        "Air Vent Steamed & Cleaned",
      ],
      exterior: [
        "Foam Bath/ Hand Wash",
        "Hand Dry",
        "Clay Bar & Paint Decontamination",
        "Tire Scrub & Shine",
        "Rims Clean & Shine",
        "Windows",
        "Wax/Sealant",
        "Trim Restore",
      ],
    },
    vehicleType: {
      sedan: {
        price: 250,
        estimatedTime: "4h",
      },
      suvTwoRows: {
        price: 280,
        estimatedTime: "4h 30m",
      },
      suvThreeRows: {
        price: 300,
        estimatedTime: "4h 30m",
      },
    },
  },
  {
    id: 2,
    packageName: "Silver Package",
    startingPrice: "$175",
    estimatedTime: "4h",
    services: {
      interior: [
        "Interior Vaccum",
        "Deep Cleanse Between Cracks & Crevices",
        "Leather & Vinyl Cleaning",
        "Leather Conditioning",
        "Deep Carpet & Seat Shampoo",
        "Mirror & Window Cleaning",
        "Odor Elimination",
        "Air Vent Steamed & Cleaned",
      ],
      exterior: [
        "Foam Bath/ Hand Wash",
        "Hand Dry",
        "Clay Bar & Paint Decontamination",
        "Tire Scrub & Shine",
        "Rims Clean & Shine",
        "Windows",
        "Wax/Sealant",
      ],
    },
    vehicleType: {
      sedan: {
        price: 175,
        estimatedTime: "3h 20m",
      },
      suvTwoRows: {
        price: 185,
        estimatedTime: "3h 40m",
      },
      suvThreeRows: {
        price: 205,
        estimatedTime: "1h 40m",
      },
    },
  },

  {
    id: 3,
    packageName: "Min Interior Detail",
    startingPrice: "$60/service",
    estimatedTime: "1h",
    services: {
      interior: [
        "Interior Vaccum",
        "Dashboard + Center Console",
        "Door Panels",
        "Leather Clean & Condition",
        "Light Interior Dressing",
        "Steam Clean Panels & Trims",
      ],
    },
  },
  {
    id: 4,
    packageName: "Full Interior Detail",
    startingPrice: "$150/service",
    estimatedTime: "3h",
    services: {
      interior: [
        "Interior Vaccum",
        "Dashboard + Center Console",
        "Door Panels",
        "Leather Clean & Condition",
        "Light Interior Dressing",
        "Steam Clean Panels & Trims",
        "Headliner Cleaning",
        "Shampoo Seats & Carpet",
      ],
    },
    vehicleType: {
      sedan: {
        price: 150,
        estimatedTime: "3h",
      },
      suvTwoRows: {
        price: 160,
        estimatedTime: "3h",
      },
      suvThreeRows: {
        price: 180,
        estimatedTime: "3h",
      },
    },
  },
  {
    id: 5,
    packageName: "Premium Wash & Wax",
    startingPrice: "$100/service",
    estimatedTime: "1h 30m",
    services: {
      exterior: [
        "Foam Bath/ Hand Wash",
        "Clay Bar",
        "Paint Decontamination",
        "Tire Shine",
        "Wax/Sealant Application",
        "Windows",
      ],
    },
    vehicleType: {
      sedan: {
        price: 100,
        estimatedTime: "1h 30m",
      },
      suvTwoRows: {
        price: 120,
        estimatedTime: "1h 30m",
      },
      suvThreeRows: {
        price: 140,
        estimatedTime: "1h 30m",
      },
    },
  },
];
