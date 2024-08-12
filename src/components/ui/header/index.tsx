import { useState } from "react";
import { useAuth } from "context/AuthProvider";
import Backdrop from "@mui/material/Backdrop";
import { Tooltip } from "@nextui-org/react";
import { PlusIcon } from "components/ui/icons";
import AddAvailability from "components/features/AddAvailability";

const AdminHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-7xl my-8  grid grid-cols-2 ">
      <div className="ml-2 sm:ml-0">
        <h1 className="text-lg font-bold text-gray-900 sm:text-4xl ">
          Welcome, {user?.email ? user.email.split("@")[0] : "Guest"}!
        </h1>
        <p className="mt-2 text-sm sm:text-lg text-gray-600">
          We're glad to have you here.
        </p>
      </div>

      <div className="flex justify-end items-center">
        <Tooltip content="Add Availability" className="text-sm font-semibold">
          <button
            className="border p-2 rounded-xl hover:bg-slate-50 transition"
            onClick={handleOpen}
          >
            <PlusIcon />
          </button>
        </Tooltip>
      </div>

      <Backdrop open={open} sx={{}}>
        <AddAvailability handleClose={handleClose} />
      </Backdrop>
      <span className="border-t border-solid col-span-full"></span>
    </div>
  );
};

export default AdminHeader;
