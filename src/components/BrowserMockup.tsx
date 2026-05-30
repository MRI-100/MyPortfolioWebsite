import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type BrowserMockupProps = {
  src?: string;
  images?: Array<{ src: string; alt: string; label: string }>;
  alt: string;
  domain: string;
  accent?: string;
  title?: string;
};

export function BrowserMockup({ src, images, alt, domain, accent = '#3ee7d3', title }: BrowserMockupProps) {
  const slides = useMemo(
    () => images ?? (src ? [{ src, alt, label: title ?? alt }] : []),
    [alt, images, src, title],
  );
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive((index + slides.length) % slides.length);
  };

  const next = () => goTo(active + 1);
  const previous = () => goTo(active - 1);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      className="group relative rounded-[1.6rem] p-px [transform-style:preserve-3d]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="absolute -inset-8 rounded-[2rem] opacity-50 blur-3xl transition duration-500 group-hover:opacity-80"
        style={{ background: `radial-gradient(circle, ${accent}55, transparent 62%)` }}
      />
      <motion.div
        className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-brand-blue/20 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div
        className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-ink/86 shadow-soft backdrop-blur-xl transition duration-300 group-hover:border-brand-cyan/60 group-hover:shadow-glow light:border-slate-200 light:bg-white"
        tabIndex={0}
        role="region"
        aria-label={`${title ?? alt} screenshot carousel`}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') next();
          if (event.key === 'ArrowLeft') previous();
        }}
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.055] px-4 py-3 light:border-slate-200 light:bg-slate-50">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 min-w-0 flex-1 truncate rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-center text-xs font-bold text-mist light:border-slate-200 light:bg-white light:text-slate-600">
            {domain}
          </span>
        </div>
        <div className="relative grid min-h-[360px] overflow-hidden bg-ink p-3 light:bg-slate-100 sm:min-h-[430px] lg:min-h-[500px]">
          {slides.length > 0 ? (
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 34 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -34 }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) next();
                  if (info.offset.x > 70) previous();
                }}
                className="absolute inset-3 grid place-items-center rounded-2xl bg-black/20 light:bg-white"
              >
                <img
                  src={slides[active].src}
                  alt={slides[active].alt}
                  loading={active === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  className="max-h-full max-w-full select-none object-contain"
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="h-full w-full bg-grid-dark bg-[length:30px_30px] p-5">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="h-8 w-2/3 rounded-full bg-white/15" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="h-24 rounded-xl bg-white/10" />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/18 via-transparent to-white/5" />
          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink/72 text-white backdrop-blur-xl transition hover:border-brand-cyan hover:text-brand-cyan"
                aria-label="Previous UrbanCode screenshot"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink/72 text-white backdrop-blur-xl transition hover:border-brand-cyan hover:text-brand-cyan"
                aria-label="Next UrbanCode screenshot"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.label}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-2.5 rounded-full transition ${
                      active === index ? 'w-8 bg-brand-cyan' : 'w-2.5 bg-white/35 hover:bg-white/70'
                    }`}
                    aria-label={`Show ${slide.label}`}
                  />
                ))}
              </div>
            </>
          )}
          {title && (
            <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-ink/72 px-3 py-1 text-xs font-bold text-white backdrop-blur-xl">
              {slides[active]?.label ?? title}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
