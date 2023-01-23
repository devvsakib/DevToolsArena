import "./index.css";
import {
  Routes,
  Route
} from "react-router-dom";
import Doc from "./pages/Doc";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Doc" element={<Doc />} />
    </Routes>
  );
}

export default App;