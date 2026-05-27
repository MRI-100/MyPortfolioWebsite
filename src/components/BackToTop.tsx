import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`fixed bottom-6 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 text-white shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:text-brand-cyan light:border-slate-200 light:bg-white light:text-slate-950 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </a>
  );
}
