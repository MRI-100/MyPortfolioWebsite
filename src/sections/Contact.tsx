import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { submitContactForm } from '../utils/contact';

type FormState = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  budget: 'Internship / Job opportunity',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string; mailto?: string }>({
    type: 'idle',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const validate = () => {
    if (form.name.trim().length < 2) return 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
    if (form.message.trim().length < 20) return 'Please share a little more detail about the opportunity.';
    return '';
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: 'error', message: error });
      return;
    }

    setSubmitting(true);
    setStatus({ type: 'idle', message: '' });
    try {
      const result = await submitContactForm(form);
      setStatus({ type: 'success', message: result.message, mailto: result.mailto });
      setForm(initialForm);
    } catch (caught) {
      setStatus({
        type: 'error',
        message: caught instanceof Error ? caught.message : 'Something went wrong. Please email me directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about internships, remote roles, freelance work, or startup ideas."
          copy="I am open to practical projects where clean UI, responsive development, APIs, and business-friendly execution matter."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <div className="panel rounded-2xl p-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-lime/12 px-3 py-1 text-sm font-bold text-brand-lime">
                <span className="h-2 w-2 rounded-full bg-brand-lime" />
                Available for new opportunities
              </span>
              <h3 className="mt-5 font-display text-2xl font-black text-white light:text-slate-950">Fastest ways to reach me</h3>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Email', value: 'mrityunjoy@example.com', icon: Mail, href: 'mailto:mrityunjoy@example.com' },
                  { label: 'LinkedIn', value: 'Connect professionally', icon: Linkedin, href: 'https://www.linkedin.com/' },
                  { label: 'GitHub', value: 'Review projects and code', icon: Github, href: 'https://github.com/' },
                  { label: 'Location', value: 'India', icon: MapPin, href: '#contact' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-brand-cyan light:border-slate-200 light:bg-slate-50"
                  >
                    <item.icon className="h-5 w-5 text-brand-cyan" />
                    <span>
                      <span className="block text-sm font-bold text-white light:text-slate-950">{item.label}</span>
                      <span className="block text-sm text-mist light:text-slate-600">{item.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="panel rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-white light:text-slate-950">Name</span>
                <input
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-mist/70 focus:border-brand-cyan light:border-slate-200 light:bg-white light:text-slate-950"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-white light:text-slate-950">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-mist/70 focus:border-brand-cyan light:border-slate-200 light:bg-white light:text-slate-950"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-white light:text-slate-950">Inquiry type</span>
              <select
                value={form.budget}
                onChange={(event) => updateField('budget', event.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-brand-cyan light:border-slate-200 light:bg-white light:text-slate-950"
              >
                <option>Internship / Job opportunity</option>
                <option>Freelance website project</option>
                <option>Startup MVP / SaaS idea</option>
                <option>Dashboard or web app</option>
                <option>Website redesign</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-white light:text-slate-950">Message</span>
              <textarea
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                rows={6}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-mist/70 focus:border-brand-cyan light:border-slate-200 light:bg-white light:text-slate-950"
                placeholder="Tell me about the role, project, timeline, or business goal."
              />
            </label>
            {status.message && (
              <div
                className={`mt-5 rounded-2xl border p-4 text-sm font-semibold ${
                  status.type === 'success'
                    ? 'border-brand-lime/30 bg-brand-lime/10 text-brand-lime'
                    : 'border-brand-coral/30 bg-brand-coral/10 text-brand-coral'
                }`}
              >
                {status.message}
                {status.mailto && (
                  <a href={status.mailto} className="ml-2 underline">
                    Open email
                  </a>
                )}
              </div>
            )}
            <button type="submit" disabled={submitting} className="button-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
              <Send className="h-4 w-4" />
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
