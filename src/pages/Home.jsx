import React, { useState } from 'react'
import Error from "/src/components/Error/Error";
import SearchInput from "/src/components/Search/SearchInput";
import Layout from "/src/components/Layout/Layout";

const Home = () => {
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')
    return (
        <>
            <Layout>
                <SearchInput
                    search={search}
                    setSearch={setSearch}
                    setType={setType}
                />
                <Error
                    search={search}
                    type={type}
                />
            </Layout>

        </>
    )
}

export default Home