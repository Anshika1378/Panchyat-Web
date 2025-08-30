import Navigation from "./Home";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import News from "./News";
import Members from "./Members";
import Contact from "./Contact";
import Footer from "./Footer";


export default function PanchayatDemo() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <News />
      <Members />
      <Contact />
      <Footer />
    </div>
  );
}
