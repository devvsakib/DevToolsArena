import React from "react";
import { MdClear, MdSearch } from "react-icons/md";

function SearchInput({ search, setSearch }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex mx-auto mt-12 items-center gap-4 py-3 px-6 rounded-lg bg-white w-11/12 md:w-5/6"
    >
      <MdSearch className="text-gray text-2xl" />
      <input
        type="search"
        id="searchbox"
        value={search}
        className="w-full text-sm md:text-base focus:outline-none placholder:font-semibold text-dark bg-transparent"
        placeholder="Search for errors"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="focus:outline-none" onClick={() => setSearch("")}>
        <MdClear className="text-gray text-xl" />
      </button>
    </form>
  );
}

export default SearchInput;
