import { DetailPackage } from "constants/interfaces";

export const detailMenu: DetailPackage[] = [
  {
    id: 0,
    packageName: "Bronze Package",
    startingPrice: "$80/service",
    estimatedTime: "2hr",
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
        estimatedTime: "1hr 20min",
      },
      suvTwoRows: {
        price: 100,
        estimatedTime: "1hr 45min",
      },
      suvThreeRows: {
        price: 110,
        estimatedTime: "1hr 50min",
      },
    },
  },
  {
    id: 1,
    packageName: "Gold Package",
    startingPrice: "$250/service",
    estimatedTime: "4hr 30min",
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
        estimatedTime: "4hr",
      },
      suvTwoRows: {
        price: 280,
        estimatedTime: "4hr 30min",
      },
      suvThreeRows: {
        price: 300,
        estimatedTime: "4hr 30min",
      },
    },
  },
  {
    id: 2,
    packageName: "Silver Package",
    startingPrice: "$175/service",
    estimatedTime: "4hr",
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
        estimatedTime: "3hrs 20min",
      },
      suvTwoRows: {
        price: 185,
        estimatedTime: "3hr 40min",
      },
      suvThreeRows: {
        price: 205,
        estimatedTime: "1hr 40min",
      },
    },
  },

  {
    id: 3,
    packageName: "Min Interior Detail",
    startingPrice: "$60/service",
    estimatedTime: "1hr",
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
    estimatedTime: "3 hrs",
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
        estimatedTime: "3hr",
      },
      suvTwoRows: {
        price: 160,
        estimatedTime: "3hr",
      },
      suvThreeRows: {
        price: 180,
        estimatedTime: "3hr",
      },
    },
  },
  {
    id: 5,
    packageName: "Premium Wash & Wax",
    startingPrice: "$100/service",
    estimatedTime: "1hr 30 mins",
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
        estimatedTime: "1hr 30min",
      },
      suvTwoRows: {
        price: 120,
        estimatedTime: "1hr 30min",
      },
      suvThreeRows: {
        price: 140,
        estimatedTime: "1hr 30min",
      },
    },
  },
];
