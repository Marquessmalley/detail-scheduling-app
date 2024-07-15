import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  AtSymbolIcon,
  PhoneIcon,
  TagIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";
import { Appointment } from "constants/appointment";
import StatusIndicator from "components/ui/statusIndicator";

interface AccordionProps {
  appointment: Appointment;
}

const Accordion: React.FC<AccordionProps> = ({ appointment }) => {
  return (
    <div className="mx-auto w-full max-w-lg divide-y divide-black/5 rounded-2xl border">
      <Disclosure as="div" className="p-4" defaultOpen={false}>
        <DisclosureButton className="group flex w-full items-center justify-between">
          <div className="flex items-center">
            <StatusIndicator status={appointment.status} />
            <p className="text-sm font-medium text-black group-hover:text-black/70">
              {appointment?.contactInfo.firstName}{" "}
              {appointment?.contactInfo.lastName}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-medium text-black group-hover:text-black/70 mr-2">
              {appointment?.date}
            </p>
            <ChevronDownIcon className="w-5 h-5 text-black/60 group-hover:text-black/50 group-open:rotate-180 transition-transform" />
          </div>
        </DisclosureButton>
        <DisclosurePanel className="mt-2 text-sm text-black/70">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 text-blue-500 mr-2" />
              <p>
                <strong>Date:</strong> {appointment.date}
              </p>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 text-blue-500 mr-2" />
              <p>
                <strong>Start Time:</strong> {appointment.startTime}
              </p>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 text-blue-500 mr-2" />
              <p>
                <strong>End Time:</strong> {appointment.endTime}
              </p>
            </div>
            <div className="flex items-center">
              {/* <StatusOnlineIcon className="w-5 h-5 text-blue-500 mr-2" /> */}
              <p className="flex items-center">
                <strong>Status:</strong>{" "}
                <StatusIndicator status={appointment.status} />
              </p>
            </div>
            <div className="flex items-center">
              <UserIcon className="w-5 h-5 text-blue-500 mr-2" />
              <p>
                <strong>Contact Info:</strong>
              </p>
            </div>
            <ul className="ml-7 list-disc">
              <li className="flex items-center">
                <UserIcon className="w-4 h-4 text-gray-500 mr-2" />
                <span>
                  <strong>Name:</strong> {appointment.contactInfo.firstName}{" "}
                  {appointment.contactInfo.lastName}
                </span>
              </li>
              <li className="flex items-center">
                <AtSymbolIcon className="w-4 h-4 text-gray-500 mr-2" />
                <span>
                  <strong>Email:</strong> {appointment.contactInfo.email}
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-4 h-4 text-gray-500 mr-2" />
                <span>
                  <strong>Phone:</strong> {appointment.contactInfo.phone}
                </span>
              </li>
            </ul>
            <div className="flex items-center">
              <TagIcon className="w-5 h-5 text-blue-500 mr-2" />
              <p>
                <strong>Package Detail:</strong> {appointment.packageDetail}
              </p>
            </div>
            <div className="flex items-center">
              <CurrencyDollarIcon className="w-5 h-5 text-blue-500 mr-2" />
              <p>
                <strong>Price:</strong> ${appointment.price}
              </p>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 text-blue-500 mr-2" />
              <p>
                <strong>Created At:</strong> {appointment.createdAt}
              </p>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default Accordion;
