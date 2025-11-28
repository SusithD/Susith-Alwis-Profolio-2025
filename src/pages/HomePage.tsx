import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Philosophy from '../components/Philosophy';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface HomePageProps {
  onNavigateToProject: (page: 'portfolio' | 'project', projectId?: string) => void;
}

export default function HomePage({ onNavigateToProject }: HomePageProps) {
  return (
    <>
      <Navigation 
        currentPage="home" 
        onNavigate={(page) => {
          if (page === 'portfolio') onNavigateToProject('portfolio');
        }}
      />
      <Hero />
      <About />
      <Philosophy />
      <Projects onNavigateToProject={onNavigateToProject} />
      <Process />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}