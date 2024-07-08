import React from "react";

interface AlertProps {
  alertType: string | undefined;
  alertMsg: string | undefined;
}

const Alert: React.FC<AlertProps> = ({ alertType, alertMsg }) => {
  return (
    <div className=" text-center py-4 lg:px-4">
      <div
        className={
          alertType === "Error" || alertType === "FirebaseError"
            ? "p-2 bg-red-700 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex"
            : "p-2 bg-emerald-700 items-center text-emerald-100 leading-none lg:rounded-full flex lg:inline-flex"
        }
        role="alert"
      >
        <span
          className={
            alertType === "Error" || alertType === "FirebaseError"
              ? "flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3"
              : "flex rounded-full bg-emerald-500 uppercase px-2 py-1 text-xs font-bold mr-3"
          }
        >
          {alertType}
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">
          {alertMsg}
        </span>
      </div>
    </div>
  );
};

export default Alert;
