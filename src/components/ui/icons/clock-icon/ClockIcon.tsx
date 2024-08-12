import React from "react";

interface ClockIconProps {
  mr?: string;
  textColor?: string;
  size?: string;
}

const ClockIcon: React.FC<ClockIconProps> = ({ mr, textColor, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={` ${size} ${mr && mr} ${textColor && textColor} `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

export default ClockIcon;
