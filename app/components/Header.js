import { site } from "@/lib/site.config";

export default function Header() {
  return (
    <header className="site">
      <div className="wrap bar">
        <a className="brandmini" href="#top" aria-label="Nica's Nails and Waxing, home">
          <span className="s">Nica&rsquo;s</span>
          <span className="u">NAILS &amp; WAXING</span>
        </a>
        <nav className="links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-solid book" href={site.fresha} target="_blank" rel="noopener">Book</a>
      </div>
    </header>
  );
}
