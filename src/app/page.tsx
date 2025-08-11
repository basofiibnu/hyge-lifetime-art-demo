import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
    </>
  );
}
