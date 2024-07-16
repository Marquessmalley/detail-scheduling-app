import { ReactNode, useState, createContext, useContext } from "react";

interface AdminAvailabilityContextType {
  date: string;
  setDate: (date: string) => void;
  startTime: string;
  setStartTime: (time: string) => void;
  endTime: string;
  setEndTime: (time: string) => void;
}

const AvailabilityContext = createContext<
  AdminAvailabilityContextType | undefined
>(undefined);

interface AvailabilityProviderProps {
  children: ReactNode;
}

export const useAvailabilityContext = (): AdminAvailabilityContextType => {
  const context = useContext(AvailabilityContext);
  if (!context) {
    throw new Error("No availability");
  }
  return context;
};

const AvailabilityProvider: React.FC<AvailabilityProviderProps> = ({
  children,
}) => {
  const [date, setDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  return (
    <AvailabilityContext.Provider
      value={{
        date,
        setDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
      }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
};

export default AvailabilityProvider;
