export default function About() {
  return (
    <section className="section about">
      <div className="wrap">
        <div className="divider">
          <span />
          <svg className="almond" width="20" height="34" viewBox="-16 -30 32 60" aria-hidden="true">
            <path d="M0,-24 C8.8,-24 13.5,-9 13.5,4 C13.5,16 8,24 0,24 C-8,24 -13.5,16 -13.5,4 C-13.5,-9 -8.8,-24 0,-24 Z" fill="none" stroke="#7A544B" strokeWidth="1.4" />
            <path d="M-5.5,-13 C-9,-4 -9,6 -4.5,16" fill="none" stroke="#C98F7E" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span />
        </div>
        <p style={{ marginTop: "40px" }}>
          A small independent studio in Exeter for gel manicures, builder gel, and
          waxing. No rushed conveyor belt, no crowded salon &mdash; just careful
          work, clean tools, and time to actually relax while it&rsquo;s done.
        </p>
        <div className="sign">Nica</div>
      </div>
    </section>
  );
}
