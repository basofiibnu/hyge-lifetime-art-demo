'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#work' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-black sm:px-[30px] sm:py-10 lg:p-0 lg:bg-transparent lg:absolute lg:top-0 lg:left-0 w-full z-0 lg:z-50"
    >
      {/* Desktop Nav */}
      <div className="hidden sm:flex xl:px-20 xl:py-10 items-center max-w-[1440px] justify-between mx-auto">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="LifetimeArt Logo"
          width={154}
          height={37}
          priority
        />

        {/* Navigation Links */}
        <ul className="flex items-center gap-[30px] text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="p-2.5 relative text-lg font-medium leading-5 tracking-[-0.1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className="flex sm:hidden justify-between items-center px-6 py-4">
        <Image
          src="/logo.svg"
          alt="LifetimeArt Logo"
          width={154}
          height={32}
        />
        <button onClick={() => setMenuOpen(true)}>
          <Image
            src="/menu.svg"
            alt="LifetimeArt Logo"
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-[5px] z-50 flex flex-col"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center px-10 pt-8">
              <Image
                src="/logo.svg"
                alt="LifetimeArt Logo"
                width={154}
                height={32}
              />
              <button onClick={() => setMenuOpen(false)}>
                <Image
                  src="/close.svg"
                  alt="Close"
                  width={40}
                  height={40}
                />
              </button>
            </div>

            {/* Links */}
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col px-10 space-y-6 mt-20 text-white font-normal leading-7 text-2xl tracking-[-1px]"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
