export type Page = 'home' | 'portfolio' | 'project' | 'notfound';

export interface Route {
  page: Page;
  projectId: string;
}

/**
 * Normalises a URL path before matching:
 * - strips trailing slashes (except root)
 * - strips query strings and hash fragments
 * - lowercases the path
 */
function normalisePath(raw: string): string {
  let path = raw.split('?')[0].split('#')[0];
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path.toLowerCase();
}

export function parsePath(raw: string): Route {
  const path = normalisePath(raw);
  if (path === '/') return { page: 'home', projectId: '' };
  if (path === '/portfolio') return { page: 'portfolio', projectId: '' };
  if (path === '/project') return { page: 'project', projectId: '' };
  if (path.startsWith('/project/')) {
    const projectId = path.replace('/project/', '');
    return { page: 'project', projectId };
  }
  return { page: 'notfound', projectId: '' };
}

export const PAGE_URLS: Record<Page, (projectId?: string) => string> = {
  home: () => '/',
  portfolio: () => '/portfolio',
  project: (projectId) => `/project/${projectId ?? ''}`,
  notfound: () => '/404',
};
