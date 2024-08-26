import { useState } from "react";
import Alert from "components/ui/alert";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [contactError, setContactError] = useState({
    error: false,
    message: "",
  });
  const [contactSuccess, setContactSucess] = useState(false);

  const handleContactForm = (e: any) => {
    setContactInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = () => {
    const { firstName, lastName, email, message } = contactInfo;

    // CHECK EMPTY VALUE
    if (!firstName || !lastName || !email || !message) {
      setContactError({ error: true, message: "Please fill out all fields." });
      setContactSucess(false);
      return;
    }

    // USE REGEX TO VALIDATE EMAIL
    const expression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!expression.test(email)) {
      setContactError({ error: true, message: "Invalid email." });
      setContactSucess(false);
      return;
    }

    // RESETS STATE
    setContactError({ error: false, message: "" });
    setContactInfo({ firstName: "", lastName: "", email: "", message: "" });
    setContactSucess(true);
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 text-center">
        <h1 className="text-jus m-4 my-6 text-3xl font-bold sm:text-5xl">
          Get in touch
        </h1>
        <p className="sm:text-md m-4 text-center text-sm font-semibold text-slate-400">
          Feel free to reach out to us, and our team will get back to you as
          soon as possible.
        </p>
      </div>

      <div className="col-span-12 mx-4 my-6">
        <div className="mx-auto max-w-4xl">
          {contactError.error && (
            <Alert alertType="Error" alertMsg={contactError.message} />
          )}
          {contactSuccess && (
            <Alert alertType="Success" alertMsg="Message successfully sent." />
          )}
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
              value={contactInfo.firstName}
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-teal-500 focus:ring-teal-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              placeholder="John"
              onChange={handleContactForm}
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
              value={contactInfo.lastName}
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              placeholder="Doe"
              onChange={handleContactForm}
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
              value={contactInfo.email}
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              placeholder="Email"
              onChange={handleContactForm}
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
              value={contactInfo.message}
              onChange={handleContactForm}
            ></textarea>
          </div>
          <button
            onClick={submitForm}
            className="w-full rounded-xl border border-slate-300 p-2 font-semibold text-slate-900 transition duration-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
