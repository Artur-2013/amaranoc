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

const PhoneIcon = () => (
  <svg {...icon}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
const MailIcon = () => (
  <svg {...icon}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const InstagramIcon = () => (
  <svg {...icon}>
    <rect x="4" y="4" width="16" height="16" rx="5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17" cy="7" r="0.8" fill="currentColor" />
  </svg>
);
const FacebookIcon = () => (
  <svg {...icon}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
  </svg>
);
const PinIcon = () => (
  <svg {...icon}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const FOOTER_IMG = "https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1920&q=75";

const CONTACTS = [
  { icon: <PhoneIcon />, text: "041-611-611" },
  { icon: <MailIcon />, text: "amaranoc.info@gmail.com" },
  { icon: <InstagramIcon />, text: "amaranoc.am" },
  { icon: <FacebookIcon />, text: "amaranoc.am" },
  { icon: <PinIcon />, text: "թումանյան 5" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-title">Կոնտակտներ</h2>

      <ul className="footer-contacts">
        {CONTACTS.map((c) => (
          <li key={c.text}>
            {c.icon}
            <span>{c.text}</span>
          </li>
        ))}
      </ul>

      <p className="footer-privacy">Գաղտնիության քաղաքականություն</p>

      <p className="footer-companies">
              <span>Ամառանոց ՍՊԸ</span>
        <i />
        <span>Amaranoc LLC</span>
        <i />
        <span>Амараноц ООО</span>
      </p>

      <img className="footer-img" src={FOOTER_IMG} alt="" />
    </footer>
  );
}