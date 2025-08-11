'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import InstagramIcon from '../assets/svgs/instagram';
import TiktokIcon from '../assets/svgs/tiktok';
import XIcon from '../assets/svgs/x';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto bg-[#101014] text-white rounded-xl">
        {/* Contact Section */}
        <div className="p-20 grid md:grid-cols-2 gap-24">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-5 items-start">
              <span className="bg-[#28282C] py-2 px-3 rounded-full text-white font-semibold leading-3.5">
                Contact
              </span>
              <h2 className="text-white font-medium leading-14 tracking-[-0.8px] text-5xl">
                Get in touch
              </h2>
              <p className="text-[#D0D1DB] text-xl font-normal tracking-[-0.3px] leading-[34px]">
                For any inquiries or to explore your vision further,
                we invite you to contact our professional team using
                the details provided below.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-lg text-white tracking-[-0.1px] leading-[30px]">
                  Office
                </span>
                <span className="text-[#D0D1DB] text-lg font-normal leading-[30px] tracking-[-0.1px]">
                  150 Old Park Ln, London W1K 1QZ
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-lg text-white tracking-[-0.1px] leading-[30px]">
                  Email
                </span>
                <span>
                  <a href="mailto:hello@refit.com">hello@refit.com</a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-lg text-white tracking-[-0.1px] leading-[30px]">
                  Telephone
                </span>
                <span>07716 534984</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <span className="font-semibold text-lg text-white tracking-[-0.1px] leading-[30px]">
                Follow us
              </span>
              <div className="flex gap-5 text-xl">
                <Link href="#">
                  <InstagramIcon />
                </Link>
                <Link href="#">
                  <TiktokIcon />
                </Link>
                <Link href="#">
                  <XIcon />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-5 space-y-5 text-black"
          >
            <div>
              <label className="block text-base font-medium text-[#101014] leading-4 tracking-[-0.1px] mb-2">
                Name<span className="text-[#F24]">*</span>
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full mt-1 border border-[#DBDAD9] rounded-md p-3 bg-[#101014]/3 placeholder:text-[#101014]/20"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-[#101014] leading-4 tracking-[-0.1px] mb-2">
                Email<span className="text-[#F24]">*</span>
              </label>
              <input
                type="email"
                placeholder="johnsmith@gmail.com"
                className="w-full mt-1 border border-[#DBDAD9] rounded-md p-3 bg-[#101014]/3 placeholder:text-[#101014]/20"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-[#101014] leading-4 tracking-[-0.1px] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+44789 123456"
                className="w-full mt-1 border border-[#DBDAD9] rounded-md p-3 bg-[#101014]/3 placeholder:text-[#101014]/20"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-[#101014] leading-4 tracking-[-0.1px] mb-2">
                Message<span className="text-[#F24]">*</span>
              </label>
              <textarea
                placeholder="Hello, I'd like to enquire about..."
                rows={4}
                className="w-full mt-1 border border-[#DBDAD9] rounded-md p-3 bg-[#101014]/3 placeholder:text-[#101014]/20"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#101014BF] hover:bg-neutral-700 text-white py-3 rounded-md text-base font-medium leading-5"
            >
              Send message
            </button>
          </motion.form>
        </div>

        {/* Footer */}
      </div>

      <footer className="mt-4">
        <div className="max-w-[1440px] mx-auto bg-[#101014] text-white rounded-t-xl p-20 flex flex-col gap-10">
          <div className="flex justify-between w-full items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="LifetimeArt Logo"
                width={154}
                height={37}
                priority
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-medium text-2xl leading-[26px] tracking-[0.4px]">
                Quick links
              </h2>
              <div className="grid grid-cols-2 gap-20">
                <div className="flex flex-col gap-3">
                  <Link href="#">
                    <span className="text-[#D0D1DB] text-lg font-normal leading-7 tracking-[-0.1px]">
                      About us
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="text-[#D0D1DB] text-lg font-normal leading-7 tracking-[-0.1px]">
                      Our work
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="text-[#D0D1DB] text-lg font-normal leading-7 tracking-[-0.1px]">
                      Services
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="#">
                    <span className="text-[#D0D1DB] text-lg font-normal leading-7 tracking-[-0.1px]">
                      Testimonials
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="text-[#D0D1DB] text-lg font-normal leading-7 tracking-[-0.1px]">
                      FAQs
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="text-[#D0D1DB] text-lg font-normal leading-7 tracking-[-0.1px]">
                      Contact
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white text-lg font-semibold leading-[30px] tracking-[-0.1px]">
              © 2025 LifetimeArt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
