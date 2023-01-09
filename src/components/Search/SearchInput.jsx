import React, { useState } from 'react'
function SearchInput() {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const e = e => setSearchValue(e.target.value)


    return (
        <div className="search-div container mt-5 pt-2 mx-auto">
            <div className="text-center p-4">
                <form>

                    <input
                        type="search"
                        id="searchbox"
                        className="search p-4 text-center outline-none rounded-full w-[80%] bg-slate-800"
                        placeholder="Search Error"
                        value={searchValue}
                        onChange={e}

                    />
                </form>
            </div>
        </div>
    )
}

export default SearchInput