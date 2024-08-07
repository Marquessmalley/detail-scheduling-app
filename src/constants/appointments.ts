import { Appointment } from "constants/interfaces";

export const previousAppointments: Appointment[] = [
  {
    // id: "1",
    vehicleType: "sedan",
    date: "07/18/2024",
    startTime: "10:00am",
    endTime: "11:00am",
    status: "completed",
    contactInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "1130 Watkins st se",
    },
    selectedPackage: "Bronze Package",
    price: 50,
  },
  {
    // id: "2",
    vehicleType: "sedan",
    date: "08/12/2023",
    startTime: "12:00pm",
    endTime: "2:00pm",
    status: "completed",
    contactInfo: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      address: "1130 Watkins st se",
    },
    selectedPackage: "Silver Package",
    price: 75,
  },
  {
    // id: "3",
    vehicleType: "sedan",
    date: "10/10/2023",
    startTime: "1:00pm",
    endTime: "4:00pm",
    status: "completed",
    contactInfo: {
      firstName: "Sam",
      lastName: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-555-5555",
      address: "1130 Watkins st se",
    },
    selectedPackage: "Gold Package",
    price: 100,
  },
];

export const upcomingAppointments: Appointment[] = [
  {
    // id: "1",
    vehicleType: "sedan",
    date: "August 10th, 2022 at 5:00 PM",
    startTime: "10:00",
    endTime: "11:00",
    status: "scheduled",
    contactInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "555-1234",
      address: "1130 Watkins st se",
    },
    selectedPackage: "Gold Package",
    price: 100,
  },
  {
    // id: "2",
    vehicleType: "sedan",
    date: "August 15th, 2022 at 1:00 PM",
    startTime: "12:00",
    endTime: "13:00",
    status: "scheduled",
    contactInfo: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "555-5678",
      address: "1130 Watkins st se",
    },
    selectedPackage: "Silver Package",
    price: 80,
  },
  {
    // id: "3",
    vehicleType: "sedan",
    date: "August 22nd, 2022 at 6:00 PM",
    startTime: "14:00",
    endTime: "15:00",
    status: "scheduled",
    contactInfo: {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      phone: "555-8765",
      address: "1130 Watkins st se",
    },
    selectedPackage: "Premium Wash & Wax",
    price: 150,
  },
];
