import { describe, it, expect } from 'vitest';
import { experiences, education } from '../experience';

describe('experiences', () => {
  it('contains 5 experience entries', () => {
    expect(experiences.length).toBe(5);
  });

  it('every entry has required fields', () => {
    for (const exp of experiences) {
      expect(exp.company).toBeTruthy();
      expect(exp.location).toBeTruthy();
      expect(exp.roles.length).toBeGreaterThan(0);
      expect(exp.projects.length).toBeGreaterThan(0);
      expect(exp.tags.length).toBeGreaterThan(0);
    }
  });

  it('CoverageX is the first entry', () => {
    expect(experiences[0].company).toBe('CoverageX');
  });
});

describe('education', () => {
  it('contains at least one entry', () => {
    expect(education.length).toBeGreaterThan(0);
  });

  it('first entry is NIBM', () => {
    expect(education[0].institution).toContain('NIBM');
  });
});
