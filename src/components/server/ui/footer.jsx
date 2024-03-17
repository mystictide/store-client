"use server";

export default async function Footer() {
  return (
    <footer className="bg flex-column flex-center">
      <h5 className="">
        Homie is a personal portfolio project and is not capable of serving
        customers.
      </h5>
      <h5>@{new Date().getFullYear()}</h5>
    </footer>
  );
}
