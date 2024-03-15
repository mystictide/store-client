"use server";

import { getProduct } from "@/actions/fetch/actions";
import { decodeURL } from "@/assets/js/helpers";
import Breadcrumbs from "@/components/client/product/breadcrumbs";
import ProductImages from "@/components/client/product/productImages";
import ProductInfo from "@/components/client/product/productInfo";
import Footer from "@/components/server/ui/footer";
import Header from "@/components/server/ui/header";

export default async function ProductView({ params }) {
  const product = await getProduct(decodeURL(params.name));
  return (
    <>
      <Header />
      <div className="content-wrapper product-view flex-column bg">
        <Breadcrumbs category={product.Category} />
        <div className="content flex-row">
          <ProductImages images={product.Images} />
          <ProductInfo product={product} />
        </div>
      </div>
      <Footer />
    </>
  );
}
