'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#work' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full z-50 px-10 py-8"
    >
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Logo */}
        <Image
          src="/logo.svg" // Replace with actual logo from Figma export
          alt="LifetimeArt Logo"
          width={150}
          height={40}
          priority
        />

        {/* Navigation Links */}
        <ul className="flex items-center gap-12 text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-normal hover:text-gray-300 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  );
}
