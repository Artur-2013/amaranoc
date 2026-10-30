import { useState } from "react";


const LOGO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLClJXKqYmohtA_JEZepgZ-DmyNPUI8tYW-PvzOW1zT1mohrYKE1yPMMNe&s=10";

const NAV = ["Գլխավոր", "Զեղչեր", "Ծառայություններ", "Մեր մասին"];

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function GlobeIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg {...iconProps} width="20" height="20">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  );
}

export default function Header() {
  const [active, setActive] = useState("Գլխավոր");

  return (
    <header className="header">
      <a className="logo" href="#top">
        <img src={LOGO_URL} alt="Լոգո" />
      </a>

      <nav className="nav">
        {NAV.map((item) => (
          <a
            key={item}
            href="#top"
            className={item === active ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="header-right">
        <button className="icon-btn" aria-label="Լեզու">
          <GlobeIcon />
        </button>
        <button className="icon-btn" aria-label="Մուտք">
          <UserIcon />
        </button>
        <label className="search">
          <input type="search" placeholder="Որոնում" />
          <SearchIcon />
        </label>
      </div>
    </header>
  );}