import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import ServicesSection from './sections/Services';
import OurWorkSection from './sections/OurWork';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesSection />
      <OurWorkSection />
    </>
  );
}
