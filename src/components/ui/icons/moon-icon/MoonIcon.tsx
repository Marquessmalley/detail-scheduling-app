import React from "react";

interface SunIconProps {
  toggleTheme: () => void;
}

const MoonIcon: React.FC<SunIconProps> = ({ toggleTheme }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-10 p-1 ml-4 text-teal-400 rounded-lg border dark:border-slate-700 shadow-md dark:shadow-teal-600 dark:hover:bg-slate-800 transition duration-200 cursor-pointer"
      onClick={toggleTheme}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
};

export default MoonIcon;
