import { useState } from "react";
import "./index.css";
import Error from "./components/Error/Error";
import SearchInput from "./components/Search/SearchInput";
import Layout from "./components/Layout/Layout";
import BGShape from "./components/BGShape";
// import { Route, Routes } from "react-router-dom";
// import NotFound from "./pages/404";


function App() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  return (

    <>
    {/* <Routes>
    <Route errorElement={<NotFound></NotFound>} path='*'/>
    </Routes> */}
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
  );
}

export default App;