'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Kitchens',
    description:
      'At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you’ll love to cook and gather in.',
    image: '/kitchenpic.png',
    icon: '/kitchen.svg',
  },
  {
    title: 'Loft Conversions',
    description:
      'Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.',
    image: '/loftpic.png',
    icon: '/loft.svg',
  },
  {
    title: 'Bathrooms',
    description:
      'We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.',
    image: '/bathroompic.png',
    icon: '/bathroom.svg',
  },
  {
    title: 'Extensions',
    description:
      'Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.',
    image: '/extensionpic.png',
    icon: '/extensions.svg',
  },
  {
    title: 'Restorations',
    description:
      'Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.',
    image: '/restorationpic.png',
    icon: '/restorations.svg',
  },
  {
    title: 'External Works',
    description:
      'Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.',
    image: '/externalpic.png',
    icon: '/external.svg',
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const descVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden w-full bg-[#FAFAFA] px-10 sm:px-20 py-[120px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-24">
        {/* Section title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center flex flex-col gap-2 items-center"
        >
          <span className="px-3 py-2 bg-[#28282C] rounded-full text-white text-base leading-3.5 font-semibold">
            Services
          </span>
          <h2 className="text-[#101014] text-5xl font-medium leading-14 tracking-[-0.8px]">
            What we do
          </h2>
          <p className="text-[#3D3D47] mt-2 text-xl leading-[34px] tracking-[-0.3px]">
            Find out which one of our services fit the needs of your
            project
          </p>
        </motion.div>

        {/* Layout */}
        <div className="flex flex-col sm:flex-row items-center gap-20 w-full">
          {/* Image panel */}
          <div className="relative w-full h-full min-h-[337px] sm:min-h-[493px] md:min-h-[639px] lg:min-h-[685px] 2xl:min-h-[777px]">
            {services.map((service, idx) =>
              activeIndex === idx ? (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                  className="absolute inset-0 rounded-xl overflow-hidden"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover xl:min-w-[290px]"
                  />
                </motion.div>
              ) : null
            )}
          </div>

          {/* Accordion */}
          <div className="w-full">
            {services.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={service.title}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(isActive ? null : idx)
                    }
                    className="flex justify-between items-center w-full py-4 text-left hover:text-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-5">
                      {/* Icon placeholder */}
                      <span className="w-8 h-8">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={40}
                          height={40}
                        />
                      </span>
                      <span className="font-medium text-[#3D3D47] text-xl leading-6 tracking-[-0.2px]">
                        {service.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/plus.svg"
                        alt="Toggle Icon"
                        width={24}
                        height={24}
                      />
                    </motion.div>
                  </button>

                  {/* Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    {isActive && (
                      <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={descVariants}
                        className="text-base text-[#3D3D47] leading-7 mb-8 mt-5 font-normal tracking-[-0.1px]"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
