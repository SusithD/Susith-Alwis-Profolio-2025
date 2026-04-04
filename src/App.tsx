import { useState, useEffect, useCallback, lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));

type Page = 'home' | 'portfolio' | 'project';

function parsePath(path: string): { page: Page; projectId: string } {
  if (path === '/portfolio') return { page: 'portfolio', projectId: '' };
  if (path.startsWith('/project/')) return { page: 'project', projectId: path.replace('/project/', '') };
  return { page: 'home', projectId: '' };
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState('');

  // Shared route parser used by both init and popstate
  const syncFromUrl = useCallback(() => {
    const { page, projectId } = parsePath(window.location.pathname);
    setCurrentPage(page);
    setSelectedProject(projectId);
  }, []);

  useEffect(() => { syncFromUrl(); }, [syncFromUrl]);

  useEffect(() => {
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, [syncFromUrl]);

  const navigateTo = useCallback((page: Page, projectId?: string) => {
    const urls: Record<Page, string> = {
      home: '/',
      portfolio: '/portfolio',
      project: `/project/${projectId ?? ''}`,
    };
    window.history.pushState({}, '', urls[page]);
    setCurrentPage(page);
    if (projectId) setSelectedProject(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="size-full">
      <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
        {currentPage === 'home' && <HomePage onNavigateToProject={navigateTo} />}
        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigateToProject={navigateTo}
            onNavigateHome={() => navigateTo('home')}
          />
        )}
        {currentPage === 'project' && (
          <ProjectDetailPage
            projectId={selectedProject}
            onNavigateHome={() => navigateTo('home')}
            onNavigatePortfolio={() => navigateTo('portfolio')}
          />
        )}
      </Suspense>
    </div>
  );
}
