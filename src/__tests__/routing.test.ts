import { describe, it, expect } from 'vitest';
import { parsePath, PAGE_URLS } from '../utils/routing';

describe('parsePath', () => {
  it('parses home route', () => {
    expect(parsePath('/')).toEqual({ page: 'home', projectId: '' });
  });

  it('parses portfolio route', () => {
    expect(parsePath('/portfolio')).toEqual({ page: 'portfolio', projectId: '' });
  });

  it('parses project route with id', () => {
    expect(parsePath('/project/organic-beltline')).toEqual({
      page: 'project',
      projectId: 'organic-beltline',
    });
  });

  it('returns notfound for unknown routes', () => {
    expect(parsePath('/unknown')).toEqual({ page: 'notfound', projectId: '' });
    expect(parsePath('/about')).toEqual({ page: 'notfound', projectId: '' });
    expect(parsePath('/contact')).toEqual({ page: 'notfound', projectId: '' });
  });

  it('normalises trailing slashes', () => {
    expect(parsePath('/portfolio/')).toEqual({ page: 'portfolio', projectId: '' });
    expect(parsePath('/project/organic-beltline/')).toEqual({
      page: 'project',
      projectId: 'organic-beltline',
    });
  });

  it('strips query strings', () => {
    expect(parsePath('/portfolio?sort=recent')).toEqual({ page: 'portfolio', projectId: '' });
    expect(parsePath('/project/foo?bar=1')).toEqual({ page: 'project', projectId: 'foo' });
  });

  it('strips hash fragments', () => {
    expect(parsePath('/portfolio#section')).toEqual({ page: 'portfolio', projectId: '' });
  });

  it('normalises case', () => {
    expect(parsePath('/Portfolio')).toEqual({ page: 'portfolio', projectId: '' });
    expect(parsePath('/Project/Organic-Beltline')).toEqual({
      page: 'project',
      projectId: 'organic-beltline',
    });
  });

  it('parses project route with complex id', () => {
    expect(parsePath('/project/tech-startup-landing-page')).toEqual({
      page: 'project',
      projectId: 'tech-startup-landing-page',
    });
  });

  it('handles empty project id', () => {
    expect(parsePath('/project/')).toEqual({ page: 'project', projectId: '' });
  });
});

describe('PAGE_URLS', () => {
  it('generates correct home URL', () => {
    expect(PAGE_URLS.home()).toBe('/');
  });

  it('generates correct portfolio URL', () => {
    expect(PAGE_URLS.portfolio()).toBe('/portfolio');
  });

  it('generates correct project URL with id', () => {
    expect(PAGE_URLS.project('organic-beltline')).toBe('/project/organic-beltline');
  });

  it('generates correct 404 URL', () => {
    expect(PAGE_URLS.notfound()).toBe('/404');
  });
});
