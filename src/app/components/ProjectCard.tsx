import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Quote } from '../assets/svgs/quote';

interface ProjectCardProps {
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export function ProjectCard({
  category,
  duration,
  title,
  description,
  testimonial,
  author,
  image,
  avatar,
  dark = false,
}: Readonly<ProjectCardProps>) {
  return (
    <motion.div
      variants={cardVariants}
      className={`rounded-xl p-8  overflow-hidden ${
        dark ? 'bg-black text-white' : 'bg-[#E9ECF2] text-[#101014]'
      }`}
    >
      <div
        className={`  flex flex-col sm:flex-row sm:gap-10 lg:gap-20 ${
          dark ? 'bg-black text-white' : 'bg-[#E9ECF2] text-[#101014]'
        }`}
      >
        <div className="relative w-full h-64 sm:min-h-[380px] md:h-auto xl:min-h-[500px]">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6 w-full">
          <div className="flex flex-col w-full gap-3.5">
            <h3 className="text-[40px] font-medium leading-12 tracking-[-1px]">
              {title}
            </h3>
            <p
              className={`${
                dark ? 'text-white' : 'text-[#3D3D47]'
              } text-base font-normal tracking-[-0.1px] leading-7`}
            >
              {description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-2 text-base rounded-full font-semibold leading-3.5 ${
                dark ? 'bg-[#28282C]' : 'bg-[#28282C] text-white'
              }`}
            >
              {category}
            </span>
            <span
              className={`px-3 py-2 text-base rounded-full font-semibold leading-3.5 ${
                dark ? 'bg-[#28282C]' : 'bg-[#28282C] text-white'
              }`}
            >
              {duration}
            </span>
          </div>

          <div className="hidden md:flex items-start gap-2">
            <div className="w-6 h-6">
              <Quote isDark={dark} />
            </div>
            <blockquote
              className={`${
                dark ? 'text-white' : 'text-[#3D3D47]'
              } text-lg font-normal leading-8 tracking-[-0.2px]`}
            >
              {testimonial}
            </blockquote>
          </div>
          <div className="pl-8 hidden md:flex items-center gap-4">
            <Image
              src={avatar}
              alt={author}
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="text-base tracking-[-0.1px] leading-5">
              {author}
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-col mt-5 gap-6">
        <div className="flex md:hidden items-start gap-2">
          <div className="w-6 h-6">
            <Quote isDark={dark} />
          </div>
          <blockquote
            className={`${
              dark ? 'text-white' : 'text-[#3D3D47]'
            } text-lg font-normal leading-8 tracking-[-0.2px]`}
          >
            {testimonial}
          </blockquote>
        </div>

        <div className="pl-8 flex md:hidden items-center gap-4">
          <Image
            src={avatar}
            alt={author}
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="text-base tracking-[-0.1px] leading-5">
            {author}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
