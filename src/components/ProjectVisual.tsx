import type { CSSProperties } from 'react';

type ProjectVisualProps = {
  title: string;
  accent: string;
};

export function ProjectVisual({ title, accent }: ProjectVisualProps) {
  const isDashboard = /SmartPredict|Expense|Portfolio|UrbanCode/i.test(title);

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-ink light:border-slate-200"
      style={{ '--accent': accent } as CSSProperties}
      aria-label={`${title} interface preview`}
    >
      <div className="absolute inset-0 bg-grid-dark bg-[length:28px_28px] opacity-70 light:opacity-30" />
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 25% 20%, ${accent}44, transparent 36%)` }} />
      <div className="absolute right-5 top-5 h-16 w-16 rounded-full blur-2xl" style={{ backgroundColor: `${accent}55` }} />
      <div className="relative m-4 h-[calc(100%-2rem)] rounded-xl border border-white/12 bg-white/[0.07] p-3 shadow-soft backdrop-blur light:bg-white/80">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
          <span className="ml-3 hidden text-[10px] font-bold uppercase tracking-[0.18em] text-mist sm:block">{title}</span>
          <span className="ml-auto h-2 w-20 rounded-full bg-white/20 light:bg-slate-200" />
        </div>
        <div className="mt-5 grid h-[calc(100%-2.25rem)] grid-cols-[0.72fr_1.28fr] gap-3">
          <div className="space-y-3 rounded-lg border border-white/10 bg-black/10 p-3 light:bg-slate-50">
            <div className="h-16 rounded-lg" style={{ backgroundColor: `${accent}36` }} />
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-7 rounded-full bg-white/10 light:bg-slate-200" />
            ))}
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-7 w-2/3 rounded-full bg-white/20 light:bg-slate-200" />
              <div className="h-7 w-16 rounded-full" style={{ backgroundColor: accent }} />
            </div>
            {isDashboard ? (
              <>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="h-16 rounded-lg border border-white/10 bg-white/10 p-2 light:bg-white">
                      <div className="h-2 w-10 rounded-full" style={{ backgroundColor: `${accent}88` }} />
                      <div className="mt-5 h-3 w-2/3 rounded-full bg-white/20 light:bg-slate-200" />
                    </div>
                  ))}
                </div>
                <div className="h-24 rounded-lg border border-white/10 bg-white/10 p-3 light:bg-slate-100">
                  <div className="h-full rounded-md" style={{ background: `linear-gradient(135deg, ${accent}22, rgba(255,255,255,.06))` }} />
                </div>
              </>
            ) : (
              <>
                <div className="h-20 rounded-lg border border-white/10 p-3" style={{ backgroundColor: `${accent}18` }}>
                  <div className="h-3 w-1/2 rounded-full bg-white/30" />
                  <div className="mt-4 h-8 w-28 rounded-full" style={{ backgroundColor: accent }} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[0, 1].map((item) => (
                    <div key={item} className="h-20 rounded-lg bg-white/10 light:bg-slate-100" />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
