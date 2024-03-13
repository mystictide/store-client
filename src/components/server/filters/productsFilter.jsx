"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

export default function ProductsFilter({ categories, brands, filter }) {
  const router = useRouter();
  const [filterHidden, setFilterHidden] = useState(true);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    let url = await buildURL();
    router.push(
      `/products/?keyword=${e.target.keyword.value}&sortby=${e.target.sortBy.value}${url}`
    );
    setFilterHidden((prevState) => !prevState);
  };

  const buildURL = async () => {
    let url = "";
    if (category?.length > 0) {
      url += `&categories=${category?.map((x) => x.Name)}`;
    }
    if (brand?.length > 0) {
      url += `&brands=${brand?.map((x) => x.Name)}`;
    }
    return url;
  };

  return (
    <>
      <button
        className="bg padding w-full m-view"
        onClick={() => setFilterHidden((prevState) => !prevState)}
      >
        Search & Filter
      </button>
      <section
        className={`sidebar-view flex-row flex-start align-start ${
          filterHidden ? "hidden" : ""
        }`}
      >
        <div className="flex-column sidebar filter">
          <section className="w-full h-full">
            <form className="flex-column" onSubmit={onSubmit}>
              <h5>Product name</h5>
              <input
                type="text"
                id="keyword"
                name="keyword"
                defaultValue={filter.keyword ?? ""}
                placeholder="...search by name"
              />
              <h5>Product categories</h5>
              <Select
                instanceId="category"
                id="category"
                name="category"
                className="r-select"
                classNamePrefix="r-select"
                value={category}
                onChange={setCategory}
                options={categories.filter((x) => x.Parent.ID > 0)}
                getOptionLabel={(options) => options["Name"]}
                getOptionValue={(options) => options["Name"]}
                isSearchable
                isMulti
              />
              <h5>Brands</h5>
              <Select
                instanceId="brands"
                id="brands"
                name="brands"
                className="r-select"
                classNamePrefix="r-select"
                value={brand}
                onChange={setBrand}
                options={brands}
                getOptionLabel={(options) => options["Name"]}
                getOptionValue={(options) => options["Name"]}
                isSearchable
                isMulti
              />
              <h5>Sort by</h5>
              <select
                id="sortBy"
                name="sortBy"
                defaultValue={filter.sortby ?? "desc"}
              >
                <option className="default" value="default" disabled>
                  ...sort by
                </option>
                <option value="desc">Latest</option>
                <option value="asc">Oldest</option>
              </select>
              <button
                aria-label="search"
                type="submit"
                className="flex-row flex-center h-full w-full padding"
              >
                Search
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
