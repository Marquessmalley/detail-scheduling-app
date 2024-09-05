import { useEffect, useRef } from "react";
import { Appointment } from "constants/interfaces";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  EllipsisIcon,
  LocationIcon,
  CalendarIcon,
  ClockIcon,
} from "components/ui/icons";
import { useDarkMode } from "context/DarkModeContext";
import Clipboard from "clipboard";
import { Tooltip } from "@nextui-org/react";
import { toast } from "react-toastify";

interface UpcomingDescriptionProps {
  appointment: Appointment;
}

const UpcomingDescription: React.FC<UpcomingDescriptionProps> = ({
  appointment,
}) => {
  const { isDarkMode } = useDarkMode();
  const addressRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (addressRef.current) {
      const clipboard = new Clipboard(addressRef.current, {
        text: () => appointment.contactInfo.address,
      });

      clipboard.on("success", () => {
        toast.success("Address copied to clipboard!");
      });

      clipboard.on("error", () => {
        toast.error("Failed to copy address.");
      });

      return () => {
        clipboard.destroy(); // Clean up the clipboard instance
      };
    }
  }, [appointment.contactInfo.address]);

  return (
    <div
      key={"i"}
      className="mt-4 grid grid-cols-12 rounded-lg border dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="col-span-11 w-full p-2">
        {/* User name */}
        <div className="flex p-2">
          <p className="text-md font-semibold leading-6 text-gray-900 dark:text-slate-200">
            Customer Name:{" "}
            <span className="text-sm font-light">
              {appointment.contactInfo.firstName}{" "}
              {appointment.contactInfo.lastName}
            </span>
          </p>
        </div>
      </div>

      {/* EDIT ICON */}
      <div className="col-span-1 p-2">
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
            >
              <p className="px-4 py-2 text-sm text-gray-700 dark:text-slate-200">
                Edit
              </p>
            </MenuItem>
            <MenuItem
              as="div"
              className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              <p className="px-4 py-2 text-sm text-gray-700 dark:text-slate-200">
                Cancel
              </p>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      {/* DATE & LOCATION */}

      <div className="col-span-12 grid grid-cols-12 gap-y-3 divide-gray-300 px-2 pb-2 dark:divide-slate-500 sm:flex sm:divide-x sm:py-2">
        <div className="col-span-12 flex items-center sm:pr-4">
          <CalendarIcon />
          <p className="text-sm text-gray-500 dark:text-slate-300">
            {appointment.date}
          </p>
        </div>
        <div className="col-span-12 flex items-center sm:px-4">
          <ClockIcon
            size="size-4"
            mr="mr-1"
            textColor={isDarkMode ? "text-slate-200" : "text-gray-500"}
          />
          <p className="sm:text-md whitespace-nowrap text-sm font-light text-gray-500 dark:text-slate-300">
            {appointment.startTime}
          </p>
        </div>
        <div className="col-span-12 flex items-center sm:pl-4">
          <Tooltip content="Copy Address" className="text-sm font-semibold">
            <button
              ref={addressRef}
              className="flex rounded-lg border border-slate-700 p-1 transition duration-200 dark:hover:bg-slate-800"
            >
              <LocationIcon />
              <p className="text-sm text-gray-500 dark:text-slate-300">
                {appointment.contactInfo.address}
              </p>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDescription;
