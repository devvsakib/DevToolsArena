import React, { useState } from 'react'
function SearchInput({ search, setSearch}) {


    return (
        <div className="search-div container mt-5 pt-2 mx-auto">
            <div className="text-center p-4">
                <form>

                    <input
                        type="search"
                        id="searchbox"
                        className="search p-4 text-center outline-none rounded-full w-[80%] bg-slate-800"
                        placeholder="Search Error"
                        value={search}
                        onChange={e=> setSearch(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default SearchInput