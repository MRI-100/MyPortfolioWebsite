import type { CSSProperties } from 'react';

type ProjectVisualProps = {
  title: string;
  accent: string;
};

export function ProjectVisual({ title, accent }: ProjectVisualProps) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-ink light:border-slate-200"
      style={{ '--accent': accent } as CSSProperties}
      aria-label={`${title} interface preview`}
    >
      <div className="absolute inset-0 bg-grid-dark bg-[length:28px_28px] opacity-70 light:opacity-30" />
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 25% 20%, ${accent}44, transparent 36%)` }} />
      <div className="relative m-4 h-[calc(100%-2rem)] rounded-md border border-white/12 bg-white/[0.07] p-3 backdrop-blur light:bg-white/80">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
          <span className="ml-auto h-2 w-20 rounded-full bg-white/20 light:bg-slate-200" />
        </div>
        <div className="mt-5 grid grid-cols-[0.8fr_1.2fr] gap-3">
          <div className="space-y-3">
            <div className="h-16 rounded-md" style={{ backgroundColor: `${accent}36` }} />
            <div className="h-8 rounded-md bg-white/10 light:bg-slate-100" />
            <div className="h-8 rounded-md bg-white/10 light:bg-slate-100" />
          </div>
          <div className="space-y-3">
            <div className="h-7 w-3/4 rounded-full bg-white/20 light:bg-slate-200" />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((item) => (
                <div key={item} className="h-16 rounded-md bg-white/10 light:bg-slate-100" />
              ))}
            </div>
            <div className="h-20 rounded-md border border-white/10 bg-white/10 light:bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
