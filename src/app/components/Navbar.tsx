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
      className="absolute top-0 left-0 w-full z-50"
    >
      <div className="flex xl:px-20 xl:py-10 items-center max-w-[1440px] justify-between mx-auto">
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
    </motion.header>
  );
}
