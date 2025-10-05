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
  # Personal Portfolio Website

  This repository contains a personal portfolio website built with React and Vite. The design is based on a Figma file and the project uses modern UI primitives and libraries to make the site responsive and extendable.

  Figma design: (link removed)

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

  ## Docker (build and run)

  This project supports building a production-ready Docker image using a multi-stage Dockerfile and serving the built static files with nginx.

  Common commands:

  ```bash
  # build the docker image
  docker build -t portfolio:latest .

  # run the container and map port 8080 on the host to port 80 in the container
  docker run -it --rm -p 8080:80 portfolio:latest
  # visit http://localhost:8080
  ```

  Using docker-compose (provided):

  ```bash
  docker-compose up --build
  # visit http://localhost:8080
  ```

  Notes:
  - The Dockerfile uses Node for the build stage and nginx:alpine to serve static files.
  - Ports: nginx listens on 80 inside the container; examples map that to 8080 on the host.

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

  ---

  Files you can add to enable Docker easily (I can add them for you):

  - `Dockerfile` — multi-stage build for production
  - `.dockerignore` — files to exclude from build context
  - `nginx.conf` — minimal nginx configuration
  - `docker-compose.yml` — convenience compose file for local runs

  Tell me if you'd like me to create those files now and I'll add them and update `package.json` if needed.
