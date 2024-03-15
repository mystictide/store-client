"use client";

import CategoryItem from "./categoryItem";

export default function NavbarCategories({ categories }) {
  return (
    <div className="navbar-categories flex w-full h-full flex-column flex-start">
      <ul className="list nav h-full flex-row flex-center">
        {categories[0].ID
          ? categories
              ?.filter((c) => !c.Parent.ID)
              .map((category) => (
                <CategoryItem
                  key={category.ID}
                  category={category}
                  categories={categories}
                />
              ))
          : ""}
      </ul>
    </div>
  );
}
