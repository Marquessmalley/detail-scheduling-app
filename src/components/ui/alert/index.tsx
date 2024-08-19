import React from "react";

interface AlertProps {
  alertType: string | undefined;
  alertMsg: string | undefined;
}

const Alert: React.FC<AlertProps> = ({ alertType, alertMsg }) => {
  return (
    <div className="py-4 text-center lg:px-4">
      <div
        className={
          alertType === "Error" || alertType === "FirebaseError"
            ? "flex items-center bg-red-600 p-2 leading-none text-red-100 lg:inline-flex lg:rounded-full"
            : "flex items-center bg-emerald-700 p-2 leading-none text-emerald-100 lg:inline-flex lg:rounded-full"
        }
        role="alert"
      >
        <span
          className={
            alertType === "Error" || alertType === "FirebaseError"
              ? "mr-3 flex rounded-full bg-red-500 px-2 py-1 text-xs font-semibold uppercase"
              : "mr-3 flex rounded-full bg-emerald-500 px-2 py-1 text-xs font-semibold uppercase"
          }
        >
          {alertType}
        </span>
        <span className="mr-2 flex-auto text-left font-normal">{alertMsg}</span>
      </div>
    </div>
  );
};

export default Alert;
