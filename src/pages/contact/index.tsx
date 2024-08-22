import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 text-center">
        <h1 className="text-jus m-4 my-6 text-3xl font-bold sm:text-5xl">
          Get in touch
        </h1>
        <p className="sm:text-md m-4 text-center text-sm font-semibold text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          distinctio aliquid error soluta rerum architecto.
        </p>
      </div>

      <div className="col-span-12 mx-4 my-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-slate-300"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              // value={userAppointment.contactInfo.firstName}
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-teal-500 focus:ring-teal-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              placeholder="John"
              // onChange={handleContactChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-slate-300"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              // value={userAppointment.contactInfo.lastName}
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              placeholder="Doe"
              // onChange={handleContactChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-slate-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              // value={userAppointment.contactInfo.email}
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              placeholder="Email"
              // onChange={handleContactChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              placeholder="Leave us a meassge"
              // value={userAppointment.contactInfo.phone}

              // onChange={handlePhoneChange}
            ></textarea>
          </div>
          <button className="w-full rounded-xl border border-slate-300 p-2 font-semibold text-slate-900 transition duration-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-400 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-gradient-to-r dark:hover:from-pink-500 dark:hover:to-amber-400">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
