
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Second from "./pages/Second.jsx";

export default function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
      </Routes>

      <Footer />
    </div>
  );
}