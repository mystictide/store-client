"use client";

import { formatPrettyURL } from "@/assets/js/helpers";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ProductSlider({ products }) {
  const [srcURL, setSource] = useState(
    `https://hapi.herrguller.cc/static/products/`
  );
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.ID} className="h-full flex-row flex-center">
            <a
              target="_blank"
              href={`/product/${formatPrettyURL(product.Name)}`}
              className="h-full flex-row flex-center"
            >
              <Image
                alt="product image"
                src={srcURL + product.ID + "/" + product.Image}
                width={170}
                height={198}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
