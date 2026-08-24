import { site } from "@/lib/site.config";

export default function Hero() {
  return (
    <section className="hero">
      <div className="script">Nica&rsquo;s</div>
      <div className="rule" />
      <div className="svc">NAILS &amp; WAXING</div>
      <div className="loc">EXETER &middot; HOME STUDIO</div>
      <p className="tag">
        Gel nails and waxing, done unhurried, in a calm home studio where
        you&rsquo;re the only appointment in the room.
      </p>
      <div className="cta">
        <a className="btn btn-solid" href={site.fresha} target="_blank" rel="noopener">Book online</a>
        <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a>
      </div>
    </section>
  );
}
