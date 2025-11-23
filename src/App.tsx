import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio' | 'project'>('home');
  const [selectedProject, setSelectedProject] = useState<string>('');

  useEffect(() => {
    // Initialize page based on current URL
    const initializePage = () => {
      const path = window.location.pathname;
      if (path === '/portfolio') {
        setCurrentPage('portfolio');
      } else if (path.startsWith('/project/')) {
        setCurrentPage('project');
        setSelectedProject(path.replace('/project/', ''));
      } else {
        setCurrentPage('home');
      }
    };

    initializePage();
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

  return (
    <div className="size-full">
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
    </div>
  );
}