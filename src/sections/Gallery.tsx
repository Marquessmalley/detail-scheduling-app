import React from "react";
import BeforeAfterSlider from "components/ui/beforeAfterSlider";

const Gallery = () => {
  return (
    <div className="mb-48 grid grid-cols-12 sm:mx-auto sm:max-w-7xl">
      <div className="col-span-12 m-4 flex flex-col text-center sm:mt-44 lg:col-span-5 lg:text-start">
        <h2 className="my-4 text-4xl font-bold text-slate-900/80 dark:text-slate-200/100 md:text-5xl lg:text-6xl">
          Restore Your Interior with a{" "}
          <span className="text-teal-500">Professional Touch</span>
        </h2>
        <p className="my-4 text-sm leading-8 text-slate-700 dark:text-gray-400 sm:text-lg">
          Our detailing experts go beyond the surface, erasing every trace of
          dirt and dust. Get ready to fall in love with your car all over again.
        </p>
      </div>
      <div className="col-span-12 m-4 flex justify-center lg:col-span-7">
        <BeforeAfterSlider />
      </div>
    </div>
  );
};

export default Gallery;
