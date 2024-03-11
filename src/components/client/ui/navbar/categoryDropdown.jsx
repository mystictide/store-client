"use client";

import { formatPrettyURL } from "@/assets/js/helpers";

export default function CategoryDropdown({
  category,
  categories,
  setDropdownVisible,
}) {
  return (
    <ul
      className="list dropdown bg h-full flex-column flex-center"
      onMouseLeave={() => setDropdownVisible(false)}
    >
      {categories
        ?.filter((c) => c.Parent.ID === category.ID)
        .map((category) => (
          <li key={category.ID} className="h-full w-full flex-row flex-center">
            <a
              className="h-full w-full flex-row flex-center"
              href={`/category/${formatPrettyURL(category.Name)}`}
            >
              {category.Name}
            </a>
          </li>
        ))}
    </ul>
  );
}
