import React from "react";
import { useAuth } from "context/AuthProvider";
import AddVailabilityBackdrop from "components/ui/backdrop";

const AdminHeader = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-7xl my-8  grid grid-cols-2">
      <div className="">
        <h1 className="text-lg font-bold text-gray-900 sm:text-4xl ">
          Welcome, {user?.email ? user.email.split("@")[0] : "Guest"}!
        </h1>
        <p className="mt-2 text-sm sm:text-lg text-gray-600">
          We're glad to have you here.
        </p>
      </div>
      <AddVailabilityBackdrop />
      <div className="border-t border-solid mt-2"></div>
    </div>
  );
};

export default AdminHeader;
