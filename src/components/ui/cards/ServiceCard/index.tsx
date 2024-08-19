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
      className="relative m-5 h-80 max-w-md overflow-hidden rounded-2xl border border-slate-300 p-4 shadow dark:border-slate-600"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-400/30 to-transparent opacity-100 blur-xl dark:bg-gradient-to-b dark:from-pink-400/20 dark:to-transparent dark:blur-3xl"></div>

      {/* Content */}
      <div className="z-3 relative grid grid-rows-2 gap-y-6">
        <img
          src={img}
          alt="car-wash"
          className="h-14 w-14 rounded-lg border p-3 shadow"
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
