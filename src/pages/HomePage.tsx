import Hero from '../components/Hero';
import About from '../components/About';
import Philosophy from '../components/Philosophy';
import Stats from '../components/Stats';
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
      <Hero />
      <About />
      <Philosophy />
      <Stats />
      <Projects onNavigateToProject={onNavigateToProject} />
      <Process />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}