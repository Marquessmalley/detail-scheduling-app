import BookingStepper from "components/ui/bookingStepper";

const Booking: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto sm:container flex flex-col items-center justify-center">
      <div className=" my-10 w-full max-w-3xl">
        <span className="text-4xl font-bold text-gray-800  dark:bg-gradient-to-r dark:from-teal-400 dark:to-pink-400 dark:bg-clip-text dark:text-transparent">
          Set Appointment
        </span>
      </div>
      <div className=" max-w-5xl mx-auto w-full border dark:border-teal-600 rounded-2xl shadow-2xl dark:shadow-lg dark:shadow-slate-700">
        <BookingStepper />
      </div>
    </div>
  );
};

export default Booking;
