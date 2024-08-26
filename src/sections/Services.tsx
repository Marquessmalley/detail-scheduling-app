import ServiceCard from "components/ui/cards/ServiceCard";
import { services } from "constants/service";

const Services: React.FC = () => {
  return (
    <div id="services" className="mb-12 mt-14">
      {/* SERVICE HEADER */}
      <div className="mx-auto mb-10 max-w-md sm:max-w-xl md:max-w-3xl">
        <div className="mx-4">
          <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-300 sm:text-4xl">
            Comprehensive Car
            <span className="bg-gradient-to-r from-teal-400 to-pink-300 bg-clip-text text-transparent">
              {" "}
              Detailing Services
            </span>
          </p>
          <p className="mt-6 text-center text-lg leading-8 text-gray-600 dark:text-gray-400">
            We are dedicated to providing the best car wash experience for our
            customers. Whether you need a quick exterior wash or a thorough
            interior cleaning, we have you covered.
          </p>
        </div>
      </div>

      {/* SERVICE CARDS */}
      <div className="mx-auto grid max-w-7xl justify-items-center gap-x-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => (
          <div key={item.id}>
            <ServiceCard
              id={item.id}
              header={item.service}
              text={item.details}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
