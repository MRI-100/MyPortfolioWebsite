import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { isFirebaseConfigured } from '../../services/firebase';

export function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/admin';

  if (user) return <Navigate to="/admin" replace />;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'Unable to sign in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="grid min-h-screen place-items-center bg-ink px-5 py-10 text-white">
      <motion.form
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        onSubmit={handleSubmit}
        className="panel w-full max-w-md rounded-2xl p-6"
      >
        <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-brand-cyan/15 text-brand-cyan">
          <Lock className="h-5 w-5" />
        </div>
        <p className="eyebrow">Portfolio CMS</p>
        <h1 className="mt-3 font-display text-3xl font-black">Admin Login</h1>

        {!isFirebaseConfigured && (
          <p className="mt-5 rounded-xl border border-brand-coral/30 bg-brand-coral/10 p-3 text-sm text-brand-coral">
            Firebase environment variables are missing.
          </p>
        )}

        {error && <p className="mt-5 rounded-xl border border-brand-coral/30 bg-brand-coral/10 p-3 text-sm text-brand-coral">{error}</p>}

        <label className="mt-6 block text-sm font-bold text-mist">
          Email
          <input className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none focus:border-brand-cyan" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label className="mt-4 block text-sm font-bold text-mist">
          Password
          <input className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none focus:border-brand-cyan" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        <button className="button-primary mt-6 w-full" type="submit" disabled={loading || !isFirebaseConfigured}>
          {loading ? 'Signing in...' : 'Login'}
        </button>
      </motion.form>
    </main>
  );
}
