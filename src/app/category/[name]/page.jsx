"use server";

import { filterProducts } from "@/actions/filters/actions";
import Empty from "@/assets/img/empty.png";
import { buildFilter } from "@/assets/js/helpers";
import ProductsFilter from "@/components/server/filters/productsFilter";
import ProductsList from "@/components/server/lists/productsList";
import Header from "@/components/server/ui/header";
import Image from "next/image";

export default async function Category({ params }) {
  const filter = buildFilter({
    category: params.name,
    page: null,
    sortby: null,
  });

  const products = await filterProducts(filter);

  return (
    <>
      <Header />
      <div className="content-wrapper flex-row">
        <ProductsFilter filter={filter} />
        <div className="content flex-column">
          <div className="flex-column">
            {products?.data?.length > 0 ? (
              <>
                <ProductsList products={products} />
              </>
            ) : (
              <div className="flex-column flex-center no-select">
                <Image alt="nothing found" src={Empty}></Image>
                <h3>No products found in this category.</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
