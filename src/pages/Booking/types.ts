export interface ContactInfo {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
}
export interface DateInfo {
  day: string;
  startTime: string;
  endTime: string;
}

export interface BookingInfo {
  selectedPackage: String;
  vehicleType: String;
  price: number;
  date: DateInfo;
  contact: ContactInfo;
}
