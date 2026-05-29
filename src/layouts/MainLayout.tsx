import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BackToTop } from '../components/BackToTop';
import { LoadingScreen } from '../components/LoadingScreen';
import { Navbar } from '../components/Navbar';
import { ScrollProgress } from '../components/ScrollProgress';
import { useMouseSpotlight } from '../hooks/useMouseSpotlight';

export function MainLayout() {
  const [loading, setLoading] = useState(true);
  useMouseSpotlight();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 720);
    return () => window.clearTimeout(timer);
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
