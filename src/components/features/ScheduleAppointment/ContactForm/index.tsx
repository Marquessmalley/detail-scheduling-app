import { useUserAppointmentContext } from "context/AppointmentContext";
import { calculatePrice } from "utils/calculatePrice";
import Alert from "components/ui/alert";

interface ContactFormProps {
  aptErr?: boolean;
  aptErrMsg?: string;
  setAptErr: (x: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  aptErr,
  aptErrMsg,
  setAptErr,
}) => {
  const { userAppointment, setUserAppointment } = useUserAppointmentContext();

  const handleContactChange = (e: any) => {
    setUserAppointment((prevState: any) => ({
      ...prevState,
      price: calculatePrice(userAppointment),
      contactInfo: {
        ...prevState.contactInfo,
        [e.target.name]: e.target.value,
      },
    }));
    setAptErr(false);
  };
  return (
    <>
      {aptErr && (
        <>
          <Alert alertType="Error" alertMsg={aptErrMsg} />
        </>
      )}
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2 p-6">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
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
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={userAppointment.contactInfo.phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:bg-slate-100 transition duration-200 cursor-pointer"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={handleContactChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
    </>
  );
};

export default ContactForm;
