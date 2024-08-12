import car from "assets/images/car-wash.png";
import { DetailPackage } from "constants/interfaces";
import { CheckIcon, ClockIcon } from "components/ui/icons";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

interface PriceCardProps {
  plan: DetailPackage;
}

const PriceCard: React.FC<PriceCardProps> = ({ plan }) => {
  return (
    <div
      key={plan.id}
      className={
        plan.packageName === "Gold Package"
          ? "p-4 border border-slate-300 rounded-3xl shadow max-w-md m-5 bg-gradient-to-br from-teal-400 via-pink-300 to-teal-500 transform scale-105 cursor-pointer"
          : "p-4 border border-slate-300 rounded-3xl shadow max-w-md m-5 bg-slate-100 hover:bg-slate-50 hover:transform hover:scale-105 transition duration-200 cursor-pointer"
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

        <div className="flex items-center justify-center rounded-full text-center  w-18 p-2 bg-white border shadow">
          <AccessAlarmIcon />
          <p className=" ml-1 text-sm  font-bold">{plan.estimatedTime}</p>
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
            plan.packageName === "Gold Package"
              ? "text-white text-sm font-bold"
              : "text-white text-sm font-bold"
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
                          : "ml-2 text-gray-600 text-sm w-full"
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
                          : "ml-2 text-gray-6s00 text-sm w-full"
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
