import { useState } from "react";
import { AdminAvailabilityType } from "constants/interfaces";
import { ClockIcon, EllipsisIcon } from "components/ui/icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Backdrop from "@mui/material/Backdrop";
import UpdateAvailability from "components/features/UpdateAvailability";
import { Dialog } from "@headlessui/react";
import RemoveAvailabilityModal from "components/ui/modal/RemoveAvailabilityModal";
import { useDarkMode } from "context/DarkModeContext";
import { useTheme } from "@mui/material/styles";

interface AvailableDateProps {
  id: string;
  availability: AdminAvailabilityType;
}

const AvailableDate: React.FC<AvailableDateProps> = ({ id, availability }) => {
  const day = availability.date.split(" ")[0];

  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const theme = useTheme();

  const { isDarkMode } = useDarkMode();

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
    <div className="mt-4 grid grid-cols-12 rounded-lg border bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="col-span-11 grid grid-cols-12">
        <div className="col-span-4 m-2 rounded-lg bg-slate-100 px-4 py-2 dark:bg-slate-800 xs:col-span-9">
          <p className="text-sm font-semibold text-gray-400 sm:text-2xl">
            {day}
          </p>
          <p className="text-sm font-bold text-black dark:text-slate-200 sm:text-2xl">
            {" "}
            {month} {date}{" "}
          </p>
        </div>

        <div className="col-span-7 m-2 grid grid-cols-12 xs:col-span-12">
          <div className="col-span-12 flex flex-col justify-center gap-y-2">
            <div className="sm:pr-2">
              <p className="whitespace-nowrap text-sm font-bold text-black dark:text-slate-200 sm:text-medium">
                Detailer:{" "}
                <span className="whitespace-nowrap text-sm font-light text-gray-500 dark:text-slate-300">
                  {availability.detailer}
                </span>
              </p>
            </div>

            <div className="flex items-center">
              <div className="inline-flex items-center rounded-md border border-transparent bg-slate-800 p-0.5 text-sm text-white shadow-sm transition-all">
                <ClockIcon
                  size="size-4"
                  mr="mr-1"
                  textColor={isDarkMode ? "text-slate-200" : "text-gray-500"}
                />
                <p className="whitespace-nowrap text-sm font-light text-gray-500 dark:text-slate-300 sm:text-medium">
                  {availability.startTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 mr-1 text-end">
        <Menu>
          <MenuButton>
            <EllipsisIcon />
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className="mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800"
          >
            <MenuItem
              as="div"
              className="cursor-pointer border-b hover:bg-slate-100 dark:hover:bg-slate-900"
              onClick={handleOpen}
            >
              <p className="px-4 py-2 text-sm text-gray-700 dark:text-slate-200">
                Edit
              </p>
            </MenuItem>
            <MenuItem
              as="div"
              className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900"
              onClick={handlOpeneModal}
            >
              <p className="px-4 py-2 text-sm text-gray-700 dark:text-slate-200">
                Remove
              </p>
            </MenuItem>
          </MenuItems>
        </Menu>
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
