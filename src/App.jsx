import { useState } from "react";
import Header from "./components/Header.jsx";
import Filters, { initialFilters } from "./components/Filters.jsx";

export default function App() {
  const [filters, setFilters] = useState(initialFilters);

  return (
    <div className="page">
      <Header />
      <div className="layout">
        <Filters value={filters} onChange={setFilters} />
        <main className="content">{/* այստեղ կլինեն քարտերը */}</main>
      </div>
    </div>
  );
}