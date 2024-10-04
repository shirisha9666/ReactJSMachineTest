import React from "react";
import { Images } from "../images/images";

const HeroSection = () => {
  return (
    <div className="w-100">
      <img src={Images.hero} alt="" className="w-100" />
    </div>
  );
};

export default HeroSection;
