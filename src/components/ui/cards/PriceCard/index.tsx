import car from "assets/images/car-wash.png";
import { DetailPackage } from "constants/interfaces";
import { CheckIcon } from "components/ui/icons";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

interface PriceCardProps {
  plan: DetailPackage;
}

const PriceCard: React.FC<PriceCardProps> = ({ plan }) => {
  return (
    <div
      key={plan.id}
      className="border-slate-30 m-5 max-w-md cursor-pointer rounded-3xl border bg-slate-100 p-4 shadow transition duration-200 hover:scale-105 hover:transform hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:shadow-md dark:shadow-teal-600"
    >
      {/* CARD HEADER */}
      <div className="flex items-center">
        <div className="flex flex-1 items-center">
          <img
            src={car}
            alt="car"
            className={
              plan.packageName === "Gold Package"
                ? "h-12 w-12 rounded-full border bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-500 p-3 shadow dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
                : "h-12 w-12 rounded-full border bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 p-3 shadow dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
            }
          />
          <p className="ml-4 text-xl font-semibold">{plan.packageName}</p>
        </div>

        <div className="w-18 flex items-center justify-center rounded-full border bg-white p-2 text-center shadow dark:bg-inherit dark:shadow-md dark:shadow-teal-600">
          <AccessAlarmIcon />
          <p className="ml-1 text-sm font-bold">{plan.estimatedTime}</p>
        </div>
      </div>

      {/* CARD STARTING PRICE */}

      <div
        className={
          plan.packageName === "Gold Package"
            ? "mx-auto mb-10 mt-10 max-w-52 rounded-full border bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-500 p-2 text-center shadow dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
            : "mx-auto mb-10 mt-10 max-w-52 rounded-full border bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 p-2 text-center shadow dark:bg-gradient-to-br dark:from-teal-600 dark:via-pink-500 dark:to-teal-600"
        }
      >
        <p className="text-sm font-bold text-white">
          Starting at {plan.startingPrice}
        </p>
      </div>

      {/* CARD SERVICES */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-md ml-2 font-semibold">Interior includes: </p>
          <ul className="flex flex-col">
            {plan.services.interior ? (
              plan.services.interior.map((service) => {
                return (
                  <li key={service} className="mb-2 mt-2 flex">
                    <CheckIcon />

                    <p className="ml-2 w-full text-sm text-gray-600 dark:text-gray-400">
                      {service}
                    </p>
                  </li>
                );
              })
            ) : (
              <p className="ml-2 w-full text-sm font-bold dark:text-slate-600">
                Interior not included.
              </p>
            )}
          </ul>
        </div>
        <div>
          <p className="text-md ml-2 font-semibold">Exterior includes: </p>
          <ul className="flex flex-col">
            {plan.services.exterior ? (
              plan.services.exterior.map((service) => {
                return (
                  <li key={service} className="mb-2 mt-2 flex">
                    {plan.packageName === "Gold Package" ? (
                      <CheckIcon packageName={plan.packageName} />
                    ) : (
                      <CheckIcon />
                    )}

                    <p className="ml-2 w-full text-sm text-gray-600 dark:text-gray-400">
                      {service}
                    </p>
                  </li>
                );
              })
            ) : (
              <p className="ml-2 w-full text-sm font-bold dark:text-slate-600">
                Exterior not included.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
