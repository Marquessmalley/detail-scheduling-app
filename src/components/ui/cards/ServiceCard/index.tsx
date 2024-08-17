interface ServiceCardProps {
  id: number;
  header: string;
  text: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, header, text, img }) => {
  return (
    <div
      key={id}
      className="relative p-4 border border-slate-300 dark:border-slate-600 rounded-2xl shadow max-w-md m-5 overflow-hidden h-80"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-400/30 to-transparent dark:bg-gradient-to-b dark:from-pink-400/20 dark:to-transparent  blur-xl dark:blur-3xl opacity-100"></div>

      {/* Content */}
      <div className="relative z-3 grid grid-rows-2 gap-y-6 ">
        <img
          src={img}
          alt="car-wash"
          className="h-14 w-14 border shadow rounded-lg p-3 "
        />
        <div className="grid gap-y-4">
          <p className="text-xl font-bold">{header}</p>
          <p className="text-sm font-normal dark:text-gray-400">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
