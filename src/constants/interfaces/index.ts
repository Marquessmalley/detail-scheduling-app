export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export interface Appointment {
  id: string;
  vehicleType: "Sedan" | "SUV/2Row" | "SUV/3Row";
  date: string;
  startTime: string;
  endTime: string;
  status: "scheduled" | "completed" | "cancelled";
  contactInfo: ContactInfo;
  packageDetail:
    | "bronze"
    | "silver"
    | "gold"
    | "min interior"
    | "full interior"
    | "premium wash & wax";
  price: number;
  createdAt: string;
}

export interface AdminAvailabilityType {
  detailer: string;
  date: string;
  startTime: string;
  endTime: string;
  customerInfo: ContactInfo;
  isBooked: boolean;
  detailPackage: string;
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export interface Navigation {
  name: string;
  href: string;
  current: boolean;
}

export interface CarType {
  id: number;
  type: string;
  img: string;
}

export interface Services {
  interior?: string[];
  exterior?: string[];
}

export interface VehicleType {
  sedan: {
    price: number;
    estimatedTime: string;
  };
  suvTwoRows: {
    price: number;
    estimatedTime: string;
  };
  suvThreeRows: {
    price: number;
    estimatedTime: string;
  };
}

export interface DetailPackage {
  id: number;
  packageName: string;
  startingPrice: string;
  estimatedTime: string;
  services: Services;
  vehicleType?: VehicleType;
}
