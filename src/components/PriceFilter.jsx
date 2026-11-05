import { CURRENCIES } from "../data/currency.js";

const MIN = 0;
const MAX = 400000;
const STEP = 5000;

export default function PriceFilter({ currency, onCurrency, value, onChange }) {
  const [lo, hi] = value;
  const left = ((lo - MIN) / (MAX - MIN)) * 100;
  const right = ((hi - MIN) / (MAX - MIN)) * 100;

  const show = (amd) =>
    Math.round(amd * currency.rate).toLocaleString("en-US") +
    " " +
    currency.symbol;

  return (
    <div className="hot-filter">
      <div className="hot-currency">
        <span className="f-title">Տարադրամ</span>
        <div className="currency">
          {CURRENCIES.map((c) => (
            <button
              type="button"
              key={c.symbol}
              className={"round" + (c.symbol === currency.symbol ? " active" : "")}
              onClick={() => onCurrency(c)}
            >
              {c.symbol}
            </button>
          ))}
        </div>
      </div>

      <div className="hot-range">
        <div className="range-labels">
          <span>{show(lo)}</span>
          <span>{show(hi)}</span>
        </div>

        <div className="range-wrap">
          <div className="range-track">
            <div
              className="range-fill"
              style={{ left: left + "%", right: 100 - right + "%" }}
            />
          </div>

          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={lo}
            className={lo >= MAX - STEP * 2 ? "top" : ""}
            onChange={(e) =>
              onChange([Math.min(Number(e.target.value), hi - STEP), hi])
            }
          />
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={hi}
            onChange={(e) =>
              onChange([lo, Math.max(Number(e.target.value), lo + STEP)])
            }
          />
        </div>
      </div>
    </div>
  );
}