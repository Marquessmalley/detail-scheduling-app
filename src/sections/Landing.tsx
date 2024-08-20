import { Link } from "react-router-dom";
import carSpray from "assets/images/car-spray.png";

const Landing = () => {
  return (
    <div
      className="mx-auto grid max-w-7xl grid-cols-1 gap-x-4 sm:grid-cols-12"
      style={{ height: "80vh" }}
    >
      <div className="col-span-12 mx-4 flex flex-col items-start justify-center text-center md:col-span-7">
        <p className="leading-12 mb-8 text-left text-3xl font-bold text-black dark:text-white sm:text-5xl">
          Your Car, Our Care -{" "}
          <span className="text-teal-400">Anywhere, Anytime</span>
        </p>
        <p className="mb-8 text-justify text-sm font-medium text-slate-700 dark:text-gray-400 sm:mx-0 sm:text-lg">
          Book effortlessly through our app. Our detailers come to you, ensuring
          your car looks immaculate.
        </p>

        <Link to="/booking">
          <button
            type="button"
            className="relative flex rounded-full border border-slate-300 bg-teal-400 px-4 py-2.5 transition duration-200 hover:bg-teal-500 dark:border-slate-700 dark:bg-teal-700/5 dark:shadow-sm dark:shadow-teal-600 dark:hover:bg-slate-800"
          >
            <p className="mr-1 text-sm font-semibold text-white">Book Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-white dark:text-teal-400"
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
      <div className="hidden md:col-span-5 md:flex md:items-center md:justify-center">
        <img
          src={carSpray}
          alt="landingImg"
          className="md:h-80 md:w-80 lg:h-96 lg:w-96"
        />
      </div>
    </div>
  );
};

export default Landing;
