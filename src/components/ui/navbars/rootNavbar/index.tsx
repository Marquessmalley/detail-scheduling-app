import { Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import shinelogo from "assets/images/logo.png";
import { navigation } from "constants/navmenu";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex flex-1 justify-between items-center h-20  ">
              {/* MOBILE MENU */}

              <div className=" flex  items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* logo*/}
              <div className="flex flex-1 items-center justify-end  sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-20 w-auto"
                      src={shinelogo}
                      alt="Your Company"
                    />
                  </Link>
                </div>
              </div>

              {/* Nav menu */}

              <div className=" hidden sm:ml-6 sm:block">
                <div className="flex  p-1 rounded-full shadow-xl shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className=" px-3 py-2 rounded-full text-sm font-medium"
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* search */}
              <div className="flex flex-1 justify-end items-center">
                <Link to="/booking">
                  <button
                    type="button"
                    className="relative flex rounded-full py-2.5 px-4  text-sm font-semibold border border-slate-300 bg-slate-900 text-white"
                  >
                    <p className="mr-1 ">Book Now</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
