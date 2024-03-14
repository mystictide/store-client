"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ images }) {
  const [srcURL, setSource] = useState(
    `https://hapi.herrguller.cc/static/products/`
  );
  const [image, setImage] = useState(images[0]);

  return (
    <div className="flex-column padding product-images">
      <section className="current">
        <Image
          alt={"product image"}
          src={srcURL + image.ProductID + "/" + image.Source}
          width={550}
          height={600}
          priority
        />
      </section>
      <section className="available">
        <ul className="flex-row">
          {images.map((item) => (
            <li key={item.ID} onClick={(e) => setImage(item)}>
              <Image
                alt={"product image"}
                src={srcURL + item.ProductID + "/" + item.Source}
                width={85}
                height={105}
                priority
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
