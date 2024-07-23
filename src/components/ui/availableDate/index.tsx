import { AdminAvailabilityType } from "constants/interfaces";
import { ClockIcon } from "components/ui/icons";
interface AvailableDateProps {
  availability: AdminAvailabilityType;
}

const AvailableDate: React.FC<AvailableDateProps> = ({ availability }) => {
  const day = availability.date.split(" ")[0];
  const month = availability.date.split(" ")[1];
  const date = availability.date.split(" ")[2];

  return (
    <div className="lg:max-w-xl lg:mx-auto  mt-2 flex bg-white rounded-lg border">
      <div className="m-2 bg-slate-100 py-2 px-4 rounded-lg ">
        <p className="text-gray-400 font-semibold text-lg">{day}</p>
        <p className="text-black font-bold text-3xl">
          {month} {date}
        </p>
      </div>
      <div className="m-2 flex flex-col justify-center">
        <p className="text-black font-semibold mb-1">
          Detailer:{" "}
          <span className="font-light text-gray-500">
            {availability.detailer}
          </span>
        </p>
        <div className="flex items-center">
          <ClockIcon size="size-4" mr="mr-1" textColor="text-gray-500" />
          <p className="text-gray-500 text-sm  ">
            {availability.startTime}-untill
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailableDate;
