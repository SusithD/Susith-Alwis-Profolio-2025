import { describe, it, expect } from 'vitest';
import { siteConfig } from '../site-config';

describe('siteConfig', () => {
  it('has valid email', () => {
    expect(siteConfig.email).toMatch(/@/);
  });

  it('has all social links', () => {
    expect(siteConfig.social.linkedin).toMatch(/^https:\/\//);
    expect(siteConfig.social.github).toMatch(/^https:\/\//);
    expect(siteConfig.social.dribbble).toMatch(/^https:\/\//);
  });

  it('has color values', () => {
    expect(siteConfig.colors.accent).toMatch(/^#/);
    expect(siteConfig.colors.dark).toMatch(/^#/);
    expect(siteConfig.colors.light).toMatch(/^#/);
  });
});
