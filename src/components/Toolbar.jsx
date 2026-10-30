const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function Toolbar() {
  return (
    <div className="toolbar">
      <button className="pill-btn" type="button">
        <span>Քարտեզ</span>
        <svg {...iconProps}>
          <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      </button>
      <button className="round-btn" type="button" aria-label="Օրացույց">
        <svg {...iconProps}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M4 10h16M9 3v4M15 3v4" />
        </svg>
      </button>
    </div>
  );
}