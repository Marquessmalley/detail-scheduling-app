import { ReactNode, useState, createContext, useContext } from "react";
import dayjs, { Dayjs } from "dayjs";

interface AdminAvailabilityContextType {
  date: Dayjs | null;
  setDate: (date: Dayjs) => void;
  startTime: string;
  setStartTime: (time: string) => void;
  endTime: string;
  setEndTime: (time: string) => void;
  step: number;
  setStep: (step: number) => void;
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
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [step, setStep] = useState<number>(0);

  return (
    <AvailabilityContext.Provider
      value={{
        date,
        setDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        step,
        setStep,
      }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
};

export default AvailabilityProvider;
