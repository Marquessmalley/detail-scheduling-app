import { ImgComparisonSlider } from "@img-comparison-slider/react";
import dirty from "assets/images/dirty-backseat.png";
import clean from "assets/images/clean-backseat.png";
import "./slider.css";

const BeforeAfterSlider = () => {
  return (
    <div className="h-full">
      <ImgComparisonSlider className="slider-example-split-line outline-none focus:outline-none">
        <img
          slot="first"
          alt="first"
          src={dirty}
          className="h-98 w-98 object-cover"
        />
        <img
          slot="second"
          alt="second"
          src={clean}
          className="h-98 w-98 object-cover"
        />
      </ImgComparisonSlider>
    </div>
  );
};

export default BeforeAfterSlider;
