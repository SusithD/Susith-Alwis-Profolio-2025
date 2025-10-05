# Personal Portfolio Website

This repository contains a personal portfolio website built with React and Vite. The design is based on a Figma file (link below) and the project uses modern UI primitives and libraries to make the site responsive and extendable.

Figma design: 

## Features

- Built with Vite + React
- Uses Radix UI primitives and several modern UI helper libraries
- Component-driven structure under `src/components` and `src/components/ui`

## Quick start

Prerequisites:
- Node.js 18+ (recommended)
- npm (or compatible package manager)

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
# visit http://localhost:5173
```

3. Create a production build

```bash
npm run build
```

4. Preview the production build locally

```bash
npx vite preview
# or add a script: "preview": "vite preview" and run `npm run preview`
```

## Project structure (high level)

- `index.html` - Vite entry
- `src/` - application source
  - `main.tsx`, `App.tsx` - app entry and root
  - `components/` - page components (Hero, About, Projects, etc.)
  - `components/ui/` - reusable UI primitives and wrappers
  - `pages/` - top-level page components
  - `styles/` - global CSS

## Scripts

- `npm run dev` — start development server (Vite)
- `npm run build` — build for production

These scripts are defined in `package.json`.
