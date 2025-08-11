// components/AboutUs.tsx
'use client';

import { motion, Variants } from 'framer-motion';
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
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative  overflow-hidden w-full">
      <div className="xl:px-20 xl:py-[120px] max-w-[1440px] mx-auto">
        <div className="flex items-center justify-center  gap-20">
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
            <h2 className="text-5xl font-medium leading-14 text-[#101014] tracking-[-0.8px] max-w-[60%]">
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

      <div className="relative h-full overflow-hidden bg-white w-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden w-screen"
        >
          <motion.div
            className="flex items-center gap-6"
            style={{ width: 'max-content' }}
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              ease: 'linear',
              duration: 60,
              repeat: Infinity,
            }}
          >
            {duplicatedSlides.map((slide, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative flex-shrink-0 w-[400px] h-[500px] overflow-hidden"
              >
                <Image
                  src={slide}
                  alt={`About image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="xl:px-20 xl:py-[120px] max-w-[1440px] w-full mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[120px] text-left">
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
