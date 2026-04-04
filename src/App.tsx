import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { parsePath, PAGE_URLS } from './utils/routing';
import type { Page } from './utils/routing';

const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  const initialRoute = parsePath(window.location.pathname);
  const [currentPage, setCurrentPage] = useState<Page>(initialRoute.page);
  const [selectedProject, setSelectedProject] = useState(initialRoute.projectId);

  // Shared route parser used by popstate
  const syncFromUrl = useCallback(() => {
    const { page, projectId } = parsePath(window.location.pathname);
    setCurrentPage(page);
    setSelectedProject(projectId);
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, [syncFromUrl]);

  const navigateTo = useCallback((page: Page, projectId?: string) => {
    window.history.pushState({}, '', PAGE_URLS[page](projectId));
    setCurrentPage(page);
    if (projectId) setSelectedProject(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="size-full">
      <ErrorBoundary>
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
          {currentPage === 'notfound' && (
            <NotFoundPage onNavigateHome={() => navigateTo('home')} />
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
