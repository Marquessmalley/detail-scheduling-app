import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthProvider";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDarkMode } from "context/DarkModeContext";
import shinelogo from "assets/images/logo.png";
import { MoonIcon, SunIcon } from "components/ui/icons";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { signUserOut } = useAuth();
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleSignOut = () => {
    signUserOut();
    navigate("/login");
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="mt-3">
      <div className="mx-auto flex max-w-7xl border-b p-2 dark:border-teal-600 dark:bg-slate-900 dark:shadow-lg dark:shadow-slate-800 sm:px-6 lg:rounded-xl lg:px-8">
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
          <div className="flex items-center">
            <MenuButton className="">
              <div className="inline-flex w-full justify-center gap-x-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800">
                Menu
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </MenuButton>
            {isDarkMode ? (
              <MoonIcon toggleTheme={toggleTheme} />
            ) : (
              <SunIcon toggleTheme={toggleTheme} />
            )}
          </div>
          <MenuItems
            anchor="bottom"
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800"
          >
            <MenuItem
              as="div"
              className="flex cursor-pointer items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              <p className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200">
                Profile
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </MenuItem>
            <MenuItem
              as="div"
              className="flex cursor-pointer items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-900"
              onClick={handleSignOut}
            >
              <p
                className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200"
                tabIndex={-1}
              >
                Sign out
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
