import React from "react";
import { mainCarouselData } from "./MainCarosalData";
import AliceCarousel from "react-alice-carousel";

const MainCarosel = () => {

  const items = mainCarosalData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
    />
  );
};

export default MainCarosel;
