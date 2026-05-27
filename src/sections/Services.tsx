import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { services } from '../data/site';

export function Services() {
  return (
    <section id="services" className="section-pad bg-white/[0.025] light:bg-slate-100/70">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Freelance-friendly services for businesses, founders, and personal brands."
          copy="I can help translate an idea, offer, or workflow into a modern web experience that looks credible, works smoothly, and supports real business goals."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="panel rounded-2xl p-6 transition hover:-translate-y-1 hover:border-brand-cyan/50"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-cyan/12 text-brand-cyan">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-black text-white light:text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist light:text-slate-600">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
