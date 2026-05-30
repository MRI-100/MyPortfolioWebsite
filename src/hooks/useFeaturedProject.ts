import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { isFirebaseConfigured } from '../services/firebase';
import { getFeaturedProjectQuery, mapProjectDoc } from '../services/projects';
import type { Project } from '../types';

type FeaturedProjectState = {
  project: Project | null;
  loading: boolean;
  error: string | null;
};

export function useFeaturedProject() {
  const [state, setState] = useState<FeaturedProjectState>({
    project: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setState({ project: null, loading: false, error: 'Firebase environment variables are not configured.' });
      return undefined;
    }

    return onSnapshot(
      getFeaturedProjectQuery(),
      (snapshot) => {
        setState({
          project: snapshot.docs[0] ? mapProjectDoc(snapshot.docs[0]) : null,
          loading: false,
          error: null,
        });
      },
      (error) => {
        setState({ project: null, loading: false, error: error.message });
      },
    );
  }, []);

  return state;
}
