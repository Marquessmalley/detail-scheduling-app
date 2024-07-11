export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface Appointment {
  id: string;
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
