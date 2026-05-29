import { motion } from 'framer-motion';
import { Bot, Braces, Code2, Database, Layers3, Server, Sparkles } from 'lucide-react';

const orbit = [
  { label: 'React', icon: Code2, className: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' },
  { label: 'TS', icon: Braces, className: 'right-0 top-1/4 translate-x-1/2' },
  { label: 'Node', icon: Server, className: 'bottom-8 right-4 translate-x-1/2' },
  { label: 'AI', icon: Bot, className: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
  { label: 'DB', icon: Database, className: 'bottom-8 left-4 -translate-x-1/2' },
  { label: 'UI', icon: Layers3, className: 'left-0 top-1/4 -translate-x-1/2' },
];

export function DeveloperVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="group relative rounded-[2rem] p-px"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-cyan via-brand-blue to-brand-coral opacity-70 blur-[1px]" />
        <div className="panel relative overflow-hidden rounded-[2rem] p-5">
          <div className="absolute inset-0 bg-grid-dark bg-[length:34px_34px] opacity-30" />
          <div className="absolute -right-20 top-10 h-44 w-44 rounded-full bg-brand-cyan/15 blur-3xl" />
          <div className="absolute -bottom-20 left-4 h-52 w-52 rounded-full bg-brand-coral/15 blur-3xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink/70 p-5 light:bg-white/80">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-brand-lime/15 px-3 py-1 text-xs font-bold text-brand-lime">India</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-mist light:border-slate-200">
                Open to work
              </span>
            </div>

            <div className="relative mx-auto mt-10 grid h-64 w-64 max-w-full place-items-center sm:h-72 sm:w-72">
              <motion.div
                className="absolute inset-5 rounded-full border border-dashed border-brand-cyan/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
              >
                {orbit.map((item) => (
                  <span
                    key={item.label}
                    className={`absolute grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] text-brand-cyan shadow-glow backdrop-blur-xl ${item.className}`}
                    title={item.label}
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                ))}
              </motion.div>
              <div className="relative grid h-36 w-36 place-items-center rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/14 to-white/[0.03] shadow-glow backdrop-blur-xl">
                <div className="text-center">
                  <Sparkles className="mx-auto h-7 w-7 text-brand-cyan" />
                  <p className="mt-3 font-display text-3xl font-black text-white light:text-slate-950">MKD</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-mist">Frontend</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-5 bottom-5 rounded-[1.25rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl light:border-slate-200 light:bg-white/80">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-brand-cyan">React + TypeScript</p>
                  <h2 className="mt-1 font-display text-2xl font-black text-white light:text-slate-950">
                    Product-focused web developer.
                  </h2>
                </div>
                <div className="hidden h-14 w-14 shrink-0 rounded-2xl bg-brand-cyan/15 sm:block" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
