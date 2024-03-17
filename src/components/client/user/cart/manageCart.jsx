"use client";

import { manageCart } from "@/actions/manage/actions";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function ManageCart({ item }) {
  const router = useRouter();

  const handleCart = async (amount) => {
    const reqData = {
      ID: item.ID,
      ProductID: item.ProductID,
      ColorID: item.ColorID,
      Amount: amount,
    };
    let res = await manageCart(reqData);
    if (res) {
      router.refresh();
    } else {
      toast("Please try that again.");
    }
  };

  return (
    <div className="flex-row flex-center">
      <button
        type="button"
        className="interactive"
        onClick={() => handleCart(item.Amount - 1)}
      >
        <FaMinus />
      </button>
      <h4>{item.Amount}</h4>
      <button
        type="button"
        className="interactive"
        onClick={() => handleCart(item.Amount + 1)}
      >
        <FaPlus />
      </button>
    </div>
  );
}
