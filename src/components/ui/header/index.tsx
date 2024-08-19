import { useState } from "react";
import { useAuth } from "context/AuthProvider";
import Backdrop from "@mui/material/Backdrop";
import { Tooltip } from "@nextui-org/react";
import { PlusIcon } from "components/ui/icons";
import AddAvailability from "components/features/AddAvailability";
import { useTheme } from "@mui/material/styles";

const AdminHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };
  const { user } = useAuth();

  return (
    <div className="mx-auto my-8 grid max-w-7xl grid-cols-2">
      <div className="ml-2 sm:ml-0">
        <h1 className="text-lg font-bold text-gray-900 dark:text-slate-200 sm:text-4xl">
          Welcome, {user?.email ? user.email.split("@")[0] : "Guest"}!
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200 sm:text-lg">
          We're glad to have you here.
        </p>
      </div>

      <div className="flex items-center justify-end">
        <Tooltip content="Add Availability" className="text-sm font-semibold">
          <button
            className="rounded-xl border p-2 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            onClick={handleOpen}
          >
            <PlusIcon />
          </button>
        </Tooltip>
      </div>

      <Backdrop
        open={open}
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          color: "#fff",
          backdropFilter: "blur(10px)", // Add blur effect
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Op
        }}
      >
        <AddAvailability handleClose={handleClose} />
      </Backdrop>
      <span className="col-span-full border-t border-solid"></span>
    </div>
  );
};

export default AdminHeader;
