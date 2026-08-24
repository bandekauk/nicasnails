import { site } from "@/lib/site.config";

export default function Footer() {
  return (
    <footer className="site" id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <div className="lbl">Book &amp; enquire</div>
            <a href={site.fresha} target="_blank" rel="noopener">Book on Fresha</a><br />
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a><br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="foot-col">
            <div className="lbl">Find me</div>
            <a href={site.instagramUrl} target="_blank" rel="noopener">
              Instagram {site.instagramHandle}
            </a><br />
            <p>Home studio, Exeter<br />Address shared on booking</p>
          </div>
          <div className="foot-col">
            <div className="lbl">Hours</div>
            <p>
              {site.hours.map((h, i) => (
                <span key={i}>{h.d}&nbsp;&nbsp;{h.t}<br /></span>
              ))}
            </p>
          </div>
        </div>
        <div className="foot-brand">Nica&rsquo;s</div>
        <div className="foot-fine">
          Nica&rsquo;s Nails &amp; Waxing &middot; Exeter &middot; Fully insured<br />
          &copy; 2026 &mdash; All rights reserved
        </div>
      </div>
    </footer>
  );
}
