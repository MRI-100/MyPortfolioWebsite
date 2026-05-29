import { Github, Linkedin, Mail } from 'lucide-react';
import { navItems } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 light:border-slate-200">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <a href="#home" className="font-display text-xl font-black text-white light:text-slate-950">
            Mrityunjoy Kumar Deka
          </a>
          <p className="mt-2 max-w-xl text-sm leading-6 text-mist light:text-slate-600">
            Building modern, responsive web experiences for startups, recruiters, and business owners.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-mist light:text-slate-600">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-cyan">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {[
            { href: 'mailto:mrityunjoykdeka100@gmail.com', label: 'Email', icon: Mail },
            { href: 'https://github.com/MRI-100', label: 'GitHub', icon: Github },
            { href: 'https://www.linkedin.com/in/mrityunjoykdeka100', label: 'LinkedIn', icon: Linkedin },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition hover:border-brand-cyan hover:text-brand-cyan light:border-slate-200"
            >
              <item.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="container-page mt-8 text-sm text-mist light:text-slate-500">
        © {new Date().getFullYear()} Mrityunjoy Kumar Deka. All rights reserved.
      </div>
    </footer>
  );
}
