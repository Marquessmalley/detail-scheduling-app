import carSpray from "assets/images/car-spray.png";

const Landing = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-x-10"
      style={{ height: "80vh" }}
    >
      <div className="flex flex-col justify-center items-start text-center max-w-md sm:max-w-3xl mx-auto sm:ml-10">
        <p className="text-5xl font-bold mb-8 leading-12 text-black text-left">
          Your Car, Our Care -{" "}
          <span className=" text-teal-400">Anywhere, Anytime</span>
        </p>
        <p className="sm:text-lg text-justify text-slate-700 mb-8 max-w-2xl">
          Book effortlessly through our app. Our detailers come to you, ensuring
          your car looks immaculate.
        </p>
        <button
          type="button"
          className="relative flex rounded-full py-2.5 px-4 mb-8 text-sm font-semibold border border-slate-300 bg-teal-400 text-white hover:bg-teal-500 transition duration-200"
        >
          <p className="mr-1">Get Started</p>
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
      </div>
      <div className="hidden sm:flex sm:justify-center sm:items-center ">
        <img
          src={carSpray}
          alt="landingImg"
          className="h-96 w-96 hidden sm:inline-block"
        />
      </div>
    </div>
  );
};

export default Landing;
