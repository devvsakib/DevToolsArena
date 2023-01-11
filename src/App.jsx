import { useState } from "react";
import "./index.css";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import SearchInput from "./components/Search/SearchInput";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header notice={"Under Constraction"} />
      <SearchInput search={search} setSearch={setSearch} />
      <Error search={search} />
    </>
  );
}

export default App;
