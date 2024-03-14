"use server";

import { getProduct } from "@/actions/fetch/actions";
import { decodeURL } from "@/assets/js/helpers";
import Breadcrumbs from "@/components/client/product/breadcrumbs";
import ProductImages from "@/components/client/product/productImages";
import Footer from "@/components/server/ui/footer";
import Header from "@/components/server/ui/header";

export default async function ProductView({ params }) {
  const product = await getProduct(decodeURL(params.name));
  console.log(product);
  return (
    <>
      <Header />
      <div className="content-wrapper product-view flex-column bg">
        <Breadcrumbs category={product.Category} />
        <div className="content no-padding flex-row">
          <ProductImages images={product.Images} />
          <div className="flex-column">{product.Name}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
