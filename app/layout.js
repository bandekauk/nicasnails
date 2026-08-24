import { Cormorant_Garamond, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"], weight: ["300", "400", "500"],
  variable: "--font-display", display: "swap",
});
const body = Jost({
  subsets: ["latin"], weight: ["300", "400", "500"],
  variable: "--font-body", display: "swap",
});
const script = Pinyon_Script({
  subsets: ["latin"], weight: "400",
  variable: "--font-script", display: "swap",
});

export const metadata = {
  title: "Nica's Nails & Waxing — Home Studio, Exeter",
  description: "Gel nails and waxing from a calm home studio in Exeter. Book online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
