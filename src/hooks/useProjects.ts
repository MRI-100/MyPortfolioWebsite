import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import type { Project } from '../types';
import { getProjectsQuery, mapProjectDoc } from '../services/projects';
import { isFirebaseConfigured } from '../services/firebase';

type ProjectsState = {
  projects: Project[];
  loading: boolean;
  error: string | null;
};

export function useProjects() {
  const [state, setState] = useState<ProjectsState>({
    projects: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setState({ projects: [], loading: false, error: 'Firebase environment variables are not configured.' });
      return undefined;
    }

    return onSnapshot(
      getProjectsQuery(),
      (snapshot) => {
        setState({
          projects: snapshot.docs.map(mapProjectDoc),
          loading: false,
          error: null,
        });
      },
      (error) => {
        setState({ projects: [], loading: false, error: error.message });
      },
    );
  }, []);

  return state;
}
