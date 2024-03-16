"use server";

import { getCategories } from "@/actions/fetch/actions";
import Logo from "@/assets/img/logo.svg";
import { readCookie } from "@/assets/js/helpers";
import Logout from "@/components/client/ui/logout";
import NavbarCategories from "@/components/client/ui/navbar/navCategories";
import AuthClient from "@/components/client/user/accounts/authClient";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Header() {
  const cookieStore = cookies();
  const user = await readCookie(cookieStore, "client");

  const categories = await getCategories();

  return (
    <nav className="bg flex-column flex-center">
      <div className="navbar-header flex w-full h-full flex-row flex-center">
        <a
          className="flex-row flex-center logo no-select screen"
          aria-label="Home"
          href="/"
        >
          <Image alt="homie logo" src={Logo} />
          <h1>omie</h1>
        </a>
        {user ? <Logout /> : <AuthClient />}
      </div>
      <span className="navbar-seperator" />
      <NavbarCategories categories={categories} />
      <span className="navbar-seperator" />
    </nav>
  );
}
