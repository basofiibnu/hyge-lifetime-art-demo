import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type InfiniteMarqueeProps = {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: number; // seconds
};

export default function InfiniteMarquee({
  children,
  direction = 'left',
  speed = 60,
}: InfiniteMarqueeProps) {
  const items = Array.isArray(children) ? children : [children];
  const duplicatedItems = [...items, ...items];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="overflow-hidden w-screen"
    >
      <motion.div
        className="flex items-center gap-8 sm:gap-4 lg:gap-6"
        style={{ width: 'max-content' }}
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            {item}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
