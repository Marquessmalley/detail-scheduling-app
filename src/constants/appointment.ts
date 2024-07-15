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

export const previousAppointments: Appointment[] = [
  {
    id: "1",
    date: "07/18/2024",
    startTime: "10:00am",
    endTime: "11:00am",
    status: "completed",
    contactInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    packageDetail: "bronze",
    price: 50,
    createdAt: "2023-05-25T08:00:00Z",
  },
  {
    id: "2",
    date: "08/12/2023",
    startTime: "12:00pm",
    endTime: "2:00pm",
    status: "completed",
    contactInfo: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
    },
    packageDetail: "silver",
    price: 75,
    createdAt: "2023-05-26T09:00:00Z",
  },
  {
    id: "3",
    date: "10/10/2023",
    startTime: "1:00pm",
    endTime: "4:00pm",
    status: "completed",
    contactInfo: {
      firstName: "Sam",
      lastName: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-555-5555",
    },
    packageDetail: "gold",
    price: 100,
    createdAt: "2023-05-27T10:00:00Z",
  },
];

export const upcomingAppointments: Appointment[] = [
  {
    id: "1",
    date: "07/15/2024",
    startTime: "10:00",
    endTime: "11:00",
    status: "scheduled",
    contactInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "555-1234",
    },
    packageDetail: "gold",
    price: 100,
    createdAt: "2024-07-01T10:00:00Z",
  },
  {
    id: "2",
    date: "07/16/2024",
    startTime: "12:00",
    endTime: "13:00",
    status: "scheduled",
    contactInfo: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "555-5678",
    },
    packageDetail: "silver",
    price: 80,
    createdAt: "2024-07-02T12:00:00Z",
  },
  {
    id: "3",
    date: "07/17/2024",
    startTime: "14:00",
    endTime: "15:00",
    status: "scheduled",
    contactInfo: {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      phone: "555-8765",
    },
    packageDetail: "premium wash & wax",
    price: 150,
    createdAt: "2024-07-03T14:00:00Z",
  },
];
