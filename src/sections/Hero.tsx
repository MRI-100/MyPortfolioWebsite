import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer } from '../animations/variants';
import { DeveloperVisual } from '../components/DeveloperVisual';
import { MagneticLink } from '../components/MagneticLink';
import { stats } from '../data/site';

const roles = ['Full Stack Web Developer', 'React Developer', 'AI-Assisted Developer'];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pb-16 pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-grid-dark bg-[length:44px_44px] opacity-60 light:opacity-25" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent light:from-slate-50" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-mist backdrop-blur light:border-slate-200 light:bg-white light:text-slate-700"
          >
            <span className="h-2 w-2 rounded-full bg-brand-lime" />
            Frontend polish. Full stack awareness. Business-minded execution.
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-8 font-display text-4xl font-black leading-tight tracking-normal text-white light:text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Building modern web experiences with{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-coral bg-clip-text text-transparent light:via-slate-950">
              React, TypeScript & AI-powered workflows.
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-mist light:text-slate-600">
            I am Mrityunjoy Kumar Deka, a developer from India building responsive interfaces, useful dashboards,
            business websites, and practical app experiences with modern React.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex min-h-8 flex-wrap items-center gap-3 text-sm font-bold text-brand-cyan">
            <Sparkles className="h-4 w-4" />
            <span className="relative overflow-hidden">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  className="mr-3 inline-block"
                  animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                  transition={{ repeat: Infinity, duration: 6, delay: index * 2, times: [0, 0.08, 0.28, 0.34] }}
                >
                  {role}
                </motion.span>
              ))}
            </span>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticLink href="#contact" className="button-primary">
              Hire Me
            </MagneticLink>
            <MagneticLink href="#projects" className="button-secondary">
              View Projects
            </MagneticLink>
            <MagneticLink href="/Mrityunjoy_Kumar_Deka_IT_Resume.pdf" className="button-secondary" download>
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticLink>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            {[
              { href: 'mailto:mrityunjoykdeka100@gmail.com', label: 'Email', icon: Mail },
              { href: 'https://github.com/MRI-100', label: 'GitHub', icon: Github },
              { href: 'https://www.linkedin.com/in/mrityunjoykdeka100', label: 'LinkedIn', icon: Linkedin },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-mist transition hover:-translate-y-1 hover:border-brand-cyan hover:text-brand-cyan light:border-slate-200 light:bg-white"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <DeveloperVisual />
      </div>

      <div className="container-page relative mt-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="panel rounded-2xl p-5"
            >
              <p className="font-display text-3xl font-black text-white light:text-slate-950">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-mist light:text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <a href="#about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-mist hover:text-brand-cyan">
          Explore portfolio <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
