"use server";

import { getCart, getProduct } from "@/actions/fetch/actions";
import { decodeURL, readCookie } from "@/assets/js/helpers";
import Breadcrumbs from "@/components/client/product/breadcrumbs";
import ProductImages from "@/components/client/product/productImages";
import ProductInfo from "@/components/client/product/productInfo";
import Footer from "@/components/server/ui/footer";
import Header from "@/components/server/ui/header";
import { cookies } from "next/headers";

export default async function ProductView({ params }) {
  const cookieStore = cookies();
  const user = await readCookie(cookieStore, "client");
  
  const product = await getProduct(decodeURL(params.name));
  const cart = await getCart();
  return (
    <>
      <Header />
      <div className="content-wrapper product-view flex-column bg">
        <Breadcrumbs category={product.Category} />
        <div className="content flex-row">
          <ProductImages images={product.Images} />
          <ProductInfo user={user} cart={cart} product={product} />
        </div>
      </div>
      <Footer />
    </>
  );
}
