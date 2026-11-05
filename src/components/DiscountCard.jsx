export default function DiscountCard({ item }) {
  return (
    <article
      className="discount"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="discount-shade" />
      <div className="discount-body">
        <strong className="discount-percent">{item.percent}</strong>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}