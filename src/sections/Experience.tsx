import { motion } from 'framer-motion';
import { BookOpenCheck, Cloud, DatabaseZap, GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

const learning = [
  {
    icon: GraduationCap,
    title: 'Career-building mindset',
    copy: 'Actively building project depth, stronger fundamentals, better communication, and recruiter-ready proof of work.',
  },
  {
    icon: BookOpenCheck,
    title: 'Modern web practice',
    copy: 'React Router DOM, responsive design, component architecture, dashboard UI, API integration, and form workflows.',
  },
  {
    icon: Cloud,
    title: 'Cloud fundamentals',
    copy: 'Understanding deployment, hosting basics, application delivery, and the reliability expectations of real products.',
  },
  {
    icon: DatabaseZap,
    title: 'Data and backend awareness',
    copy: 'MongoDB, Firebase, REST APIs, authentication concepts, data analytics fundamentals, and backend-driven products.',
  },
];

export function Experience() {
  return (
    <section id="journey" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Learning journey"
          title="Presented honestly: early career, practical, and improving fast."
          copy="I am building my career through hands-on projects, continuous learning, and practical web development. The message is not years of inflated experience; it is momentum, seriousness, and the ability to build useful software."
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
