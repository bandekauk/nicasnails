import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import BookingBand from "./components/BookingBand";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
		<Gallery />
        <About />
        <Services />
        <BookingBand />
      </main>
      <Footer />
    </>
  );
}

