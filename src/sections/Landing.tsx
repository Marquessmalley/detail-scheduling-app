import { Link } from "react-router-dom";
import carSpray from "assets/images/car-spray.png";

const Landing = () => {
  return (
    <div
      className="m-6 grid grid-cols-1 sm:grid-cols-2"
      style={{ height: "80vh" }}
    >
      <div className="col-span-2 ml-4 flex flex-col items-start justify-center text-center lg:col-span-1">
        <p className="leading-12 mb-8 text-left text-5xl font-bold text-black dark:text-white">
          Your Car, Our Care -{" "}
          <span className="text-teal-400">Anywhere, Anytime</span>
        </p>
        <p className="mb-8 max-w-2xl text-justify text-slate-700 dark:text-gray-400 sm:text-lg">
          Book effortlessly through our app. Our detailers come to you, ensuring
          your car looks immaculate.
        </p>
        {/* <button
          type="button"
          className="relative mb-8 flex rounded-full border border-slate-300 bg-teal-400 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-teal-500 dark:border-slate-600 dark:bg-inherit dark:shadow-sm dark:shadow-teal-500 dark:hover:bg-slate-800"
        >
          <p className="mr-1">Get Started</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 text-teal-400"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
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
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <img src={carSpray} alt="landingImg" className="h-96 w-96" />
      </div>
    </div>
  );
};

export default Landing;
