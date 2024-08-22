import React from "react";
import { detailMenu } from "constants/detail-menu";
import PriceCard from "components/ui/cards/PriceCard";

const Prices = () => {
  return (
    <div className="grid-col-1 grid">
      <div className="mx-auto my-10 max-w-7xl text-center">
        <h1 className="text-jus m-4 text-3xl font-bold sm:text-5xl">
          Choose your package
        </h1>
        <p className="sm:text-md m-4 text-justify text-sm font-semibold text-slate-400">
          Choose an affordable package that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      {/* PRICES */}
      <div className="mx-auto grid max-w-7xl justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {detailMenu.map((plan) => {
          return (
            <div key={plan.id} className="">
              <PriceCard plan={plan} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Prices;
