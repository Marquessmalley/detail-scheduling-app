import { useState } from "react";
import { AdminAvailabilityType } from "constants/interfaces";
import { ClockIcon, EllipsisIcon } from "components/ui/icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Backdrop from "@mui/material/Backdrop";
import UpdateAvailability from "components/features/UpdateAvailability";

interface AvailableDateProps {
  id: string;
  availability: AdminAvailabilityType;
}

const AvailableDate: React.FC<AvailableDateProps> = ({ id, availability }) => {
  const day = availability.date.split(" ")[0];

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  const month = availability.date.split(" ")[1];
  const date = availability.date.split(" ")[2].replace(",", "");

  return (
    <div className="lg:max-w-xl lg:mx-auto  mt-2 flex justify-between bg-white rounded-lg border">
      <div className="m-2 bg-slate-100 py-2 px-4 rounded-lg ">
        <p className="text-gray-400 font-semibold text-lg">{day}</p>
        <p className="text-black font-bold text-3xl">
          {month} {date}
        </p>
      </div>

      <div className="m-2 flex flex-col justify-center ">
        <p className="text-black font-semibold mb-1">
          Detailer:{" "}
          <span className="font-light text-gray-500">
            {availability.detailer}
          </span>
        </p>
        <div className="flex items-center">
          <ClockIcon size="size-4" mr="mr-1" textColor="text-gray-500" />
          <p className="text-gray-500 text-sm  ">
            {availability.startTime}-untill
          </p>
        </div>
      </div>

      <div className="m-2 ">
        <Menu>
          <MenuButton>
            <EllipsisIcon />
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className=" mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem
              as="div"
              className="cursor-pointer hover:bg-slate-100  border-b"
              onClick={handleOpen}
            >
              <p className="px-4 py-2 text-sm text-gray-700">Edit</p>
            </MenuItem>
            <MenuItem as="div" className="cursor-pointer hover:bg-slate-100">
              <p className="px-4 py-2 text-sm text-gray-700">Remove</p>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <Backdrop open={open} sx={{}}>
        <UpdateAvailability
          availability={availability}
          handleClose={handleClose}
        />
      </Backdrop>
    </div>
  );
};

export default AvailableDate;
