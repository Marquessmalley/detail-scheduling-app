import { createContext, useState, useContext } from "react";

interface DarkModeType {
  isDarkMode: boolean;
  setIsDarkMode: (darkMode: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeType | undefined>(
  undefined,
);

export const useDarkMode = (): DarkModeType => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("No Dark Mode Context");
  }
  return context;
};

interface DarkModeProviderType {
  children: React.ReactNode;
}

const DarkModeProvider = ({ children }: DarkModeProviderType) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
