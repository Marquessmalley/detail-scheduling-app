import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import AddAvailability from "components/features/AddAvailability";

const AddVailabilityBackdrop: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  return (
    <div className="text-end">
      <button
        className="border p-2 rounded-xl hover:bg-slate-50 transition"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <Backdrop open={open} sx={{}}>
        {/* CLOSE BACKDROP */}
        <div className=" w-11/12 h-screen">
          {/* ADD AVAILABILITY  */}
          <div className="my-4">
            <button
              className="p-2 bg-slate-50 border rounded-lg hover:bg-slate-200 transition"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mx-auto max-w-lg">
            <AddAvailability />
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default AddVailabilityBackdrop;
