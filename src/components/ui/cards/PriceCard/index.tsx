import car from "assets/images/car-wash.png";
import { DetailPackage } from "constants/interfaces";
import { CheckIcon } from "components/ui/icons";

interface PriceCardProps {
  plan: DetailPackage;
}

const PriceCard: React.FC<PriceCardProps> = ({ plan }) => {
  return (
    <div
      key={plan.id}
      className={
        plan.packageName === "Gold Package"
          ? "p-4 border border-slate-300 rounded-3xl shadow max-w-md m-5 bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 transform scale-105"
          : "p-4 border border-slate-300 rounded-3xl shadow max-w-md m-5"
      }
    >
      {/* CARD HEADER */}
      <div className="flex items-center">
        <div className="flex flex-1 items-center ">
          <img
            src={car}
            alt="car"
            className={
              plan.packageName === "Gold Package"
                ? "h-12 w-12 border shadow rounded-full p-3 bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-500"
                : "h-12 w-12 border shadow rounded-full p-3 bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
            }
          />
          <p
            className={
              plan.packageName === "Gold Package"
                ? "text-xl font-semibold ml-4 text-white"
                : "text-xl font-semibold ml-4"
            }
          >
            {plan.packageName}
          </p>
        </div>

        <div className="flex items-center justify-center rounded-full text-center  w-32 bg-slate-100 border shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className=" ml-1 text-sm">{plan.estimatedTime}</p>
        </div>
      </div>

      {/* CARD STARTING PRICE */}

      <div
        className={
          plan.packageName === "Gold Package"
            ? "border shadow rounded-full p-2 mt-10 mb-10 text-center max-w-52 mx-auto bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-500"
            : "border shadow rounded-full p-2 mt-10 mb-10 text-center max-w-52 mx-auto bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500"
        }
      >
        <p
          className={
            plan.packageName === "Gold Package" ? "text-white " : "text-white"
          }
        >
          Starting at {plan.startingPrice}
        </p>
      </div>

      {/* CARD SERVICES */}
      <div className="grid gap-4 grid-cols-2 ">
        <div>
          <p
            className={
              plan.packageName === "Gold Package"
                ? "text-md font-semibold  ml-2 text-white"
                : "text-md  font-semibold ml-2"
            }
          >
            Interior includes:{" "}
          </p>
          <ul className="flex flex-col">
            {plan.services.interior &&
              plan.services.interior.map((service) => {
                return (
                  <li key={service} className="flex mt-2 mb-2">
                    {plan.packageName === "Gold Package" ? (
                      <CheckIcon packageName={plan.packageName} />
                    ) : (
                      <CheckIcon />
                    )}

                    <p
                      className={
                        plan.packageName === "Gold Package"
                          ? "ml-2 text-white text-sm w-full"
                          : "ml-2 text-gray-500 text-sm w-full"
                      }
                    >
                      {service}
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <p
            className={
              plan.packageName === "Gold Package"
                ? "text-md font-semibold ml-2 text-white"
                : "text-md font-semibold ml-2"
            }
          >
            Exterior includes:{" "}
          </p>
          <ul className="flex flex-col">
            {plan.services.exterior &&
              plan.services.exterior.map((service) => {
                return (
                  <li key={service} className="flex mt-2 mb-2">
                    {plan.packageName === "Gold Package" ? (
                      <CheckIcon packageName={plan.packageName} />
                    ) : (
                      <CheckIcon />
                    )}

                    <p
                      className={
                        plan.packageName === "Gold Package"
                          ? "ml-2 text-white text-sm w-full"
                          : "ml-2 text-gray-500 text-sm w-full"
                      }
                    >
                      {service}
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
