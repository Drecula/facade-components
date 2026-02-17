# Repository Guidelines

## Project Structure & Module Organization
This is a Vite + React + TypeScript app. Main code lives in `src/`.
- App entry: `src/main.tsx`, root UI in `src/App.tsx`
- Facade logic: `src/HOC/withFacade.tsx`, `src/VersionMap/` (context, hooks, version mapping)
- Versioned UI implementations: `src/components/Latest/` and `src/components/Legacy/`
- Component-level examples: `src/components/Button/`
- Static assets: `public/` and `src/assets/`

Keep new facade-enabled components grouped by feature under `src/components/<Feature>/`, and keep version-routing logic in `src/VersionMap/`.

## Build, Test, and Development Commands
Use npm scripts from `package.json`:
- `npm run dev`: start Vite dev server with HMR
- `npm run build`: run TypeScript project build (`tsc -b`) and produce production bundle
- `npm run preview`: serve the built app locally
- `npm run lint`: run ESLint across the repo

There is currently no `npm test` script configured.

## Coding Style & Naming Conventions
- Language: TypeScript + TSX (`strict` mode enabled in `tsconfig.app.json`)
- Indentation: 2 spaces
- Components and context providers: PascalCase (`VersionMapProvider`, `Button`)
- Hooks: camelCase prefixed with `use` (`useVersionMap`)
- Keep files focused; prefer one exported component/hook per file when practical

Linting uses `eslint.config.js` with `typescript-eslint`, `react-hooks`, and `react-refresh` rules. Run `npm run lint` before opening a PR.

## Testing Guidelines
Automated tests are not set up yet (no test framework or coverage gate in this repo). Minimum validation for each change:
- `npm run lint`
- `npm run build`

When adding tests, colocate as `*.test.ts(x)` next to the module under test.

## Commit & Pull Request Guidelines
Recent commits use short, direct, lowercase messages (for example: `attempt to fix type problem`, `added new button to app.tsx for examples`). Follow the same style and keep each commit scoped to one change.

For PRs, include:
- What changed and why
- Linked issue/task (if available)
- Screenshots or GIFs for UI changes
- Local verification steps and results (`lint`, `build`)
