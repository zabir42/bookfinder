import React, { useState } from 'react';

export default function Searchbox({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchTerm);
    onSearch(searchTerm);
}
  return (
    <form onSubmit={handleSubmit}>
    <div class="flex">
      <div
        class="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]"
      >
        <input
          type="search"
          id="search-dropdown"
          class="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          placeholder="Search Book"
          required
        />
        <div class="absolute right-0 top-0 flex h-full items-center">
          <button
            type="submit"
            class="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
          >
            <svg
              class="h-[14px] w-[14px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  </form>
  )
}
