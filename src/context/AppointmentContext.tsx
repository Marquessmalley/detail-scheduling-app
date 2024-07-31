import React, { createContext, useState, useContext } from "react";
import { Appointment } from "constants/interfaces";

interface AppointmentContextType {
  userAppointment: Appointment;
  setUserAppointment: (appointment: any) => void;
}

const AppointmentContext = createContext<AppointmentContextType | null>(null);

interface AppointmentProviderProps {
  children: React.ReactNode;
}

export const useUserAppointmentContext = (): AppointmentContextType => {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error(`Appointment Contet Error`);
  }

  return context;
};

const AppointmentProvider: React.FC<AppointmentProviderProps> = ({
  children,
}) => {
  const [userAppointment, setUserAppointment] = useState<Appointment>({
    vehicleType: "sedan",
    date: "",
    startTime: "",
    endTime: "",
    status: "incomplete",
    contactInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    },
    selectedPackage: "Bronze Package",
    price: 0,
  });

  return (
    <AppointmentContext.Provider
      value={{ userAppointment, setUserAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;
