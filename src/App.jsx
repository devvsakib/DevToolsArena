import "./index.css";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Doc from "./pages/Doc";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="doc" element={<Doc />} />
    </Routes>
  );
}

export default App;