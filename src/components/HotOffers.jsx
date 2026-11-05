import { useState } from "react";
import PriceFilter from "./PriceFilter.jsx";
import OfferCard from "./OfferCard.jsx";
import { CURRENCIES } from "../data/currency.js";
import { hotOffers } from "../data/hotOffers.js";

export default function HotOffers() {
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [range, setRange] = useState([0, 400000]);

  const visible = hotOffers.filter(
    (o) => o.price >= range[0] && o.price <= range[1]
  );

  return (
    <section className="hot">
      <div className="sec-title">
        <span className="line" />
        <h2>Թեժ առաջարկներ</h2>
        <span className="line" />
      </div>

      <PriceFilter
        currency={currency}
        onCurrency={setCurrency}
        value={range}
        onChange={setRange}
      />

      <div className="grid" style={{ "--cols": 3 }}>
        {visible.map((o) => (
          <OfferCard
            key={o.id}
            offer={o}
            currency={currency.symbol}
            rate={currency.rate}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="hot-empty">Այս գնային տիրույթում առաջարկ չկա</p>
      )}
    </section>
  );
}