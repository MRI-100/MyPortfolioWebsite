import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { skillCategories } from '../data/site';

const profile = [
  'Full Stack Web Developer',
  'React + TypeScript',
  'AI-assisted workflow',
  'Responsive UI focus',
];

export function Resume() {
  return (
    <section id="resume" className="section-pad">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Resume snapshot</p>
              <h2 className="mt-4 font-display text-3xl font-black text-white light:text-slate-950 sm:text-4xl">
                Recruiter-friendly summary, ready to expand into a full PDF.
              </h2>
              <p className="mt-5 leading-8 text-mist light:text-slate-600">
                I build React interfaces, dashboard experiences, business websites, and full stack foundations with a
                strong eye for responsive execution.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/Mrityunjoy_Kumar_Deka_IT_Resume.pdf" download className="button-primary">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a href="mailto:mrityunjoykdeka100@gmail.com" className="button-secondary">
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              </div>
              <div className="mt-7 flex gap-3">
                <a href="https://github.com/MRI-100" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-mist hover:border-brand-cyan hover:text-brand-cyan light:border-slate-200">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/mrityunjoykdeka100" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-mist hover:border-brand-cyan hover:text-brand-cyan light:border-slate-200">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {profile.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-white light:border-slate-200 light:bg-slate-50 light:text-slate-950">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-slate-50">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-cyan">Core stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillCategories.flatMap((category) => category.skills.slice(0, 4)).map((skill) => (
                    <span key={skill.name} className="rounded-full bg-white/[0.07] px-3 py-1 text-sm font-semibold text-mist light:bg-white light:text-slate-700">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
