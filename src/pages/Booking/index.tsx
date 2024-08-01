import BookingStepper from "components/ui/bookingStepper";

const Booking: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto sm:container h-screen  flex flex-col items-center justify-center">
      <div className=" mb-10 w-full max-w-3xl">
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 ">
          Set Appointment
        </p>
      </div>
      <div className=" max-w-3xl mx-auto w-full border rounded-2xl shadow-2xl">
        <BookingStepper />
      </div>
    </div>
  );
};

export default Booking;
