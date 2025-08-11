'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pill } from '../svgs/pill';
import { ArrowUpRight } from '../svgs/arrow-right-up';

export default function Hero() {
  return (
    <section className="bg-[#111111] min-h-screen w-full flex items-center justify-center">
      <div className="mx-auto grid max-w-[1440px] xl:px-20 xl:py-8 w-full grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white flex flex-col gap-1">
          {/* Status Pill */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-[6px] bg-[#28282C] px-3 py-2 rounded-full w-fit"
            >
              <Pill />
              <span className="text-sm font-normal text-[#D0D1DB] leading-3.5">
                Available for work
              </span>
            </motion.div>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="xl:max-w-[547px] text-[56px] font-normal leading-16 tracking-[-1px] mb-5"
          >
            Your trusted partner for quality home improvement
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[#D0D1DB] font-normal leading-8 mb-8 xl:max-w-[482px] tracking-[-0.3px]"
          >
            LifetimeArt delivers expert home improvements, creating
            beautiful and functional spaces with quality
            craftsmanship.
          </motion.p>

          {/* CTA Button */}
          <div>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 bg-[#ffffff1a] px-4 py-[10px] w-fit rounded-full hover:bg-black transition-all"
            >
              <span className="font-medium text-base leading-5 text-white">
                Work with us
              </span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight />
              </div>
            </motion.a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative rounded-[12px] overflow-hidden"
        >
          <Image
            src="/hero.svg"
            alt="Hero Image"
            width={700}
            height={835.5}
            className="xl:max-w-[652.72px] object-cover "
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
