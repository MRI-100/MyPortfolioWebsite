import { motion } from 'framer-motion';
import { BookOpenCheck, Cloud, DatabaseZap, GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

const learning = [
  {
    icon: GraduationCap,
    title: 'Current focus',
    copy: 'Sharper projects, stronger fundamentals, and clearer proof of work for recruiters and clients.',
  },
  {
    icon: BookOpenCheck,
    title: 'Frontend priorities',
    copy: 'Responsive layouts, component structure, accessible forms, dashboard UI, and smooth interaction states.',
  },
  {
    icon: Cloud,
    title: 'Deployment mindset',
    copy: 'Building with performance, SEO, hosting, and production handoff in mind.',
  },
  {
    icon: DatabaseZap,
    title: 'Backend awareness',
    copy: 'REST APIs, MongoDB, Firebase, authentication concepts, and data-driven product flows.',
  },
];

export function Experience() {
  return (
    <section id="journey" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Learning journey"
          title="Early career, practical, and improving with intent."
          copy="I am building credibility through shipped interfaces, stronger project decisions, and consistent learning."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {learning.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="panel rounded-2xl p-6 sm:p-8"
            >
              <item.icon className="h-7 w-7 text-brand-cyan" />
              <h3 className="mt-5 font-display text-2xl font-black text-white light:text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-8 text-mist light:text-slate-600">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
