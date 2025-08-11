// components/AboutUs.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/about1.svg',
  '/about2.svg',
  '/about3.svg',
  '/about4.svg',
  '/about5.svg',
];

const stats = [
  {
    value: '8',
    label: 'Years experience',
    sub: 'Improving homes with expert craftsmanship for years',
  },
  {
    value: '26',
    label: 'Projects completed',
    sub: 'Over 250 successful projects delivered with quality and care',
  },
  {
    value: '30',
    label: 'Skilled Tradespeople',
    sub: 'Our team of 30 experts ensures top-quality results',
  },
  {
    value: '100%',
    label: 'Client satisfaction',
    sub: 'All of our clients are satisfied with our work and service',
  },
];

export default function AboutUs() {
  const duplicatedSlides = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-block px-4 py-1 bg-gray-200 rounded-full text-sm font-medium mb-4">
            About us
          </span>
          <h2 className="text-4xl font-bold leading-tight">
            Home Improvement Specialists
          </h2>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.p
          className="mt-6 max-w-2xl text-gray-600"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Welcome to LifetimeArt, your trusted home improvement
          experts, dedicated to transforming homes with precision and
          care. With years of experience in building kitchens,
          bathrooms, garages, and more, we take pride in delivering
          top-quality craftsmanship and a seamless customer
          experience. Our mission is to bring your vision to life
          while ensuring clear communication and expert guidance at
          every step. Let’s create a home you’ll love!
        </motion.p>
      </div>

      {/* Image Cards */}
      <div className="relative h-full overflow-hidden py-12 bg-white w-screen">
        <motion.div
          className="flex gap-6"
          style={{ width: 'max-content' }}
          initial={{ x: '-50%' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[260px] h-[320px] rounded-lg overflow-hidden"
            >
              <Image
                src={slide}
                alt={`About image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
                delay: i * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-2 font-medium">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
