"use server";

import { getBrands, getCategories, getColors, getMaterials } from "@/actions/fetch/actions";
import { filterProducts } from "@/actions/filters/actions";
import Empty from "@/assets/img/empty.png";
import { buildFilter } from "@/assets/js/helpers";
import ProductsFilter from "@/components/server/filters/productsFilter";
import ProductsList from "@/components/server/lists/productsList";
import Footer from "@/components/server/ui/footer";
import Header from "@/components/server/ui/header";
import Image from "next/image";

export default async function Products({ searchParams }) {

  const filter = buildFilter({
    keyword: searchParams.keyword,
    categories: searchParams.categories,
    brands: searchParams.brands,
    materials: searchParams.materials,
    colors: searchParams.colors,
    page: searchParams.page,
    sortby: searchParams.sortby,
  });

  const categories = await getCategories();
  const brands = await getBrands();
  const materials = await getMaterials();
  const colors = await getColors();
  const products = await filterProducts(filter);

  return (
    <>
      <Header />
      <div className="content-wrapper flex-row">
        <ProductsFilter
          categories={categories}
          brands={brands}
          materials={materials}
          colors={colors}
          filter={filter}
        />
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
      <Footer />
    </>
  );
}
