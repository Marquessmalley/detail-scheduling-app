import { useState } from "react";
import { AdminAvailabilityType } from "constants/interfaces";
import { ClockIcon, EllipsisIcon } from "components/ui/icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Backdrop from "@mui/material/Backdrop";
import UpdateAvailability from "components/features/UpdateAvailability";
import { Dialog } from "@headlessui/react";
import RemoveAvailabilityModal from "components/ui/modal/RemoveAvailabilityModal";

interface AvailableDateProps {
  id: string;
  availability: AdminAvailabilityType;
}

const AvailableDate: React.FC<AvailableDateProps> = ({ id, availability }) => {
  const day = availability.date.split(" ")[0];

  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handlOpeneModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const month = availability.date.split(" ")[1];
  const date = availability.date.split(" ")[2].replace(",", "");

  return (
    <div className="mt-2 flex justify-between rounded-lg border bg-white lg:mx-auto lg:max-w-xl">
      <div className="m-2 rounded-lg bg-slate-100 px-4 py-2">
        <p className="text-lg font-semibold text-gray-400">{day}</p>
        <p className="text-3xl font-bold text-black">
          {" "}
          {month} {date}{" "}
        </p>
      </div>
      <div className="m-2 flex flex-col justify-center">
        <p className="mb-1 font-semibold text-black">
          Detailer:{" "}
          <span className="font-light text-gray-500">
            {availability.detailer}
          </span>
        </p>
        <div className="flex items-center">
          <ClockIcon size="size-4" mr="mr-1" textColor="text-gray-500" />
          <p className="text-sm text-gray-500">
            {availability.startTime}-untill
          </p>
        </div>
      </div>
      <div className="m-2">
        <Menu>
          <MenuButton>
            <EllipsisIcon />
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className="mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem
              as="div"
              className="cursor-pointer border-b hover:bg-slate-100"
              onClick={handleOpen}
            >
              <p className="px-4 py-2 text-sm text-gray-700">Edit</p>
            </MenuItem>
            <MenuItem
              as="div"
              className="cursor-pointer hover:bg-slate-100"
              onClick={handlOpeneModal}
            >
              <p className="px-4 py-2 text-sm text-gray-700">Remove</p>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <Backdrop open={open} sx={{}}>
        <UpdateAvailability
          availabilityKey={id}
          availability={availability}
          handleClose={handleClose}
        />
      </Backdrop>

      <Dialog
        open={openModal}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={handleCloseModal}
      >
        <RemoveAvailabilityModal availabilityId={id} close={handleCloseModal} />
      </Dialog>
    </div>
  );
};

export default AvailableDate;
