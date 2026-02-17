# Facade Components

Facade Components is a React + TypeScript demo for incrementally migrating UI components from legacy implementations to new ones without breaking consumers.

## What this project does

This repository shows a facade pattern for component versioning:

- expose one public component (for example `Button`) to app code
- route internally to legacy or new implementations
- choose versions by explicit prop (`isNew`) or by shared context (`VersionMapProvider`)

The important modules are:

- `src/HOC/withFacade.tsx`: generic facade wrapper
- `src/VersionMap/`: context and component-to-version map
- `src/components/Legacy/` and `src/components/Latest/`: old/new implementations

## Problems it solves

- avoids risky "rewrite everything at once" migrations
- keeps the external API stable while internals change
- allows controlled rollout per component or subtree
- supports side-by-side testing of old vs new behavior in the same app

This is useful when modernizing a design system or shared component library across many teams.

## How to run it

```bash
npm install
npm run dev
```

Additional commands:

- `npm run build`: type-check and build production assets
- `npm run preview`: serve the production build locally
- `npm run lint`: run ESLint checks
