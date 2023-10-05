import { useState } from "react";
import "./index.css";
import Error from "./components/Error/Error";
import SearchInput from "./components/Search/SearchInput";
import Layout from "./components/Layout/Layout";
import BGShape from "./components/BGShape";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <ThemeProvider>
        <Layout>
          <SearchInput search={search} setSearch={setSearch} setType={setType} />
          <Error search={search} type={type} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
