import { useState } from "react";

const AMOUNTS = [50000, 60000, 70000, 80000, 90000, 100000];

export default function GiftCard() {
  const [amount, setAmount] = useState(null);
  const [ordered, setOrdered] = useState(false);

  const pick = (value) => {
    setAmount(value);
    setOrdered(false);
  };

  return (
    <section className="gift">
      <div className="gift-info">
        <h2>
          Պատվիրի՛ր <span>նվեր քարտ</span> քո կամ ընկերներիդ համար
        </h2>
        <hr />
        <p>
          Նվիրեք անմոռանալի հանգիստ ձեր հարազատներին և ընկերներին։ Նվեր քարտը
          թույլ է տալիս ընտրել ամառանոց ըստ ձեր ճաշակի և ամրագրել այն ձեզ
          հարմար ժամանակ։ Ընտրեք քարտի գումարը և պատվիրեք։
        </p>
      </div>

      <div className="gift-order">
        <div className="gift-brand">Ամառանոցներ</div>

        <div className="gift-amounts">
          {AMOUNTS.map((a) => (
            <button
              type="button"
              key={a}
              className={a === amount ? "active" : ""}
              onClick={() => pick(a)}
            >
              {a.toLocaleString("en-US")} ֏
            </button>
          ))}
        </div>

        <button
          type="button"
          className="gift-submit"
          disabled={!amount}
          onClick={() => setOrdered(true)}
        >
          Պատվիրել
        </button>

        {ordered && (
          <p className="gift-ok">
            ✓ Ընտրված է {amount.toLocaleString("en-US")} ֏ քարտ։ Մենք կկապվենք ձեզ հետ։
          </p>
        )}
      </div>
    </section>
  );
}