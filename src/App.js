import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact";
import Commercial from "./pages/Commercial";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/commercial" element={<Commercial />} />
          {/* <Route path="/gallery" element={<Contact />} /> */}
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/employment" element={<Contact />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
