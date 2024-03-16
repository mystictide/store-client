"use client";

import { manageCart } from "@/actions/manage/actions";
import { useState } from "react";

export default function ProductCart({ user, product, color }) {
  const [amount, setAmount] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    const reqData = { ProductID: product.ID, ColorID: color.ID, amount };
    let res = await manageCart(reqData);
    if (res.ID) {
      toast("Added to cart!");
    }
  };

  return (
    <div className="flex-column" onSubmit={onSubmit}>
      {user ? (
        <form className="flex-row align-center form-cart">
          <input
            type="number"
            className="text-center"
            defaultValue={1}
            min={1}
            onChange={setAmount}
          />
          <button type="submit" className="interactive">
            Add to cart
          </button>
        </form>
      ) : (
        <h5>Sign in to add to card.</h5>
      )}
    </div>
  );
}
