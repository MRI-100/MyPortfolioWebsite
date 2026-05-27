import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

const posts = [
  'How AI-assisted development improves my React workflow',
  'What makes a business website feel trustworthy',
  'Building better dashboards with clear UI hierarchy',
];

export function Blog() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Writing"
          title="Blog placeholder for future technical credibility."
          copy="A focused writing section gives recruiters and clients a deeper signal: how you think, explain decisions, and keep learning."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="panel rounded-2xl p-6"
            >
              <p className="text-sm font-bold text-brand-cyan">Coming soon</p>
              <h3 className="mt-4 font-display text-xl font-black text-white light:text-slate-950">{post}</h3>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-mist hover:text-brand-cyan">
                Discuss this topic <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
