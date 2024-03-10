"use server";

import { getCategories } from "@/actions/fetch/actions";
import Logo from "@/assets/img/logo.svg";
import { formatPrettyURL, readCookie } from "@/assets/js/helpers";
import Logout from "@/components/client/ui/logout";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Header() {
  const cookieStore = cookies();
  const user = await readCookie(cookieStore, "client");

  const categories = await getCategories();

  return (
    <nav className="flex-column flex-center">
      <div className="navbar-header flex w-full h-full flex-row flex-end">
        <a
          className="flex-row flex-center logo no-select screen"
          aria-label="Home"
          href="/"
        >
          <Image alt="homie logo" src={Logo} />
          <h1>omie</h1>
        </a>
        {user ? (
          <section
            className="flex-row half-gap"
            style={{ position: "relative" }}
          >
            <Logout />
          </section>
        ) : (
          ""
        )}
      </div>
      <span className="navbar-seperator" />
      <div className="navbar-categories flex w-full h-full flex-row flex-center">
        <ul className="list h-full flex-row flex-center">
          {categories
            ?.filter((c) => !c.Parent.ID)
            .map((category) => (
              <li key={category.ID} className="h-full">
                <a className="h-full flex-row flex-center padding bold" href={`/category/${formatPrettyURL(category.Name)}`}>
                  {category.Name}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <span className="navbar-seperator" />
    </nav>
  );
}
