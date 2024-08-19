import { useUserAppointmentContext } from "context/AppointmentContext";
import { addUserAppointment } from "services/appointmentServices";
import Alert from "components/ui/alert";
import { AdminAvailabilityType } from "constants/interfaces";
import { useNavigate } from "react-router-dom";
import formatPhoneNumber from "utils/formatPhoneNumber";
import { AddressAutofill } from "@mapbox/search-js-react";

interface ContactFormProps {
  activeStep: number;
  appointmentError: { errorType: string; errorMsg: string };
  setAppointmentError: (x: { errorType: string; errorMsg: string }) => void;
  updateAvailability: [string, { availability: AdminAvailabilityType }] | null;
}

const ContactForm: React.FC<ContactFormProps> = ({
  activeStep,
  appointmentError,
  setAppointmentError,
  updateAvailability,
}) => {
  const navigate = useNavigate();

  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const handleContactChange = (e: any) => {
    setUserAppointment((prevState: any) => ({
      ...prevState,
      contactInfo: {
        ...prevState.contactInfo,
        [e.target.name]: e.target.value,
      },
    }));
    setAppointmentError({ errorType: "", errorMsg: "" });
  };

  const handlePhoneChange = (e: any) => {
    if (e.target.name === "phone") {
      const formattedNumber = formatPhoneNumber(e.target.value);

      setUserAppointment((prevState: any) => ({
        ...prevState,
        contactInfo: {
          ...prevState.contactInfo,
          phone: formattedNumber,
        },
      }));
    }
  };

  const handleAddressChnage = (e: any) => {
    setUserAppointment((prevState: any) => ({
      ...prevState,
      contactInfo: {
        ...prevState.contactInfo,
        address: e.target.value,
      },
    }));
  };

  const handleSubmitAppointment = () => {
    const { firstName, lastName, email, phone, address } =
      userAppointment.contactInfo;
    if (!firstName || !lastName || !email || !phone || !address) {
      setAppointmentError({
        errorType: "Contact Information",
        errorMsg: "Please fill out all fields.",
      });
      return;
    }

    addUserAppointment(userAppointment, updateAvailability);
    navigate("/booking-confirm", {
      state: {
        userName: `${userAppointment.contactInfo.firstName} ${userAppointment.contactInfo.lastName} `,
        date: userAppointment.date,
        time: userAppointment.startTime,
      },
    });
    setUserAppointment(null);
  };

  return (
    <>
      {activeStep === 3 &&
        appointmentError.errorType === "Contact Information" && (
          <>
            <Alert alertType="Error" alertMsg={appointmentError.errorMsg} />
          </>
        )}
      <div className="grid grid-cols-1 gap-x-4 p-4 sm:grid-cols-12">
        {/* CONTACT FORM */}
        <form className="col-span-12 sm:col-span-6">
          <h2 className="my-4 border-b text-lg font-semibold">
            Contact Information
          </h2>
          <div>
            <div className="mb-2">
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
                value={userAppointment.contactInfo.firstName}
                className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-teal-500 focus:ring-teal-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                placeholder="John"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="mb-2">
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
                value={userAppointment.contactInfo.lastName}
                className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                placeholder="Doe"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="mb-2">
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
                value={userAppointment.contactInfo.email}
                className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                placeholder="Email"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-slate-300"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={userAppointment.contactInfo.phone}
                className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                placeholder="Phone"
                onChange={handlePhoneChange}
                maxLength={13}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-slate-300"
              >
                Address
              </label>

              <AddressAutofill
                accessToken={`${process.env.REACT_APP_MAPBOX_KEY}`}
              >
                <input
                  autoComplete="shipping address-line1"
                  value={userAppointment.contactInfo.address}
                  onChange={handleAddressChnage}
                  placeholder="Address"
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-200 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                />
              </AddressAutofill>
            </div>
          </div>
        </form>

        {/* APPOINTMENT SUMMARY*/}
        <div className="col-span-12 rounded-lg p-4 sm:col-span-6">
          <h2 className="border-b text-lg font-semibold">Summary</h2>
          <div className="my-4 grid grid-cols-2 sm:m-6 sm:gap-x-6">
            <h3 className="sm:text-md text-sm font-bold text-teal-400">
              Vehicle Type
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
              {userAppointment.vehicleType}
            </p>
          </div>

          <div className="my-4 grid grid-cols-2 sm:m-6 sm:gap-x-6">
            <h3 className="sm:text-md text-sm font-bold text-teal-400">
              Selected Package
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
              {userAppointment.selectedPackage}
            </p>
          </div>

          <div className="my-4 grid grid-cols-2 sm:m-6 sm:gap-x-6">
            <h3 className="sm:text-md text-sm font-bold text-teal-400">
              Appointment Date
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
              {userAppointment.date}
            </p>
          </div>

          <div className="my-4 grid grid-cols-2 sm:m-6 sm:gap-x-6">
            <h3 className="sm:text-md text-sm font-bold text-teal-400">
              Start Time
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
              {userAppointment.startTime}
            </p>
          </div>

          {userAppointment.endTime && (
            <div className="my-4 grid grid-cols-2 sm:m-6 sm:gap-x-6">
              <h3 className="sm:text-md text-sm font-bold text-teal-400">
                End Time
              </h3>
              <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
                {userAppointment.endTime}
              </p>
            </div>
          )}

          <div className="my-4 grid grid-cols-2 sm:m-6 sm:gap-x-6">
            <h3 className="sm:text-md text-sm font-bold text-teal-400">
              Price
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
              ${userAppointment.price}
            </p>
          </div>
        </div>
        {/* SUBMIT BUTTON */}
        <div className="col-span-12 grid sm:justify-items-end">
          <div className="w-full sm:w-2/4">
            <button
              className="mt-4 w-full rounded-xl bg-teal-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-teal-600"
              onClick={handleSubmitAppointment}
            >
              Submit Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
