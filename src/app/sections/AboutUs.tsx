// components/AboutUs.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import InfiniteMarquee from '../components/InfiniteMarquee';
import { Slider } from '../components/Slider';

const images = [
  '/about1.png',
  '/about2.png',
  '/about3.png',
  '/about4.png',
  '/about5.png',
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
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden w-full">
      <div className="px-10 xl:px-20 py-[120px] max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start lg:items-center justify-center gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-1 w-full"
          >
            <span className="px-3 py-2 bg-[#28282C] rounded-full text-base font-semibold leading-3.5 text-white w-fit">
              About us
            </span>
            <h2 className="text-[40px] sm:text-5xl font-medium leading-14 text-[#101014] tracking-[-0.8px] max-w-[60%]">
              Home Improvement Specialists
            </h2>
          </motion.div>

          {/* Intro Paragraph */}
          <motion.p
            className="text-[3D3D47] text-xl leading-[34px] font-normal w-full tracking-[-0.3px]"
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
            experts, dedicated to transforming homes with precision
            and care. With years of experience in building kitchens,
            bathrooms, garages, and more, we take pride in delivering
            top-quality craftsmanship and a seamless customer
            experience. Our mission is to bring your vision to life
            while ensuring clear communication and expert guidance at
            every step. Let’s create a home you’ll love!
          </motion.p>
        </div>
      </div>

      <div className="hidden sm:block relative h-full overflow-hidden bg-white w-screen">
        <InfiniteMarquee direction="left" speed={120}>
          {duplicatedSlides.map((slide, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative flex-shrink-0 w-[320px] h-[400px] lg:w-[400px] lg:h-[500px] overflow-hidden"
            >
              <Image
                src={slide}
                alt={`About image ${i + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </InfiniteMarquee>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="block sm:hidden"
      >
        <Slider
          items={images}
          renderItem={(t) => (
            <div className="pb-32 w-[320px] h-[400px] overflow-hidden">
              <Image
                src={t}
                alt={`About image ${t}`}
                fill
                className="object-cover"
              />
            </div>
          )}
        />
      </motion.div>
      <div className="px-10 sm:px-20 py-[120px] max-w-[1440px] w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[120px] text-left">
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
              className="flex flex-col items-start gap-2"
            >
              <div className="text-7xl font-light leading-[86.4px] tracking-[-0.8px] text-[#101014]">
                {stat.value}
              </div>
              <div className="text-xl font-semibold leading-[30px] text-[#101014] tracking-[-0.2px]">
                {stat.label}
              </div>
              <div className="text-base font-normal text-[#3D3D47] leading-6 tracking-[-0.1px]">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
