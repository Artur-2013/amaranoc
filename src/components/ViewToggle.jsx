function Squares({ count }) {
  return (
    <span className="squares">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}

export default function ViewToggle({ value, onChange }) {
  return (
    <div className="view-toggle">
      {[2, 3].map((n) => (
        <button
          type="button"
          key={n}
          className={n === value ? "active" : ""}
          onClick={() => onChange(n)}
          aria-label={`${n} սյունակ`}
        >
          <Squares count={n} />
        </button>
      ))}
    </div>
  );
}