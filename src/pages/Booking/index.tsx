import BookingStepper from "components/ui/bookingStepper";

const Booking: React.FC = () => {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center justify-center sm:container">
      <div className="my-10 w-full max-w-3xl">
        <span className="text-4xl font-bold text-gray-800 dark:bg-gradient-to-r dark:from-teal-400 dark:to-pink-400 dark:bg-clip-text dark:text-transparent">
          Set Appointment
        </span>
      </div>
      <div className="mx-auto w-full max-w-5xl rounded-2xl border shadow-2xl dark:border-teal-600 dark:shadow-lg dark:shadow-slate-700">
        <BookingStepper />
      </div>
    </div>
  );
};

export default Booking;
