import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, copy, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-black tracking-normal text-white light:text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-mist light:text-slate-600 sm:text-lg">{copy}</p>
    </motion.div>
  );
}
