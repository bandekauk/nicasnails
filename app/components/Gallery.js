import { site } from "@/lib/site.config";

export default function Gallery() {
  const imgs = site.gallery || [];
  const tiles = imgs.length
    ? imgs.map((g, i) => (
        <div className="tile" key={i}>
          <img src={g.src} alt={g.alt || "Nica's work"} />
        </div>
      ))
    : Array.from({ length: 6 }).map((_, i) => (
        <div className="tile" key={i}>
          <span className="ph">Your work here</span>
        </div>
      ));

  return (
    <section className="section" id="gallery" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="grid" style={{ marginTop: 0 }}>{tiles}</div>
        <div className="gallery-cta">
          <a href={site.instagramUrl} target="_blank" rel="noopener">
            Follow on Instagram {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}