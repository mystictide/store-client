"use client";

export default function Breadcrumbs({ category }) {
  return (
    <div className="w-full flex-column padding">
      <ul className="flex-row half-gap">
        <li className="text-small">
          <a className="link" href="/products/">Home</a>{" >"}
        </li>
        <li className="text-small">
          {category.Parent.Name} {">"}
        </li>
        <li className="text-small">
          <a className="link" href={`/products/?categories=${category.Name}`}>{category.Name}</a>
        </li>
      </ul>
    </div>
  );
}
