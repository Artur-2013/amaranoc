import DiscountCard from "../components/DiscountCard.jsx";
import GiftCard from "../components/GiftCard.jsx";
import HotOffers from "../components/HotOffers.jsx";
import PostAd from "../components/PostAd.jsx";
import { discounts } from "../data/discounts.js";

export default function Second() {
  return (
    <>
      <main className="sales">
        <div className="sec-title">
          <span className="line" />
          <h2>Հատուկ զեղչեր</h2>
          <span className="line" />
        </div>

        <div className="discount-grid">
          {discounts.map((d) => (
            <DiscountCard key={d.id} item={d} />
          ))}
        </div>

        <GiftCard />
        <HotOffers />
      </main>

      <PostAd />
    </>
  );
}


