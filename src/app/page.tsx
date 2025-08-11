import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import ServicesSection from './sections/Services';
import OurWorkSection from './sections/OurWork';
import TestimonialsSection from './sections/Testimonial';
import FAQSection from './sections/Faq';
import ContactSection from './sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesSection />
      <OurWorkSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
