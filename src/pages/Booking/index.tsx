import BookingStepper from "components/ui/bookingStepper";

const Booking: React.FC = () => {
  return (
    <div className="container mx-auto h-screen  flex flex-col items-center justify-center">
      <div className=" mb-10 w-full max-w-3xl">
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 ">
          Set Appointment
        </p>
      </div>
      <div className="bg-slate-100 h-4/6 max-w-3xl w-full border rounded-2xl shadow-2xl">
        <BookingStepper />
      </div>
    </div>
  );
};

export default Booking;
