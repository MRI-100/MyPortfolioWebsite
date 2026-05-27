import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories, skillIcons } from '../data/site';

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((category) => category.id === active) ?? skillCategories[0];

  return (
    <section id="skills" className="section-pad bg-white/[0.025] light:bg-slate-100/70">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="A modern stack for polished frontends and practical full stack apps."
          copy="My skill set is shaped around building interfaces, APIs, dashboards, authentication flows, business websites, and AI-assisted development workflows."
          align="center"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                active === category.id
                  ? 'bg-brand-cyan text-ink'
                  : 'border border-white/10 bg-white/[0.05] text-mist hover:border-brand-cyan hover:text-brand-cyan light:border-slate-200 light:bg-white light:text-slate-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            className="panel rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-display text-3xl font-black text-white light:text-slate-950">{current.title}</h3>
            <p className="mt-4 leading-8 text-mist light:text-slate-600">{current.description}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {skillIcons.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-slate-50">
                  <item.icon className="h-5 w-5 text-brand-cyan" />
                  <p className="mt-3 text-sm font-bold text-white light:text-slate-950">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={`${current.id}-bars`}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            className="panel rounded-2xl p-6 sm:p-8"
          >
            <div className="space-y-6">
              {current.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm font-bold">
                    <span className="text-white light:text-slate-950">{skill.name}</span>
                    <span className="text-brand-cyan">{skill.level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 light:bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
