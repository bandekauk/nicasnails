import { site } from "@/lib/site.config";

export default function BookingBand() {
  return (
    <section className="band" id="book">
      <div className="script">Ready when you are</div>
      <p>
        Booking is online through Fresha &mdash; pick your treatment, choose a
        time, and you&rsquo;ll get the studio address in your confirmation.
      </p>
      <a className="btn btn-solid" href={site.fresha} target="_blank" rel="noopener">
        Book an appointment
      </a>
      <div className="meta">Home studio &middot; Exeter &amp; surrounding areas</div>
    </section>
  );
}
