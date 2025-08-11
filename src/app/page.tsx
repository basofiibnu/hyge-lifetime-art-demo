import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/Services';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesSection />
    </>
  );
}
