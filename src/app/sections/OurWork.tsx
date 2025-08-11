'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { Slider } from '../components/Slider';

interface Project {
  category: string;
  duration: string;
  title: string;
  description: string;
  testimonial: string;
  author: string;
  image: string;
  avatar: string;
  dark?: boolean;
}

const projects: Project[] = [
  {
    category: 'Kitchen',
    duration: '4 weeks',
    title: 'Modern kitchen refit',
    description:
      'This kitchen transformation brought sleek, modern design and enhanced functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.',
    testimonial:
      'LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!',
    author: 'Rachel Morgan',
    image: '/modern.png',
    avatar: '/ava1.png',
  },
  {
    category: 'External Works',
    duration: '6 weeks',
    title: 'External garden path build',
    description:
      'Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm.  The result is a stylish, well-crafted path that elevates the overall garden design.',
    testimonial:
      'The team at LifetimeArt did an amazing job on our garden path! It’s sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!',
    author: 'Michael Turner',
    image: '/externalbuild.png',
    avatar: '/ava2.png',
    dark: true,
  },
  {
    category: 'Kitchen',
    duration: '4 weeks',
    title: 'Bathroom renovation',
    description:
      'We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.',
    testimonial:
      'LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!',
    author: 'Laura Davies',
    image: '/bathroomrenov.png',
    avatar: '/ava3.png',
    dark: false,
  },
];
export default function OurWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dir, setDir] = useState(1); // 1 = next (down scroll), -1 = prev (up scroll)
  const animLock = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // tune durations (ms)
  const TRANSITION_MS = 500;
  const WHEEL_THRESHOLD = 20; // minimal deltaY to trigger

  // wheel handler (desktop)
  function handleWheel(e: React.WheelEvent) {
    // prevent page scroll while inside the container
    e.preventDefault();

    if (animLock.current) return;
    const delta = e.deltaY;
    if (
      delta > WHEEL_THRESHOLD &&
      activeIndex < projects.length - 1
    ) {
      animLock.current = true;
      setDir(1);
      setActiveIndex((s) => Math.min(projects.length - 1, s + 1));
      setTimeout(() => (animLock.current = false), TRANSITION_MS);
    } else if (delta < -WHEEL_THRESHOLD && activeIndex > 0) {
      animLock.current = true;
      setDir(-1);
      setActiveIndex((s) => Math.max(0, s - 1));
      setTimeout(() => (animLock.current = false), TRANSITION_MS);
    }
  }

  // touch handling (mobile swipe)
  const touchStartY = useRef<number | null>(null);
  function handleTouchStart(e: React.TouchEvent) {
    touchStartY.current = e.touches[0].clientY;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartY.current == null) return;
    const endY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - endY;
    // swipe up -> next
    if (Math.abs(diff) > 40 && !animLock.current) {
      if (diff > 0 && activeIndex < projects.length - 1) {
        animLock.current = true;
        setDir(1);
        setActiveIndex((s) => Math.min(projects.length - 1, s + 1));
        setTimeout(() => (animLock.current = false), TRANSITION_MS);
      } else if (diff < 0 && activeIndex > 0) {
        animLock.current = true;
        setDir(-1);
        setActiveIndex((s) => Math.max(0, s - 1));
        setTimeout(() => (animLock.current = false), TRANSITION_MS);
      }
    }
    touchStartY.current = null;
  }

  // keyboard support (optional): arrow up/down
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!containerRef.current) return;
      // only respond if focus is inside container (or you can always respond)
      if (!containerRef.current.contains(document.activeElement))
        return;
      if (animLock.current) return;
      if (
        e.key === 'ArrowDown' &&
        activeIndex < projects.length - 1
      ) {
        animLock.current = true;
        setDir(1);
        setActiveIndex((s) => Math.min(projects.length - 1, s + 1));
        setTimeout(() => (animLock.current = false), TRANSITION_MS);
      }
      if (e.key === 'ArrowUp' && activeIndex > 0) {
        animLock.current = true;
        setDir(-1);
        setActiveIndex((s) => Math.max(0, s - 1));
        setTimeout(() => (animLock.current = false), TRANSITION_MS);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex]);

  // motion variants with direction-aware enter/exit
  const variants: Variants = {
    enter: (d: number) => ({
      opacity: 0,
      y: d > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: TRANSITION_MS / 1000, ease: 'easeOut' },
    },
    exit: (d: number) => ({
      opacity: 0,
      y: d > 0 ? -40 : 40,
      transition: { duration: TRANSITION_MS / 1000, ease: 'easeIn' },
    }),
  };

  return (
    <section className="relative overflow-hidden w-full px-6 lg:px-20 py-[80px]">
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="text-center flex flex-col gap-2 items-center pb-12"
          >
            <span className="px-3 py-2 bg-[#28282C] rounded-full text-white text-base font-semibold">
              Our work
            </span>
            <h2 className="text-[#101014] text-4xl lg:text-5xl font-medium leading-tight tracking-[-0.8px]">
              Get inspired by our work
            </h2>
            <p className="text-[#3D3D47] mt-2 text-lg lg:text-xl max-w-[900px]">
              See how we’ve transformed homes with our expert
              craftsmanship and attention to detail.
            </p>
          </motion.div>

          <div className="hidden sm:block items-start justify-center w-full">
            <div className="w-full">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={
                    projects[activeIndex].title + '-' + activeIndex
                  }
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative"
                >
                  <ProjectCard {...projects[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="block sm:hidden">
            <Slider
              items={projects}
              renderItem={(t) => (
                <div className="pb-10">
                  <ProjectCard {...t} />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
