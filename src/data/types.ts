export interface ProjectImpact {
  metric: string;
  label: string;
}

export interface ProjectProcess {
  phase: string;
  description: string;
}

export interface ProjectListing {
  id: string;
  title: string;
  role: string;
  description: string;
  category: 'design' | 'web' | 'ai' | 'mobile';
  tags: string[];
  accentColor: string;
  gradient: string;
  initials: string;
  featured: boolean;
  size: 'large' | 'medium';
  image: string;
}

export interface ProjectDetail {
  title: string;
  subtitle: string;
  role: string;
  year: string;
  duration: string;
  team: string;
  description: string;
  heroImage: string;
  behanceLink?: string;
  githubLink?: string;
  liveWebsite?: string;
  challenge?: string;
  solution?: string;
  impact: ProjectImpact[];
  responsibilities: string[];
  technologies: string[];
  process: ProjectProcess[];
  keyFeatures: string[];
  images?: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  roles: { title: string; period: string; current: boolean }[];
  projects: { name: string; description: string }[];
  tags: string[];
}

export interface EducationItem {
  degree: string;
  status: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  coursework: string[];
  tags: string[];
}
