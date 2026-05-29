import { motion } from 'framer-motion';
import { CheckCircle2, Compass, Gauge, Layers3, PenTool, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

const principles = [
  { title: 'Start with the user path', copy: 'Clear entry, clear action, clear next step.', icon: Compass },
  { title: 'Design for scanning', copy: 'Strong hierarchy before decoration.', icon: Layers3 },
  { title: 'Keep motion useful', copy: 'Transitions should guide attention, not steal it.', icon: PenTool },
  { title: 'Build responsive first', copy: 'Mobile layout is treated as a real product surface.', icon: Gauge },
  { title: 'Make trust visible', copy: 'Good copy, stable UI, and predictable interactions.', icon: ShieldCheck },
];

const focus = ['React + TypeScript', 'Dashboard UI', 'Business websites', 'REST APIs', 'AI-assisted workflows', 'Responsive UX'];

export function Workflow() {
  return (
    <section className="section-pad bg-white/[0.025] light:bg-slate-100/70">
      <div className="container-page">
        <SectionHeading
          eyebrow="Workflow"
          title="How I approach UI, code, and product decisions."
          copy="I care about the parts users actually feel: clarity, speed, polish, and whether the interface helps them finish the job."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="panel rounded-2xl p-6 hover:-translate-y-1 hover:border-brand-cyan/50"
              >
                <item.icon className="h-6 w-6 text-brand-cyan" />
                <h3 className="mt-5 font-display text-xl font-black text-white light:text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist light:text-slate-600">{item.copy}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel rounded-2xl p-6 sm:p-8"
          >
            <p className="eyebrow">Currently exploring</p>
            <h3 className="mt-4 font-display text-3xl font-black text-white light:text-slate-950">Practical frontend depth.</h3>
            <div className="mt-6 space-y-3">
              {focus.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 light:border-slate-200 light:bg-white">
                  <CheckCircle2 className="h-5 w-5 text-brand-cyan" />
                  <span className="text-sm font-bold text-mist light:text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
