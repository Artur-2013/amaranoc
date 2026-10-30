import { useState } from "react";

const BG_URL = "https://amaranoc.am/images/footer/home-add-application.png";

export default function PostAd() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <section className="post-ad" style={{ backgroundImage: `url(${BG_URL})` }}>
      <div className="post-card">
        <div className="post-title">
          <span className="line" />
          <h2>Տեղադրել հայտարարություն</h2>
          <span className="line" />
        </div>

        <p className="post-sub">
          Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
        </p>

        {sent ? (
          <p className="post-ok">✓ Շնորհակալություն, հայտը ուղարկված է։</p>
        ) : (
          <form className="post-form" onSubmit={submit}>
            <input
              name="name"
              required
              placeholder="Անուն Ազգանուն"
              value={form.name}
              onChange={change}
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Հեռախոսահամար"
              value={form.phone}
              onChange={change}
            />
            <input
              name="email"
              type="email"
              placeholder="Էլ. հասցե"
              value={form.email}
              onChange={change}
            />
            <button type="submit">Ուղարկել</button>
          </form>
        )}
      </div>
    </section>
  );
}