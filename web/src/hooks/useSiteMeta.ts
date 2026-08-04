import { useEffect } from 'react';
import { brand } from '@/data/site';

export const useSiteMeta = (title: string, description?: string) => {
  useEffect(() => {
    document.title = `${title} | ${brand.name}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
  }, [title, description]);
};
