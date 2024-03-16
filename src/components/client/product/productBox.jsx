"use client";

import { formatPrettyURL } from "@/assets/js/helpers";
import Image from "next/image";
import { useState } from "react";

export default function ProductBox({ product }) {
  const [srcURL, setSource] = useState(
    `https://hapi.herrguller.cc/static/products/`
  );

  return (
    <div className="flex-column half-gap">
      <a
        target="_blank"
        href={`/product/${formatPrettyURL(product.Name)}`}
        className="product-image flex-row flex-start align-start text-small"
      >
        <Image
          alt={product.Name}
          src={srcURL + product.ID + "/" + product.Image}
          width={248}
          height={298}
          priority
        />
      </a>
      <section className="flex-column product-overview">
        <h5>{product.Name}</h5>
        <span className="pricing flex-row flex-divide">
          <h5>€{product.Price}</h5>
          <a
            target="_blank"
            href={`/category/${formatPrettyURL(product.CategoryName)}`}
            className="flex-row flex-start align-start text-small"
          >
            <h5>{product.CategoryName}</h5>
          </a>
        </span>
      </section>
    </div>
  );
}
