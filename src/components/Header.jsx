import React from "react";
import Searchbox from "./Searchbox";
import SortTerm from "./SortTerm";

export default function Header({ onSearch, onSort }) {
  return (
    <header class="mx-auto mb-8 max-w-7xl lg:mb-10">
      <div class="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <div>
          <h6 class="mb-2 text-base lg:text-xl">Trending on 2021</h6>
          <h2 class="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
            Trending Books of the Year
          </h2>

          <Searchbox onSearch={onSearch} />
        </div>

        <SortTerm onSort={onSort} />
      </div>
    </header>
  );
}
