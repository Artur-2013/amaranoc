import { useState } from "react";

const DOTS = 8;
const ACTIVE_DOT = 7;

const icon = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function PinIcon() {
  return (
    <svg {...icon}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg {...icon}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M15 14.5c.6-.3 1.3-.5 2-.5 2.2 0 4 1.8 4 4" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg {...icon}>
      <path d="M3 12V4h8l10 10-8 8L3 12z" />
      <circle cx="8" cy="9" r="1.5" />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg {...icon} fill={filled ? "currentColor" : "none"}>
      <path d="M12 20s-7-4.5-9-9.2C1.8 7.6 3.8 5 6.7 5c1.9 0 3.3 1 5.3 3 2-2 3.4-3 5.3-3 2.9 0 4.9 2.6 3.7 5.8-2 4.7-9 9.2-9 9.2z" />
    </svg>
  );
}

export default function OfferCard({ offer }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="offer">
      <div className="offer-photo">
        <img src={offer.image} alt={offer.city} />

        <button
          type="button"
          className={"heart" + (liked ? " liked" : "")}
          onClick={() => setLiked((v) => !v)}
          aria-label="Ընտրյալ"
        >
          <HeartIcon filled={liked} />
        </button>

        <div className="dots">
          {Array.from({ length: DOTS }).map((_, i) => (
            <span key={i} className={i === ACTIVE_DOT ? "active" : ""} />
          ))}
        </div>
      </div>

      <div className="offer-body">
        <div className="offer-row">
          <span className="offer-meta">
            <PinIcon />
            {offer.city}
          </span>
          <span className="offer-meta">
            <PeopleIcon />
            {offer.guests}
          </span>
          {offer.rating && <span className="rating">★ {offer.rating}</span>}
        </div>

        <div className="offer-price">
          <TagIcon />
          <strong>{offer.price.toLocaleString("en-US")} ֏</strong>
        </div>
      </div>
    </article>
  );
}