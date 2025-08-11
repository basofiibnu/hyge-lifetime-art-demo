'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#111111] min-h-screen flex items-center justify-center px-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] px-4 py-1 rounded-full mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
            <span className="text-sm font-medium">
              Available for work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[56px] font-normal leading-tight tracking-tight mb-6"
          >
            Your trusted partner
            <br /> for quality home
            <br /> improvement
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400 mb-8 max-w-lg"
          >
            LifetimeArt delivers expert home improvements, creating
            beautiful and functional spaces with quality
            craftsmanship.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] px-6 py-3 rounded-full text-white font-medium hover:bg-[#2A2A2A] transition-colors"
          >
            Work with us
            {/* <ArrowUpRight size={18} /> */}
          </motion.a>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative rounded-[12px] overflow-hidden"
        >
          <Image
            src="/hero.svg" // Replace with actual image from Figma
            alt="Hero Image"
            width={700}
            height={800}
            className="rounded-[12px] object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
