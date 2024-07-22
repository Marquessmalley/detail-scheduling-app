import { AdminAvailabilityType } from "constants/interfaces";

interface AvailableDateProps {
  availability: AdminAvailabilityType;
}

const AvailableDate: React.FC<AvailableDateProps> = ({ availability }) => {
  const day = availability.date.split(" ")[0];
  const month = availability.date.split(" ")[1];
  const date = availability.date.split(" ")[2];

  return (
    <div className=" max-w-xl mx-auto mt-2 flex bg-white rounded-lg border">
      <div className="m-2 bg-slate-100 py-2 px-4 rounded-lg ">
        <p className="text-gray-400 font-semibold text-lg">{day}</p>
        <p className="text-black font-bold text-3xl">
          {month} {date}
        </p>
      </div>
      <div className="m-2 flex flex-col justify-center">
        <p className="text-black font-semibold mb-1">
          Detailer: <span className="font-light">{availability.detailer}</span>
        </p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mr-1 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-gray-400 text-sm font-semibold ">
            {availability.startTime}-untill
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailableDate;
