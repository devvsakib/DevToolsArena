import { useState } from "react";
import "./index.css";
<<<<<<< HEAD
import {
  Routes,
  Route
} from "react-router-dom";
import Doc from "./pages/Doc";
import Home from "./pages/Home";
=======
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import SearchInput from "./components/Search/SearchInput";
import Layout from "./components/Layout/Layout";
>>>>>>> parent of 8d9c392 (pages created)

function App() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Doc" element={<Doc />} />
    </Routes>
=======
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
>>>>>>> parent of 8d9c392 (pages created)
  );
}

export default App;