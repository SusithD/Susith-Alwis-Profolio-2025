import { describe, it, expect } from 'vitest';
import { portfolioProjects, projectDetails, homeProjects } from '../projects';

describe('portfolioProjects', () => {
  it('contains all 20 projects', () => {
    expect(portfolioProjects.length).toBe(20);
  });

  it('every project has required fields', () => {
    for (const project of portfolioProjects) {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.role).toBeTruthy();
      expect(project.category).toMatch(/^(design|web|ai|mobile)$/);
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.image).toBeTruthy();
    }
  });

  it('all project IDs are unique', () => {
    const ids = portfolioProjects.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('projectDetails', () => {
  it('has detail entries for all portfolio projects', () => {
    for (const project of portfolioProjects) {
      expect(projectDetails[project.id]).toBeDefined();
    }
  });

  it('every detail has required fields', () => {
    for (const [_id, detail] of Object.entries(projectDetails)) {
      expect(detail.title).toBeTruthy();
      expect(detail.subtitle).toBeTruthy();
      expect(detail.role).toBeTruthy();
      expect(detail.year).toBeTruthy();
      expect(detail.description).toBeTruthy();
      expect(detail.impact.length).toBeGreaterThan(0);
      expect(detail.technologies.length).toBeGreaterThan(0);
      expect(detail.process.length).toBeGreaterThan(0);
      expect(detail.keyFeatures.length).toBeGreaterThan(0);
      expect(detail.responsibilities.length).toBeGreaterThan(0);
    }
  });
});

describe('homeProjects', () => {
  it('contains 6 featured projects', () => {
    expect(homeProjects.length).toBe(6);
  });

  it('all home projects exist in portfolio', () => {
    const portfolioIds = new Set(portfolioProjects.map(p => p.id));
    for (const project of homeProjects) {
      expect(portfolioIds.has(project.id)).toBe(true);
    }
  });

  it('all home projects have detail entries', () => {
    for (const project of homeProjects) {
      expect(projectDetails[project.id]).toBeDefined();
    }
  });
});
