import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
  type DocumentData,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import type { Project, ProjectScreenshot } from '../types';
import { db, storage } from './firebase';

export type ProjectInput = Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'screenshots'> & {
  screenshots?: ProjectScreenshot[];
};

export const projectsCollection = collection(db, 'projects');

export function mapProjectDoc(snapshot: QueryDocumentSnapshot<DocumentData>): Project {
  const data = snapshot.data();

  return {
    id: snapshot.id,
    title: data.title ?? '',
    subtitle: data.subtitle ?? '',
    description: data.description ?? '',
    role: data.role ?? '',
    focus: Array.isArray(data.focus) ? data.focus : [],
    techStack: Array.isArray(data.techStack) ? data.techStack : [],
    githubUrl: data.githubUrl ?? '',
    liveUrl: data.liveUrl ?? '',
    featured: Boolean(data.featured),
    status: data.status ?? 'Draft',
    category: data.category ?? '',
    screenshots: normalizeScreenshots(data.screenshots),
    createdAt: data.createdAt?.toDate?.(),
    updatedAt: data.updatedAt?.toDate?.(),
  };
}

export function normalizeScreenshots(value: unknown): ProjectScreenshot[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (typeof item === 'string') return { url: item };
      if (item && typeof item === 'object' && 'url' in item && typeof item.url === 'string') {
        return item as ProjectScreenshot;
      }
      return null;
    })
    .filter(Boolean) as ProjectScreenshot[];
}

export function getProjectsQuery() {
  return query(projectsCollection, orderBy('createdAt', 'desc'));
}

export function getFeaturedProjectQuery() {
  return query(projectsCollection, where('featured', '==', true), limit(1));
}

export async function setOnlyFeatured(projectId: string) {
  const featuredSnapshot = await getDocs(query(projectsCollection, where('featured', '==', true)));
  const batch = writeBatch(db);

  featuredSnapshot.docs.forEach((projectDoc) => {
    if (projectDoc.id !== projectId) {
      batch.update(projectDoc.ref, { featured: false, updatedAt: serverTimestamp() });
    }
  });

  await batch.commit();
}

export async function uploadProjectScreenshots(projectId: string, files: File[]) {
  const uploads = files.map(async (file) => {
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const path = `projects/${projectId}/${crypto.randomUUID()}-${safeName}`;
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    const type = file.name.toLowerCase().includes('mobile') ? 'mobile' : 'desktop';
    return { url, path, type } satisfies ProjectScreenshot;
  });

  return Promise.all(uploads);
}

export async function createProject(input: ProjectInput, files: File[]) {
  const docRef = await addDoc(projectsCollection, {
    ...input,
    screenshots: input.screenshots ?? [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  const uploadedScreenshots = await uploadProjectScreenshots(docRef.id, files);
  await updateDoc(docRef, {
    id: docRef.id,
    screenshots: [...(input.screenshots ?? []), ...uploadedScreenshots],
    updatedAt: serverTimestamp(),
  });

  if (input.featured) await setOnlyFeatured(docRef.id);

  return docRef.id;
}

export async function updateProject(projectId: string, input: ProjectInput, files: File[]) {
  const uploadedScreenshots = await uploadProjectScreenshots(projectId, files);
  await updateDoc(doc(db, 'projects', projectId), {
    ...input,
    screenshots: [...(input.screenshots ?? []), ...uploadedScreenshots],
    updatedAt: serverTimestamp(),
  });

  if (input.featured) await setOnlyFeatured(projectId);
}

export async function deleteProject(project: Project) {
  await Promise.all(
    project.screenshots.map(async (screenshot) => {
      if (!screenshot.path) return;
      await deleteObject(ref(storage, screenshot.path)).catch(() => undefined);
    }),
  );

  await deleteDoc(doc(db, 'projects', project.id));
}
