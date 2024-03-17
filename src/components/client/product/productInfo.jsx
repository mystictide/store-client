"use client";

import { formatPrettyURL } from "@/assets/js/helpers";
import { useState } from "react";
import ProductCart from "./productCart";

export default function ProductInfo({ user, cart, product }) {
  const [color, setColor] = useState(product.Colors[0]);
  const [inStock, setInStock] = useState(
    product.Stocks.find((x) => x.ColorID === color.ID).Amount > 0 ? true : false
  );

  return (
    <div className="flex-column">
      <div className="flex-column half-gap">
        <h4>{product.Name}</h4>
        <h4>
          <a
            target="_blank"
            href={`/products/?brands=${formatPrettyURL(
              product.Specs.Brand.Name
            )}`}
            className="link"
          >
            {product.Specs.Brand.Name}
          </a>
        </h4>
      </div>
      <div className="flex-column color-options">
        <h4>Color options</h4>
        <ul className="flex-row">
          {product.Colors.map((item) => (
            <li key={item.ID}>
              <button
                type="button"
                className={`${item.ID === color.ID ? "selected" : ""}`}
                style={{ backgroundColor: item.Hex }}
                onClick={() => setColor(item)}
              ></button>
            </li>
          ))}
        </ul>
        <h4>{inStock ? "In stock" : "Out of stock"}</h4>
      </div>
      <div className="flex-column color-options">
        <h3>€{product.Prices.find((x) => (x.ColorID = color.ID)).Amount}</h3>
      </div>
      {inStock ? (
        <ProductCart user={user} cart={cart} product={product} color={color}/>
      ) : (
        ""
      )}
      <section className="flex-column" style={{ marginTop: "auto" }}>
        <div className="flex-column product-description">
          <h4>Product Description</h4>
          <h5>{product.Description}</h5>
        </div>
        <div className="flex-column">
          <h4>Product Specifications</h4>
          <h5>Material: {product.Specs.Material.Name}</h5>
          <h5>Height: {product.Specs.Height}cm</h5>
          <h5>Width: {product.Specs.Width}cm</h5>
          <h5>Weight: {product.Specs.Weight}kg</h5>
        </div>
      </section>
    </div>
  );
}
