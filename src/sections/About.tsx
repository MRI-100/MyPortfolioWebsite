import { motion } from 'framer-motion';
import { BrainCircuit, Code2, LayoutTemplate, TrendingUp } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { journey } from '../data/site';

const cards = [
  { title: 'Product-minded', copy: 'I think about user goals, client outcomes, and clean conversion paths.', icon: TrendingUp },
  { title: 'UI-focused', copy: 'I care about responsive spacing, hierarchy, motion, and the small polish details.', icon: LayoutTemplate },
  { title: 'Full stack learner', copy: 'React, Node, Express, MongoDB, APIs, auth flows, and dashboard foundations.', icon: Code2 },
  { title: 'AI productive', copy: 'I use AI-assisted workflows to ideate faster, debug smarter, and ship cleaner work.', icon: BrainCircuit },
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="A growing developer with a serious eye for real-world products."
          copy="I build modern web applications with a focus on responsive UI, clear user journeys, reusable code, and practical business value. My goal is to become the kind of developer teams and clients can trust with important digital experiences."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="panel rounded-2xl p-6 transition hover:-translate-y-1 hover:border-brand-cyan/50"
            >
              <card.icon className="h-7 w-7 text-brand-cyan" />
              <h3 className="mt-5 font-display text-xl font-bold text-white light:text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist light:text-slate-600">{card.copy}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel rounded-2xl p-6 sm:p-8">
            <p className="eyebrow">Focus</p>
            <h3 className="mt-4 font-display text-2xl font-black text-white light:text-slate-950">
              From learning to shipping practical, client-ready work.
            </h3>
            <p className="mt-5 leading-8 text-mist light:text-slate-600">
              I am especially interested in web development, app development, SaaS products, AI-integrated apps,
              freelance projects, startup projects, business websites, and modern UI/UX.
            </p>
          </div>
          <div className="space-y-4">
            {journey.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="panel rounded-2xl p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <span className="w-fit rounded-full bg-brand-cyan/12 px-3 py-1 text-sm font-bold text-brand-cyan">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white light:text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-mist light:text-slate-600">{item.copy}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
