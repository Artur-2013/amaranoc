const REGIONS = [
  { name: "Դիլիջան", count: 179 },
  { name: "Ծաղկաձոր", count: 103 },
  { name: "Աշտարակ", count: 37 },
  { name: "Գառնի", count: 35 },
  { name: "Երևան", count: 25 },
];

const AMENITIES = [
  "Շոգեբաղնիք",
  "Ջակուզի",
  "Բիլիարդ",
  "Սեղանի թենիս",
  "Բացօթյա տաղավար",
  "Փակ տաղավար",
  "Մանղալ",
  "Թոնիր",
];

const CURRENCIES = ["֏", "$", "€", "₽"];

const ALL = { label: "Բոլորը", value: "all" };
const OVERNIGHT = [ALL, { label: "Այո", value: "yes" }, { label: "Ոչ", value: "no" }];
const BEDROOMS = [ALL, ...[1, 2, 3, 4, 5].map((n) => ({ label: String(n), value: n })), { label: "6 և ավելի", value: 6 }];
const BATHROOMS = [ALL, { label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3+", value: 3 }];
const POOL = [
  ALL,
  { label: "Բաց", value: "open" },
  { label: "Փակ", value: "closed" },
  { label: "Տաքացվող", value: "heated" },
  { label: "Առանց լողավազանի", value: "none" },
];

export const initialFilters = {
  regions: [],
  currency: "֏",
  priceFrom: "",
  priceTo: "",
  guests: 1,
  overnight: "all",
  overnightGuests: 0,
  bedrooms: "all",
  bathrooms: "all",
  pool: "all",
  amenities: [],
};

function Section({ title, children }) {
  return (
    <div className="f-section">
      <h4 className="f-title">{title}</h4>
      {children}
    </div>
  );
}

function ChipGroup({ options, value, onChange }) {
  return (
    <div className="chips">
      {options.map((o) => (
        <button
          type="button"
          key={o.value}
          className={"chip" + (o.value === value ? " active" : "")}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Counter({ value, onChange, min = 0 }) {
  return (
    <div className="counter">
      <button type="button" disabled={value <= min} onClick={() => onChange(value - 1)}>
        -
      </button>
      <input readOnly value={value} />
      <button type="button" onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
}

function CheckList({ items, selected, onToggle, scroll, renderCount }) {
  return (
    <ul className={"checks" + (scroll ? " scroll" : "")}>
      {items.map((item) => (
        <li key={item.name}>
          <label>
            <input
              type="checkbox"
              checked={selected.includes(item.name)}
              onChange={() => onToggle(item.name)}
            />
            <span>{item.name}</span>
            {renderCount && <em>{item.count}</em>}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function Filters({ value, onChange }) {
  const set = (key, v) => onChange({ ...value, [key]: v });
  const toggle = (key, name) => {
    const list = value[key];
    set(key, list.includes(name) ? list.filter((x) => x !== name) : [...list, name]);
  };

  return (
    <aside className="filters">
      <Section title="Տարածաշրջան">
        <CheckList
          scroll
          renderCount
          items={REGIONS}
          selected={value.regions}
          onToggle={(n) => toggle("regions", n)}
        />
      </Section>

      <Section title="Արժեք">
        <div className="currency">
          {CURRENCIES.map((c) => (
            <button
              type="button"
              key={c}
              className={"round" + (c === value.currency ? " active" : "")}
              onClick={() => set("currency", c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="range">
          <input
            type="number"
            placeholder="Սկսած"
            value={value.priceFrom}
            onChange={(e) => set("priceFrom", e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Մինչև"
            value={value.priceTo}
            onChange={(e) => set("priceTo", e.target.value)}
          />
        </div>
      </Section>

      <Section title="Մարդկանց թույլատրելի քանակ">
        <Counter value={value.guests} min={1} onChange={(v) => set("guests", v)} />
      </Section>

      <Section title="Գիշերակացի առկայություն">
        <ChipGroup options={OVERNIGHT} value={value.overnight} onChange={(v) => set("overnight", v)} />
      </Section>

      <Section title="Մարդկանց թույլատրելի քանակը գիշերակացով">
        <Counter value={value.overnightGuests} onChange={(v) => set("overnightGuests", v)} />
      </Section>

      <Section title="Սենյակների քանակ">
        <ChipGroup options={BEDROOMS} value={value.bedrooms} onChange={(v) => set("bedrooms", v)} />
      </Section>

      <Section title="Սանհանգույցների քանակ">
        <ChipGroup options={BATHROOMS} value={value.bathrooms} onChange={(v) => set("bathrooms", v)} />
      </Section>

      <Section title="Լողավազան">
        <ChipGroup options={POOL} value={value.pool} onChange={(v) => set("pool", v)} />
      </Section>

      <Section title="Առավելություններ">
        <CheckList
          scroll
          items={AMENITIES.map((name) => ({ name }))}
          selected={value.amenities}
          onToggle={(n) => toggle("amenities", n)}
        />
      </Section>
    </aside>
  );
}