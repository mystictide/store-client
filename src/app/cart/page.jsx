"use server";

import { getCart } from "@/actions/fetch/actions";
import { formatPrettyURL, readCookie } from "@/assets/js/helpers";
import ManageCart from "@/components/client/user/cart/manageCart";
import Footer from "@/components/server/ui/footer";
import Header from "@/components/server/ui/header";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Cart() {
  const cookieStore = cookies();
  const user = readCookie(cookieStore, "client");
  const srcURL = "https://hapi.herrguller.cc/static/products/";

  if (!user) {
    redirect("/");
  }

  const cart = await getCart();

  return (
    <>
      <Header />
      <div className="content-wrapper product-view flex-column bg">
        <div className="content flex-row" style={{ paddingTop: "5rem" }}>
          <div className="flex-row flex-center flex-start checkout">
            <ul className="flex-column align-start cart-items">
              {cart?.map((item) => (
                <li key={item.ID} className="flex-row align-start">
                  <div className="flex-row flex-start cart-view padding">
                    <a
                      target="_blank"
                      href={`/product/${formatPrettyURL(item.ProductName)}`}
                      className="product-image flex-row flex-start align-start"
                    >
                      <Image
                        alt={item.ProductName}
                        src={srcURL + item.ProductID + "/" + item.Image}
                        width={85}
                        height={105}
                        priority
                      />
                    </a>
                    <div className="flex-column">
                      <h4>{item.ProductName}</h4>
                      <h5>
                        <a
                          target="_blank"
                          href={`/products/?brands=${formatPrettyURL(
                            item.BrandName
                          )}`}
                          className="link"
                        >
                          {item.BrandName}
                        </a>
                      </h5>
                    </div>
                    <div className="flex-row flex-center total">
                      <div className="color-options">
                        <button
                          type="button"
                          className=""
                          style={{ backgroundColor: item.ColorHex }}
                        />
                      </div>
                      <div className="flex-column flex-center">
                        <ManageCart item={item} />
                        <h3>€{item.Pricing}</h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex-column flex-center submit">
              <h2>Total: €{cart?.reduce((n, { Total }) => n + Total, 0)}</h2>
              <button type="button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
