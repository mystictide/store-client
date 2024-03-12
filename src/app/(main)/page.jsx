"use server";

import { getLandingProducts } from "@/actions/fetch/actions";
import Banner from "@/assets/img/banner.jpeg";
import ProductSlider from "@/components/client/ui/landing/productSlider";
import Footer from "@/components/server/ui/footer";
import Header from "@/components/server/ui/header";
import Image from "next/image";

export default async function Main() {
  const products = await getLandingProducts();
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <div className="flex-row flex-center banner no-select">
          <h1>Homie</h1>
          <Image alt="homie banner" src={Banner} priority />
        </div>
        <section className="flex-column flex-start padding">
          <h1 className="">Living Room</h1>
          <ProductSlider products={products?.LivingRoom} />
        </section>
        <section className="flex-column flex-start padding">
          <h1 className="">Kitchen</h1>
          <ProductSlider products={products?.Kitchen} />
        </section>
        <section className="flex-column flex-start padding">
          <h1 className="">Bedroom</h1>
          <ProductSlider products={products?.Bedroom} />
        </section>
        <section className="flex-column flex-start padding">
          <h1 className="">Dining Room</h1>
          <ProductSlider products={products?.DiningRoom} />
        </section>
      </div>
      <Footer />
    </>
  );
}
