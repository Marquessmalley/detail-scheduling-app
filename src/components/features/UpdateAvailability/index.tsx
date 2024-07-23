import { CloseIcon } from "components/ui/icons";

interface UpdateAvailabilityProps {
  handleClose: () => void;
}
const UpdateAvailability: React.FC<UpdateAvailabilityProps> = ({
  handleClose,
}) => {
  return (
    <div className=" w-11/12 h-screen">
      {/* ADD AVAILABILITY  */}
      <div className="my-4 text-end">
        <button
          className="p-2 bg-slate-50 border rounded-lg hover:bg-slate-200 transition"
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
      </div>

      <div className="mx-auto max-w-3xl ">
        <div className="my-10 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-white mr-2 h-12 w-12 border shadow rounded-full p-3 bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>

          <p className="text-4xl text-zinc-50 font-bold">Update Availability</p>
        </div>
        {/* <AddAvailability handleClose={handleClose} /> */}
      </div>
    </div>
  );
};

export default UpdateAvailability;
