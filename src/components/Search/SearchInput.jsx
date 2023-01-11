const errorType = ["push", "commit", "merge", "pull", "add", "branch"]

function SearchInput({ search, setSearch, setType }) {
    return (
        <div className="search-div container mt-2 pt-2 mx-auto mb-[2.5rem]">
            <div className="text-center p-4">
                <form onSubmit={e => e.preventDefault()}>

                    <input
                        type="search"
                        id="searchbox"
                        className="search p-4 text-center outline-none rounded-full w-[80%] bg-slate-800"
                        placeholder="Search Error, Solution, Type, etc..."
                        value={search}
                        onChange={e => {setSearch(e.target.value); setType("")}}
                    />
                </form>
            </div>
            <div className="types mt-2">
                <ul className='flex justify-between w-auto md:w-[60%] md:mx-auto'>
                    {
                        errorType.map((item, i) => (
                            <li key={i} className={`${item === "add" ? "bg-[#4024e0]" : item === "commit" ? "bg-[#1a5ba5]" : item === "push" ? "bg-[#1aa0a5]" : "bg-[#7e1aa5]"} rounded-md text-white font-bold py-1 px-3 cursor-pointer`}
                                onClick={() => setType(item)}
                            >{item}</li>
                        ))


                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchInput