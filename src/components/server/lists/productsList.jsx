"use server";

import ProductBox from "@/components/client/product/productBox";
import Pager from "../ui/pager";

export default async function ProductsList({ products }) {
  return (
    <>
      <Pager data={products} url={"/products"} />
      <ul className="w-full flex-row flex-wrap">
        {products.data?.map((product) => (
          <li key={product.ID} className="flex-row w-full product-box">
            <ProductBox product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
