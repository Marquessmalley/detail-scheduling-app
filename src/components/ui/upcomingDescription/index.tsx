import React from "react";
import { Appointment } from "constants/interfaces";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisIcon, LocationIcon } from "components/ui/icons";

interface UpcomingDescriptionProps {
  appointment: Appointment;
}

const UpcomingDescription: React.FC<UpcomingDescriptionProps> = ({
  appointment,
}) => {
  return (
    <div
      key={"i"}
      className="flex justify-between border-b dark:border-slate-700 lg:mx-auto lg:max-w-xl"
    >
      <div className="my-2 w-full p-2">
        {/* User name */}
        <div className="flex p-2">
          <p className="font-meduim text-sm leading-6 text-gray-900 dark:text-slate-200">
            {appointment.contactInfo.firstName}{" "}
            {appointment.contactInfo.lastName}
          </p>
        </div>

        {/* DATE & LOCATION */}
        <div className="flex p-2">
          <div className="flex items-center border-r pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 size-5 text-gray-500 dark:text-slate-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>

            <p className="text-sm text-gray-500 dark:text-slate-300">
              {appointment.date}
            </p>
          </div>
          <div className="flex items-center pl-4">
            <LocationIcon />

            <p className="text-sm text-gray-500 dark:text-slate-300">
              {appointment.contactInfo.address}
            </p>
          </div>
        </div>
      </div>
      {/* edit icon */}
      <div className="p-2">
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
