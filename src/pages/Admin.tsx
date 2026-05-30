import { motion } from 'framer-motion';
import { Eye, LogOut, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectForm } from '../components/admin/ProjectForm';
import { useAuth } from '../hooks/useAuth';
import { useProjects } from '../hooks/useProjects';
import { deleteProject } from '../services/projects';
import type { Project } from '../types';

export function Admin() {
  const { projects, loading, error } = useProjects();
  const { logout, user } = useAuth();
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deletingProject, setDeletingProject] = useState<Project | null>(null);
  const [deleteError, setDeleteError] = useState('');
  const [deleting, setDeleting] = useState(false);

  const openAddForm = () => {
    setEditingProject(null);
    setShowForm(true);
  };

  const confirmDelete = async () => {
    if (!deletingProject) return;
    setDeleting(true);
    setDeleteError('');
    try {
      await deleteProject(deletingProject);
      setDeletingProject(null);
    } catch (deleteFailure) {
      setDeleteError(deleteFailure instanceof Error ? deleteFailure.message : 'Unable to delete project.');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <main className="min-h-screen bg-ink px-5 py-8 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Portfolio CMS</p>
            <h1 className="mt-3 font-display text-3xl font-black sm:text-4xl">Admin Dashboard</h1>
            <p className="mt-2 text-sm text-mist">{user?.email}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="button-primary" onClick={openAddForm}>
              <Plus className="h-4 w-4" />
              Add Project
            </button>
            <button className="button-secondary" onClick={logout}>
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </header>

        <section className="mt-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-black">Projects</h2>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm text-mist">{projects.length} total</span>
          </div>

          {loading && <div className="panel rounded-2xl p-8 text-center text-mist">Loading projects...</div>}
          {error && <div className="panel rounded-2xl p-8 text-center text-brand-coral">{error}</div>}
          {!loading && !error && projects.length === 0 && <div className="panel rounded-2xl p-8 text-center text-mist">No projects yet. Add your first project.</div>}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="panel rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-black">{project.title}</h3>
                    <p className="mt-1 text-sm text-mist">{project.status}</p>
                  </div>
                  {project.featured && <span className="rounded-full bg-brand-cyan px-3 py-1 text-xs font-black text-ink">Featured</span>}
                </div>
                <p className="mt-4 line-clamp-2 text-sm leading-6 text-mist">{project.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-mist">
                  <span>{project.screenshots.length} screenshots</span>
                  <span>{project.category || 'Uncategorized'}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button className="button-secondary min-h-10 px-4" onClick={() => { setEditingProject(project); setShowForm(true); }}>
                    <Pencil className="h-4 w-4" />
                    Edit
                  </button>
                  <button className="button-secondary min-h-10 px-4" onClick={() => setDeletingProject(project)}>
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                  <Link className="button-primary min-h-10 px-4" to={project.liveUrl || '/'} target={project.liveUrl ? '_blank' : undefined}>
                    <Eye className="h-4 w-4" />
                    Preview
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>

      {showForm && (
        <Modal title={editingProject ? 'Edit Project' : 'Add Project'} onClose={() => setShowForm(false)}>
          <ProjectForm project={editingProject} onDone={() => setShowForm(false)} />
        </Modal>
      )}

      {deletingProject && (
        <Modal title="Delete Project" onClose={() => setDeletingProject(null)}>
          <p className="text-mist">Delete {deletingProject.title}? This removes the Firestore document and stored screenshots.</p>
          {deleteError && <p className="mt-4 rounded-xl border border-brand-coral/30 bg-brand-coral/10 p-3 text-sm text-brand-coral">{deleteError}</p>}
          <div className="mt-6 flex justify-end gap-3">
            <button className="button-secondary" onClick={() => setDeletingProject(null)}>Cancel</button>
            <button className="button-primary bg-brand-coral" onClick={confirmDelete} disabled={deleting}>{deleting ? 'Deleting...' : 'Delete'}</button>
          </div>
        </Modal>
      )}
    </main>
  );
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="panel max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-black">{title}</h2>
          <button className="button-secondary min-h-10 px-4" onClick={onClose}>Close</button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
