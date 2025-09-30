# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website (fpomponii.it) built with Next.js 15.5.4, React 19, TypeScript, and Tailwind CSS v4. The project uses the Next.js App Router architecture with Turbopack for fast builds and development.

## Development Commands

**Development server:**
```bash
npm run dev
```
Runs Next.js in development mode with Turbopack enabled. Server runs at http://localhost:3000 with hot module replacement.

**Build:**
```bash
npm run build
```
Creates optimized production build using Turbopack. Outputs to `.next/` directory.

**Production server:**
```bash
npm run start
```
Runs the production server after building. Must run `npm run build` first.

**Linting:**
```bash
npm run lint
```
Runs ESLint with Next.js-specific rules (next/core-web-vitals, next/typescript).

## Architecture

**Framework:** Next.js 15 App Router with TypeScript

**Key directories:**
- `src/app/` - App Router pages and layouts using the file-based routing system
  - `layout.tsx` - Root layout with Geist fonts (sans and mono) configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global Tailwind CSS styles

**Path aliases:**
- `@/*` maps to `./src/*` (configured in tsconfig.json)

**Styling:**
- Tailwind CSS v4 with PostCSS plugin
- Custom font variables: `--font-geist-sans` and `--font-geist-mono`
- Dark mode support via Tailwind's dark: prefix

**TypeScript configuration:**
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler

**Build tool:** Turbopack (enabled via `--turbopack` flag in dev and build scripts)

## Important Notes

- The project is currently in a transitional state with many deleted files from a previous version (visible in git status)
- Current implementation is a fresh Next.js 15 starter with default structure
- ESLint uses the new flat config format (eslint.config.mjs) with FlatCompat for Next.js presets