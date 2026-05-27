import { motion } from 'framer-motion';

type LoadingScreenProps = {
  isLoading: boolean;
};

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
          <span className="font-display text-2xl font-black text-brand-cyan">M</span>
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-mist">Loading portfolio</p>
      </div>
    </motion.div>
  );
}
