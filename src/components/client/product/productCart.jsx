"use client";

import { manageCart } from "@/actions/manage/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProductCart({ user, cart, product, color }) {
  const router = useRouter();
  const [amount, setAmount] = useState(
    cart?.find((x) => x.ProductID === product.ID && x.ColorID === color.ID)
      ?.Amount ?? 1
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    const reqData = {
      ID:
        cart?.find((x) => x.ProductID === product.ID && x.ColorID === color.ID)
          ?.ID ?? 0,
      ProductID: product.ID,
      ColorID: color.ID,
      Amount: parseInt(amount),
    };
    let res = await manageCart(reqData);
    if (res) {
      toast("Added to cart!");
      router.refresh();
    } else {
      toast("Failed to add to cart");
    }
  };

  return (
    <div className="flex-column">
      {user ? (
        <form className="flex-row align-center form-cart" onSubmit={onSubmit}>
          <input
            type="number"
            id="amount"
            name="amount"
            className="text-center"
            defaultValue={
              cart?.find(
                (x) => x.ProductID === product.ID && x.ColorID === color.ID
              )?.Amount ?? 1
            }
            min={1}
            onChange={(e) => setAmount(e.target.value)}
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
