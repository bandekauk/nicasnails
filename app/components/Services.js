import { site } from "@/lib/site.config";

function Column({ title, sub, items }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="cat-sub">{sub}</div>
      {items.map((it, i) => (
        <div className="row" key={i}>
          <span className="name">
            {it.name}
            {it.sub && <small>{it.sub}</small>}
          </span>
          <span className="dots" />
          <span className="price">{it.price}</span>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section className="section svcbg" id="services">
      <div className="wrap">
        <div className="sechead">
          <span className="eyebrow">Treatments</span>
          <h2>Services &amp; Rates</h2>
        </div>
        <div className="menu">
          <Column title="Nails" sub="Gel & builder" items={site.nails} />
          <Column title="Waxing" sub="Warm & strip" items={site.waxing} />
        </div>
        <p className="menu-note">
          Prices held as guides &mdash; final menu confirmed at booking.
          Full price list on the booking page.
        </p>
      </div>
    </section>
  );
}
