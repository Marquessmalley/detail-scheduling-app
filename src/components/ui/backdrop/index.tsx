import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";

const SimpleBackdrop = () => {
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
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      ></Backdrop>
    </div>
  );
};

export default SimpleBackdrop;
