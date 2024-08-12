import { useUserAppointmentContext } from "context/AppointmentContext";
import { addUserAppointment } from "services/appointmentServices";
import Alert from "components/ui/alert";
import { AdminAvailabilityType } from "constants/interfaces";
import { useNavigate } from "react-router-dom";
import formatPhoneNumber from "utils/formatPhoneNumber";

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
  const handleSubmitAppointment = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-4 p-4">
        {/* CONTACT FORM */}
        <form className="col-span-12 sm:col-span-6 ">
          <h2 className="my-4 text-lg font-semibold border-b">
            Contact Information
          </h2>
          <div>
            <div className="mb-2">
              <label className="block  text-sm font-medium text-gray-600 ">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={userAppointment.contactInfo.firstName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400 focus:border-teal-500 block w-full p-2.5 hover:bg-slate-100 transition duration-200 cursor-pointer"
                placeholder="John"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="lastName"
                className="block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={userAppointment.contactInfo.lastName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:bg-slate-100 transition duration-200 cursor-pointer"
                placeholder="Doe"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={userAppointment.contactInfo.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:bg-slate-100 transition duration-200 cursor-pointer"
                placeholder="Email"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={userAppointment.contactInfo.phone}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:bg-slate-100 transition duration-200 cursor-pointer"
                placeholder="(123)456-7899"
                onChange={handlePhoneChange}
                maxLength={13}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="address"
                className="block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={userAppointment.contactInfo.address}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:bg-slate-100 transition duration-200 cursor-pointer"
                placeholder="Address"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={handleContactChange}
                required
              />
            </div>
          </div>
        </form>

        {/* APPOINTMENT SUMMARY*/}
        <div className="col-span-12 sm:col-span-6  p-4 rounded-lg ">
          <h2 className="text-lg font-semibold border-b">Summary</h2>
          <div className="grid grid-cols-2 sm:gap-x-6  my-4 sm:m-6">
            <h3 className=" text-sm font-bold text-teal-400 sm:text-md">
              Vehicle Type
            </h3>
            <p className="text-sm text-gray-700 font-medium">
              {userAppointment.vehicleType}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:gap-x-6  my-4 sm:m-6">
            <h3 className="text-sm font-bold text-teal-400 sm:text-md">
              Selected Package
            </h3>
            <p className=" text-sm text-gray-700 font-medium">
              {userAppointment.selectedPackage}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:gap-x-6  my-4 sm:m-6">
            <h3 className="text-sm font-bold text-teal-400 sm:text-md">
              Appointment Date
            </h3>
            <p className="text-sm text-gray-700 font-medium">
              {userAppointment.date}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:gap-x-6  my-4 sm:m-6">
            <h3 className="text-sm font-bold text-teal-400 sm:text-md">
              Start Time
            </h3>
            <p className="text-sm text-gray-700 font-medium">
              {userAppointment.startTime}
            </p>
          </div>

          {userAppointment.endTime && (
            <div className="grid grid-cols-2 sm:gap-x-6  my-4 sm:m-6">
              <h3 className="text-sm font-bold text-teal-400 sm:text-md">
                End Time
              </h3>
              <p className="text-sm text-gray-700 font-medium">
                {userAppointment.endTime}
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 sm:gap-x-6  my-4 sm:m-6">
            <h3 className="text-sm font-bold text-teal-400 sm:text-md">
              Price
            </h3>
            <p className="text-sm text-gray-700 font-medium">
              ${userAppointment.price}
            </p>
          </div>
        </div>
        {/* SUBMIT BUTTON */}
        <div className="grid col-span-12 sm:justify-items-end ">
          <div className="w-full sm:w-2/4">
            <button
              className="w-full py-2 px-4 bg-teal-400 text-white font-bold rounded-xl mt-4 hover:bg-teal-500 transition duration-200"
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
