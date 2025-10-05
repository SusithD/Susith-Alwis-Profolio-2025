import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio' | 'project'>('home');
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [showPreloader, setShowPreloader] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first load
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowPreloader(false);
      setIsFirstLoad(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  useEffect(() => {
    // Handle browser back/forward
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/') {
        setCurrentPage('home');
      } else if (path === '/portfolio') {
        setCurrentPage('portfolio');
      } else if (path.startsWith('/project/')) {
        setCurrentPage('project');
        setSelectedProject(path.replace('/project/', ''));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: 'home' | 'portfolio' | 'project', projectId?: string) => {
    if (page === 'home') {
      window.history.pushState({}, '', '/');
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'portfolio') {
      window.history.pushState({}, '', '/portfolio');
      setCurrentPage('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'project' && projectId) {
      window.history.pushState({}, '', `/project/${projectId}`);
      setCurrentPage('project');
      setSelectedProject(projectId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <div className="size-full">
      <AnimatePresence mode="wait">
        {showPreloader && isFirstLoad && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>
      
      {!showPreloader && (
        <>
          <Navigation currentPage={currentPage} onNavigate={navigateTo} />
          {currentPage === 'home' && <HomePage onNavigateToProject={navigateTo} />}
          {currentPage === 'portfolio' && <PortfolioPage onNavigateToProject={navigateTo} />}
          {currentPage === 'project' && <ProjectDetailPage projectId={selectedProject} onNavigateHome={() => navigateTo('home')} />}
        </>
      )}
    </div>
  );
}