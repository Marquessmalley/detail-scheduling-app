import { detailMenu } from "constants/detail-menu";
import { DetailPackage } from "constants/interfaces";
import PriceCard from "components/ui/cards/PriceCard";

const Pricing: React.FC = () => {
  const specialPackages: DetailPackage[] = detailMenu.slice(0, 3);

  return (
    <div className="my-10 pt-24">
      {/* PRICE HEADER */}
      <div className="max-w-md sm:max-w-xl md:max-w-3xl mx-auto mb-10 lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Choose the right package for you
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          At ShineTime, we offer a range of detailing packages designed to fit
          your budget and your car's needs. Whether you're looking for a basic
          clean or a comprehensive detailing service, our pricing is transparent
          and competitive.
        </p>
      </div>
      {/* PRICE CARDS */}

      <div className="mx-auto max-w-7xl  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {specialPackages.map((plan) => {
          return <PriceCard plan={plan} />;
        })}
      </div>
    </div>
  );
};

export default Pricing;
