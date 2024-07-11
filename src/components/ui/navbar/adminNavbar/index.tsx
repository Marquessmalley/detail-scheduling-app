import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthProvider";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import shinelogo from "assets/images/logo.png";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { signUserOut } = useAuth();

  const handleSignOut = () => {
    signUserOut();
    navigate("/login");
  };

  return (
    <nav className="mt-3">
      <div className="mx-auto max-w-7xl px-2 flex sm:px-6 lg:px-8 rounded-xl shadow-xl shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur ">
        <div className="flex flex-1">
          <div className="flex-shrink-0 items-center">
            <img
              className="h-12 w-auto sm:h-16"
              src={shinelogo}
              alt="Your Company"
            />
          </div>
        </div>
        <Menu>
          <MenuButton>
            <button className="inline-flex w-full justify-center gap-x-1.5 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Menu
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem
              as="div"
              className="flex justify-between items-center cursor-pointer hover:bg-slate-100"
            >
              <p className="block px-4 py-2 text-sm text-gray-700">Profile</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </MenuItem>
            <MenuItem
              as="div"
              className="flex justify-between items-center cursor-pointer hover:bg-slate-100"
              onClick={handleSignOut}
            >
              <p
                className="block px-4 py-2 text-sm text-gray-700"
                tabIndex={-1}
              >
                Sign out
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
};

export default AdminNavbar;
