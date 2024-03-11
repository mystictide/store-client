"use client";

import { formatPrettyURL } from "@/assets/js/helpers";
import { useState } from "react";
import CategoryDropdown from "./categoryDropdown";

export default function CategoryItem({ categories, category }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  return (
    <li
      key={category.ID}
      className="h-full"
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <a
        className="h-full flex-row flex-center padding bold"
        href={`/category/${formatPrettyURL(category.Name)}`}
      >
        {category.Name}
      </a>
      {isDropdownVisible ? (
        <CategoryDropdown
          category={category}
          categories={categories}
          setDropdownVisible={setDropdownVisible}
        />
      ) : (
        ""
      )}
    </li>
  );
}
