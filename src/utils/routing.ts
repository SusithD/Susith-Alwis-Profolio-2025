export type Page = 'home' | 'portfolio' | 'project' | 'notfound';

export interface Route {
  page: Page;
  projectId: string;
}

export function parsePath(path: string): Route {
  if (path === '/') return { page: 'home', projectId: '' };
  if (path === '/portfolio') return { page: 'portfolio', projectId: '' };
  if (path.startsWith('/project/')) return { page: 'project', projectId: path.replace('/project/', '') };
  return { page: 'notfound', projectId: '' };
}

export const PAGE_URLS: Record<Page, (projectId?: string) => string> = {
  home: () => '/',
  portfolio: () => '/portfolio',
  project: (projectId) => `/project/${projectId ?? ''}`,
  notfound: () => '/404',
};
