import { useEffect, useState } from "react";
import "./index.css";
import Error from "./components/Error/Error";
import SearchInput from "./components/Search/SearchInput";
import Layout from "./components/Layout/Layout";

function App() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [countStar, setCountStar] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/repos/devvsakib/github-error-solve")
      .then((response) => response.json())
      .then((data) => setCountStar(data.stargazers_count))
      .catch((error) => console.error("Error fetching GitHub stars:", error));
  }, []);
console.log(countStar)
  return (
    <>
      <Layout stars={countStar}>
        <SearchInput search={search} setSearch={setSearch} setType={setType} />
        <Error search={search} type={type} />
      </Layout>
    </>
  );
}

export default App;
