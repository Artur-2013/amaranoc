import { useState } from "react";
import Filters, { initialFilters } from "../components/Filters.jsx";
import Toolbar from "../components/Toolbar.jsx";
import Categories from "../components/Categories.jsx";
import ViewToggle from "../components/ViewToggle.jsx";
import OfferCard from "../components/OfferCard.jsx";
import PostAd from "../components/PostAd.jsx";
import { offers } from "../data/offers.js";

export default function Home() {
  const [filters, setFilters] = useState(initialFilters);
  const [category, setCategory] = useState(null);
  const [cols, setCols] = useState(3);

  return (
    <>
      <div className="layout">
        <Filters value={filters} onChange={setFilters} />

        <main className="content">
          <Toolbar />
          <Categories value={category} onChange={setCategory} />

          <div className="section-head">
            <h2>Լավագույն առաջարկներ</h2>
            <ViewToggle value={cols} onChange={setCols} />
          </div>

          <div className="grid" style={{ "--cols": cols }}>
            {offers.map((o) => (
              <OfferCard key={o.id} offer={o} />
            ))}
          </div>
        </main>
      </div>

      <PostAd />
    </>
  );
}