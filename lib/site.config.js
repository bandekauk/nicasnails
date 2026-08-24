// ============================================================
//  EDIT EVERYTHING HERE — this is the only file you need to
//  change to launch. Fill in the real values, then deploy.
// ============================================================
export const site = {
  // --- Booking & contact ---
  fresha: "https://www.fresha.com/REPLACE-WITH-NICAS-PAGE",
  phoneDisplay: "07123 456 789",   // shown on the page
  phoneTel: "+447123456789",       // dialable (no spaces, +44)
  email: "hello@nicasnails.co.uk",
  instagramUrl: "https://instagram.com/REPLACE",
  instagramHandle: "@nicasnails.exeter",

  // --- Opening hours ---
  hours: [
    { d: "Tue–Fri", t: "9–6" },
    { d: "Sat", t: "9–3" },
    { d: "Sun & Mon", t: "Closed" },
  ],

  // --- Rates (Devon ballparks — CONFIRM each) ---
  nails: [
    { name: "Gel manicure", price: "£28" },
    { name: "Builder gel", sub: "BIAB overlay", price: "£35" },
    { name: "Gel extensions", price: "£45" },
    { name: "Infills", price: "£32" },
    { name: "Gel pedicure", price: "£35" },
    { name: "Soak-off & removal", price: "£10" },
    { name: "Nail art", sub: "per nail", price: "from £3" },
  ],
  waxing: [
    { name: "Eyebrow shape", price: "£10" },
    { name: "Lip or chin", price: "£7" },
    { name: "Underarm", price: "£12" },
    { name: "Half leg", price: "£18" },
    { name: "Full leg", price: "£28" },
    { name: "Bikini", price: "£15" },
    { name: "Hollywood / Brazilian", price: "£30" },
  ],

  // --- Gallery ---
  // Leave [] to show placeholder tiles. To go live, drop images in
  // /public and list them here, e.g.:
  //   { src: "/work-01.jpg", alt: "Gel manicure in soft pink" },
  gallery: [],
};
