const svg = {
  width: 40,
  height: 40,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICONS = {
  villas: (
    <svg {...svg}>
      <path d="M6 22 24 8l18 14" />
      <path d="M10 20v20h28V20" />
      <path d="M20 40V28h8v12" />
    </svg>
  ),
  frame: (
    <svg {...svg}>
      <path d="M24 6 6 40h36L24 6z" />
      <path d="M17 40l7-24 7 24" />
      <path d="M20 30h8" />
    </svg>
  ),
  cabins: (
    <svg {...svg}>
      <path d="M8 22 24 8l16 14" />
      <path d="M12 22v18h24V22" />
      <path d="M12 28h24M12 34h24" />
    </svg>
  ),
  pool: (
    <svg {...svg}>
      <path d="M18 30V12M28 30V12" />
      <path d="M18 18h10M18 24h10" />
      <path d="M6 36c3-3 6-3 9 0s6 3 9 0 6-3 9 0 6 3 9 0" />
      <path d="M6 42c3-3 6-3 9 0s6 3 9 0 6-3 9 0 6 3 9 0" />
    </svg>
  ),
  quiet: (
    <svg {...svg}>
      <path d="M16 6 8 20h5L6 32h20l-7-12h5L16 6z" />
      <path d="M16 32v8" />
      <path d="M30 24l8-8 8 8v10H30z" />
      <path d="M4 42h40" />
    </svg>
  ),
  view: (
    <svg {...svg}>
      <path d="M4 38 18 14l10 16 6-8 10 16z" />
      <circle cx="34" cy="11" r="4" />
      <path d="M6 43h36" />
    </svg>
  ),
  family: (
    <svg {...svg}>
      <circle cx="16" cy="14" r="5" />
      <circle cx="32" cy="14" r="5" />
      <path d="M6 38c0-8 4-14 10-14s10 6 10 14" />
      <path d="M22 38c0-8 4-14 10-14s10 6 10 14" />
    </svg>
  ),
  party: (
    <svg {...svg}>
      <path d="M24 6l4 10 10 2-8 7 2 11-8-6-8 6 2-11-8-7 10-2z" />
    </svg>
  ),
};

const CATEGORIES = [
  { id: "villas", label: "Ամառանոցներ" },
  { id: "frame", label: "Frame houses" },
  { id: "cabins", label: "Տնակներ" },
  { id: "pool", label: "Փակ լողավազան" },
  { id: "quiet", label: "Աղմուկից հեռու" },
  { id: "view", label: "Շքեղ տեսարան" },
  { id: "family", label: "Ընտանեկան" },
  { id: "party", label: "Միջոցառումների համար" },
];

export default function Categories({ value, onChange }) {
  return (
    <div className="categories">
      {CATEGORIES.map((c) => (
        <button
          type="button"
          key={c.id}
          className={"cat" + (c.id === value ? " active" : "")}
          onClick={() => onChange(c.id === value ? null : c.id)}
        >
          <span className="cat-icon">{ICONS[c.id]}</span>
          <span className="cat-label">{c.label}</span>
        </button>
      ))}
    </div>
  );
}