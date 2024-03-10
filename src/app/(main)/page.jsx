"use server";

import Header from "@/components/server/ui/header";

export default async function Main() {
  return (
    <>
      <Header />
      <div className="content-wrapper">main</div>
    </>
  );
}
