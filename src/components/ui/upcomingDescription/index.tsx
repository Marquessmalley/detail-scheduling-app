import React from "react";
import { Appointment } from "constants/interfaces";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisIcon, LocationIcon, CalendarIcon } from "components/ui/icons";

interface UpcomingDescriptionProps {
  appointment: Appointment;
}

const UpcomingDescription: React.FC<UpcomingDescriptionProps> = ({
  appointment,
}) => {
  return (
    <div
      key={"i"}
      className="grid grid-cols-12 border-b dark:border-slate-700 dark:bg-slate-900 lg:mx-auto lg:max-w-xl"
    >
      <div className="col-span-11 my-2 w-full p-2">
        {/* User name */}
        <div className="flex p-2">
          <p className="text-md font-semibold leading-6 text-gray-900 dark:text-slate-200">
            {appointment.contactInfo.firstName}{" "}
            {appointment.contactInfo.lastName}
          </p>
        </div>

        {/* DATE & LOCATION */}
        <div className="grid grid-cols-1 p-2 sm:grid-cols-12">
          <div className="col-span-6 flex items-center sm:border-r sm:pr-4">
            <CalendarIcon />

            <p className="text-sm text-gray-500 dark:text-slate-300">
              {appointment.date}
            </p>
          </div>

          <div className="col-span-6 mt-2 flex items-center sm:pl-4">
            <LocationIcon />

            <p className="text-sm text-gray-500 dark:text-slate-300">
              {appointment.contactInfo.address}
            </p>
          </div>
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
    </div>
  );
};

export default UpcomingDescription;
