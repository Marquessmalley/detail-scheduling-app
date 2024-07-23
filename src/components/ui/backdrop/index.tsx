import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import AddAvailability from "components/features/AddAvailability";
import { Tooltip } from "@nextui-org/react";
import { PlusIcon, CloseIcon, CalendarIcon } from "components/ui/icons";

const AddVailabilityBackdrop: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  return (
    <div>
      <Tooltip content="Add Availability" className="tetx-sm font-semibold">
        <button
          className="border p-2 rounded-xl hover:bg-slate-50 transition"
          onClick={handleOpen}
        >
          <PlusIcon />
        </button>
      </Tooltip>
      <Backdrop open={open} sx={{}}>
        {/* CLOSE BACKDROP */}
        <div className=" w-11/12 h-screen">
          {/* ADD AVAILABILITY  */}
          <div className="my-4 text-end">
            <button
              className="p-2 bg-slate-50 border rounded-lg hover:bg-slate-200 transition"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mx-auto max-w-3xl ">
            <div className="my-10 flex justify-center items-center">
              <CalendarIcon />
              <p className="text-4xl text-zinc-50 font-bold">
                Set Availability
              </p>
            </div>
            <AddAvailability handleClose={handleClose} />
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default AddVailabilityBackdrop;
