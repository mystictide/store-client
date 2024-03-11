"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ProductSlider({ products }) {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.ID} className="h-full bg flex-row flex-center">
            <h2 className="h-full flex-row flex-center text-center">
              {product.Name}
            </h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}
