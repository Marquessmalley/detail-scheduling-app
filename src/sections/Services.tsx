import ServiceCard from "components/ui/cards/ServiceCard";
import { services } from "constants/service";

const Services: React.FC = () => {
  return (
    <div className="mb-32 mt-56">
      {/* SERVICE HEADER */}
      <div className="mx-auto max-w-3xl mb-10 ">
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 text-center ">
          Comprehensive Car
          <span className="bg-gradient-to-r from-teal-400 to-pink-300 bg-clip-text text-transparent">
            {" "}
            Detailing Services
          </span>
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are dedicated to providing the best car wash experience for our
          customers. Whether you need a quick exterior wash or a thorough
          interior cleaning, we have you covered.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="mx-auto max-w-7xl grid gap-x-5 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 ">
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
