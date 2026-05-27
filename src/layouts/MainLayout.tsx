import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BackToTop } from '../components/BackToTop';
import { LoadingScreen } from '../components/LoadingScreen';
import { Navbar } from '../components/Navbar';
import { ScrollProgress } from '../components/ScrollProgress';

export function MainLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 720);

    const onPointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', onPointerMove);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen isLoading={loading} />}</AnimatePresence>
      <ScrollProgress />
      <Navbar />
      <Outlet />
      <BackToTop />
    </>
  );
}
