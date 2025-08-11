'use client';

import { motion, Variants } from 'framer-motion';
import InfiniteMarquee from '../components/InfiniteMarquee';
import { TestimonialCard } from '../components/TestimonialCard';
import { Slider } from '../components/Slider';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const testimonials = [
  {
    text: 'I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!',
    author: 'Emily Carter',
    avatar: '/ava3.png',
  },
  {
    text: 'Refit transformed our outdoor spacewith a beautiful garden path. The workwas completed on time, and the finishis excellent. A great team to work with!',
    author: 'Emily Carter',
    avatar: '/ava3.png',
  },
];

export default function TestimonialsSection() {
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="flex flex-col w-full gap-24 mb-[120px]"
    >
      <div className="text-center flex flex-col gap-2 items-center  px-10 sm:px-0">
        <span className="px-3 py-2 bg-[#28282C] rounded-full text-white text-base leading-3.5 font-semibold">
          Testimonials
        </span>
        <h2 className="text-[#101014] text-5xl font-medium leading-14 tracking-[-0.8px]">
          Hear from our clients
        </h2>
        <p className="text-[#3D3D47] mt-2 text-xl leading-[34px] tracking-[-0.3px] max-w-[550px]">
          Hear from our happy clients about their experience working
          with Refit and the quality of our craftsmanship.
        </p>
      </div>

      <div className="hidden sm:flex flex-col w-full gap-12">
        <InfiniteMarquee direction="left" speed={60}>
          {duplicatedTestimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </InfiniteMarquee>

        <InfiniteMarquee direction="right" speed={60}>
          {duplicatedTestimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </InfiniteMarquee>
      </div>
      <div className="block sm:hidden px-10">
        <Slider
          items={duplicatedTestimonials}
          renderItem={(t) => (
            <div className="pb-20">
              <TestimonialCard {...t} />
            </div>
          )}
        />
      </div>
    </motion.section>
  );
}
