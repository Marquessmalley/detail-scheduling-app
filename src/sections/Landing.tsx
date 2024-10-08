import { Link } from "react-router-dom";
import landing from "assets/images/car-spray.png";

const Landing = () => {
  return (
    <div
      className="mx-auto mt-20 grid max-w-7xl grid-cols-1 grid-rows-12 gap-x-4 sm:grid-cols-12 md:mt-0"
      style={{ height: "100vh" }}
    >
      <div className="col-span-12 row-span-4 mx-4 flex flex-col items-start justify-center text-center sm:row-span-12 md:col-span-7">
        <p className="leading-12 mb-8 text-left text-3xl font-bold text-slate-900/80 dark:text-slate-200 sm:text-5xl">
          Your Car, Our Care -{" "}
          <span className="bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
            Anywhere, Anytime
          </span>
        </p>
        <p className="mb-8 text-justify text-sm font-medium text-slate-700 dark:text-gray-400 sm:mx-0 sm:text-lg">
          Book effortlessly through our app. Our detailers come to you, ensuring
          your car looks immaculate.
        </p>

        <Link to="/booking">
          <button
            type="button"
            className="relative flex rounded-full border border-slate-300 bg-teal-400 px-4 py-2.5 transition duration-200 hover:bg-teal-600 dark:border-slate-700 dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            <p className="mr-1 text-sm font-semibold text-white">Book Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-white dark:text-white"
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
      <div className="col-span-12 row-span-6 mx-4 flex items-center justify-center sm:row-span-12 md:col-span-5">
        <img
          src={landing}
          alt="landingImg"
          className="h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
        />
      </div>
    </div>
  );
};

export default Landing;
