import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav className="container-page">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/72 px-4 py-3 shadow-soft backdrop-blur-2xl light:border-slate-200 light:bg-white/82">
          <a href="#home" className="flex items-center gap-3" aria-label="Mrityunjoy Kumar Deka home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-cyan font-display font-black text-ink">
              M
            </span>
            <span className="hidden text-sm font-bold text-white light:text-slate-950 sm:block">Mrityunjoy</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === item.href
                    ? 'bg-white/10 text-brand-cyan light:bg-slate-100'
                    : 'text-mist hover:text-white light:text-slate-600 light:hover:text-slate-950'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition hover:border-brand-cyan hover:text-brand-cyan light:border-slate-200 light:text-slate-700"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#contact" className="button-primary hidden px-5 sm:inline-flex">
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden light:border-slate-200 light:text-slate-950"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 rounded-[1.5rem] border border-white/10 bg-ink/94 p-3 shadow-soft backdrop-blur-2xl light:border-slate-200 light:bg-white lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-mist transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-100 light:hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
