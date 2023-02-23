import { Route, Routes } from "react-router-dom";
import About from "./screen/About";
import HomeScreen from "./screen/HomeScreen";
import NotFound from "./screen/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
