import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-14">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-cyan/18 via-white/[0.07] to-brand-coral/16 p-6 shadow-glow light:border-slate-200 light:from-cyan-100 light:via-white light:to-rose-100 sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Client inquiry</p>
              <h2 className="mt-4 font-display text-3xl font-black text-white light:text-slate-950 lg:text-4xl">
                Need a website, dashboard, landing page, or React frontend?
              </h2>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-mist light:text-slate-700">
                {['Fast communication', 'Responsive design', 'Modern UI', 'Business-focused structure'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <a href="#contact" className="button-primary">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
