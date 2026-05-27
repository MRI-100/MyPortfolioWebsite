import { motion } from 'framer-motion';
import { About } from '../sections/About';
import { Blog } from '../sections/Blog';
import { Contact } from '../sections/Contact';
import { CTA } from '../sections/CTA';
import { Experience } from '../sections/Experience';
import { Footer } from '../sections/Footer';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { Services } from '../sections/Services';
import { Skills } from '../sections/Skills';
import { Testimonials } from '../sections/Testimonials';

export function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <CTA />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </motion.main>
  );
}
