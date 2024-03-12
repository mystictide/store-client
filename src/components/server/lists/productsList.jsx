"use server";

import Pager from "../ui/pager";

export default async function ProductsList({ products }) {
  return (
    <>
      <h2 className="bg form-header flex-row flex-center flex-start">
        List of Products
      </h2>
      <Pager data={products} url={"/products"} />
      <section className="table flex-column">
        <div className="bg">
          <ul className="t-head flex-row flex-divide w-full">
            <li className="h-full padding">Product Name</li>
            <li className="h-full padding">Functions</li>
          </ul>
        </div>
        <div className="tb-body flex-column">
          <ul className="w-full">
            {products.data?.map((product) => (
              <li key={product.ID} className="flex-row flex-divide w-full">
                <h4 className="flex-row flex-start padding h-full tb-80 tb-link text-small">
                  {product.Name}
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
