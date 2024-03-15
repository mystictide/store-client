"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ images }) {
  const [srcURL, setSource] = useState(
    `https://hapi.herrguller.cc/static/products/`
  );
  const [image, setImage] = useState(images[0]);

  return (
    <div className="flex-column product-images">
      <section className="current">
        <Image
          alt={"product image"}
          src={srcURL + image.ProductID + "/" + image.Source}
          width={450}
          height={500}
          priority
        />
      </section>
      <section className="available">
        <ul className="flex-row flex-wrap">
          {images.map((item) => (
            <li key={item.ID} onClick={(e) => setImage(item)}>
              <Image
                alt={"product image"}
                src={srcURL + item.ProductID + "/" + item.Source}
                width={80}
                height={100}
                priority
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
