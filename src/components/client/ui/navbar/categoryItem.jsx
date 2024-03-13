"use client";

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
      <h4 className="h-full flex-row flex-center padding bold no-select">
        {category.Name}
      </h4>
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
