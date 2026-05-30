import { FormEvent, useMemo, useState } from 'react';
import { Save, Upload, X } from 'lucide-react';
import type { Project, ProjectScreenshot } from '../../types';
import { createProject, updateProject, type ProjectInput } from '../../services/projects';

type ProjectFormProps = {
  project?: Project | null;
  onDone: () => void;
};

const emptyProject: ProjectInput = {
  title: '',
  subtitle: '',
  description: '',
  role: '',
  focus: [],
  techStack: [],
  githubUrl: '',
  liveUrl: '',
  featured: false,
  status: 'Draft',
  category: '',
  screenshots: [],
};

export function ProjectForm({ project, onDone }: ProjectFormProps) {
  const initialValue = useMemo<ProjectInput>(
    () =>
      project
        ? {
            title: project.title,
            subtitle: project.subtitle,
            description: project.description,
            role: project.role,
            focus: project.focus,
            techStack: project.techStack,
            githubUrl: project.githubUrl,
            liveUrl: project.liveUrl,
            featured: project.featured,
            status: project.status,
            category: project.category,
            screenshots: project.screenshots,
          }
        : emptyProject,
    [project],
  );
  const [value, setValue] = useState<ProjectInput>(initialValue);
  const [techStack, setTechStack] = useState(initialValue.techStack.join(', '));
  const [focus, setFocus] = useState(initialValue.focus.join(', '));
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const setField = <Key extends keyof ProjectInput>(key: Key, nextValue: ProjectInput[Key]) => {
    setValue((current) => ({ ...current, [key]: nextValue }));
  };

  const removeScreenshot = (screenshot: ProjectScreenshot) => {
    setValue((current) => ({
      ...current,
      screenshots: (current.screenshots ?? []).filter((item) => item.url !== screenshot.url),
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError('');

    const payload: ProjectInput = {
      ...value,
      techStack: splitList(techStack),
      focus: splitList(focus),
    };

    try {
      if (project) {
        await updateProject(project.id, payload, files);
      } else {
        await createProject(payload, files);
      }
      onDone();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to save project.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <p className="rounded-xl border border-brand-coral/30 bg-brand-coral/10 p-3 text-sm text-brand-coral">{error}</p>}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Project Title" value={value.title} onChange={(next) => setField('title', next)} required />
        <Field label="Subtitle" value={value.subtitle} onChange={(next) => setField('subtitle', next)} required />
        <Field label="Role" value={value.role} onChange={(next) => setField('role', next)} />
        <Field label="Category" value={value.category} onChange={(next) => setField('category', next)} />
        <Field label="Status" value={value.status} onChange={(next) => setField('status', next)} />
        <Field label="Live URL" value={value.liveUrl} onChange={(next) => setField('liveUrl', next)} />
        <Field label="GitHub URL" value={value.githubUrl} onChange={(next) => setField('githubUrl', next)} />
        <Field label="Tech Stack" value={techStack} onChange={setTechStack} placeholder="React, TypeScript, Firebase" />
        <Field label="Focus Areas" value={focus} onChange={setFocus} placeholder="Branding, Responsive Design" />
      </div>

      <label className="block text-sm font-bold text-mist">
        Description
        <textarea className="mt-2 min-h-32 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none focus:border-brand-cyan" value={value.description} onChange={(event) => setField('description', event.target.value)} required />
      </label>

      <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-white">
        <input type="checkbox" checked={value.featured} onChange={(event) => setField('featured', event.target.checked)} className="h-5 w-5 accent-brand-cyan" />
        Featured Project
      </label>

      {(value.screenshots?.length ?? 0) > 0 && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {value.screenshots?.map((screenshot) => (
            <div key={screenshot.url} className="relative overflow-hidden rounded-xl border border-white/10">
              <img src={screenshot.url} alt="" className="h-32 w-full object-cover" />
              <button type="button" onClick={() => removeScreenshot(screenshot)} className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-ink/80 text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <label className="block rounded-xl border border-dashed border-brand-cyan/40 bg-brand-cyan/10 p-5 text-sm font-bold text-brand-cyan">
        <span className="flex items-center gap-2"><Upload className="h-4 w-4" /> Upload Screenshots</span>
        <input className="mt-3 block w-full text-sm text-mist" type="file" accept="image/*" multiple onChange={(event) => setFiles(Array.from(event.target.files ?? []))} />
      </label>

      <div className="flex flex-wrap justify-end gap-3">
        <button type="button" className="button-secondary" onClick={onDone}>Cancel</button>
        <button type="submit" className="button-primary" disabled={saving}>
          <Save className="h-4 w-4" />
          {saving ? 'Saving...' : 'Save Project'}
        </button>
      </div>
    </form>
  );
}

function Field({ label, value, onChange, required, placeholder }: { label: string; value: string; onChange: (value: string) => void; required?: boolean; placeholder?: string }) {
  return (
    <label className="block text-sm font-bold text-mist">
      {label}
      <input className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none focus:border-brand-cyan" value={value} onChange={(event) => onChange(event.target.value)} required={required} placeholder={placeholder} />
    </label>
  );
}

function splitList(value: string) {
  return value.split(',').map((item) => item.trim()).filter(Boolean);
}
