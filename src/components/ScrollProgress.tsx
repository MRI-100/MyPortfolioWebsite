import { useScrollProgress } from '../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[90] h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-coral"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
