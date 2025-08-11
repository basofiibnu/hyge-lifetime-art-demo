'use client';

import { motion } from 'framer-motion';
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function OurWorkSection() {
  return (
    <section className="relative overflow-hidden w-full px-10 lg:px-20 py-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center flex flex-col gap-2 items-center pb-[120px] xl:pb-0"
        >
          <span className="px-3 py-2 bg-[#28282C] rounded-full text-white text-base leading-3.5 font-semibold">
            Our work
          </span>
          <h2 className="text-[#101014] text-5xl font-medium leading-14 tracking-[-0.8px]">
            Get inspired by our work
          </h2>
          <p className="text-[#3D3D47] mt-2 text-xl leading-[34px] tracking-[-0.3px] xl:max-w-[40%]">
            See how we’ve transformed homes with our expert
            craftsmanship and attention to detail.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden sm:flex flex-col sm:gap-5 lg:gap-10"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="sm:my-0 xl:my-[230px]"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="block sm:hidden"
        >
          <Slider
            items={projects}
            renderItem={(t) => (
              <div className="pb-20">
                <ProjectCard {...t} />
              </div>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}
