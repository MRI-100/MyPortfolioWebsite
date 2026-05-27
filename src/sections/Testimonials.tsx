import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { testimonials } from '../data/site';

export function Testimonials() {
  return (
    <section className="section-pad bg-white/[0.025] light:bg-slate-100/70">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="Professional signals for trust and credibility."
          copy="These placeholders are written in a believable style and can be replaced with real client or collaborator feedback as your portfolio grows."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="panel rounded-2xl p-6"
            >
              <Quote className="h-7 w-7 text-brand-cyan" />
              <p className="mt-5 leading-8 text-mist light:text-slate-600">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-bold text-white light:text-slate-950">{testimonial.name}</p>
                <p className="text-sm text-mist light:text-slate-500">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
