'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from '../assets/svgs/arrow-right-up';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What area are you based in?',
    answer:
      'We primarily serve London and the surrounding areas, but depending on the project, we can travel further. Contact us to discuss your location and requirements.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process.',
  },
  {
    question: 'Do you offer free quotes?',
    answer:
      'Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.',
  },
  {
    question: 'Will I need planning permission for my project?',
    answer:
      'This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.',
  },
  {
    question: 'Do you provide a guarantee for your work?',
    answer:
      'Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.',
  },
  {
    question: 'Can I stay in my home while the work is being done?',
    answer:
      'In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.',
  },
  {
    question: 'How do I get started with a project?',
    answer:
      'Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden w-full xl:px-20 xl:py-[120px]">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-5 gap-20 px-20">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="col-span-2 xl:max-w-[400px] flex flex-col items-start gap-14"
        >
          <div className="flex flex-col gap-4 items-start">
            <div className="flex flex-col gap-2 items-start">
              <span className="px-3 py-2 bg-[#28282C] rounded-full text-white text-base leading-3.5 font-semibold">
                FAQs
              </span>
              <h2 className="text-[#101014] text-5xl font-medium leading-14 tracking-[-0.8px]">
                Answering Your Questions
              </h2>
            </div>
            <p className="text-[#3D3D47] text-xl leading-[34px] tracking-[-0.3px]">
              Got more questions? Send us your enquiry below
            </p>
          </div>

          <div>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-6 px-4 py-[10px] w-fit rounded-full transition-all"
              style={{
                background:
                  'linear-gradient(0deg, rgba(16, 16, 20, 0.10) 0%, rgba(16, 16, 20, 0.10) 100%), rgba(255, 255, 255, 0.10);',
                backdropFilter: 'blur(5px)',
              }}
            >
              <span className="font-medium text-base leading-5 text-[#101014">
                Get in touch
              </span>
              <div className="w-8 h-8 rounded-full bg-[#101014] flex items-center justify-center">
                <ArrowUpRight color="#FFF" />
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Accordion */}
        <div className="space-y-5 col-span-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="flex flex-col gap-5 items-start bg-[#FAFAFA] rounded-xl overflow-hidden border border-[#E6E6E6] px-5 py-6"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center text-left text-xl text-[#101014] leading-[30px] tracking-[-0.2px] font-medium cursor-pointer"
                >
                  {faq.question}
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/plus.svg"
                      alt="Toggle Icon"
                      width={24}
                      height={24}
                    />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                    >
                      <div className="text-base text-[#3D3D47] leading-7 tracking-[-0.1px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
