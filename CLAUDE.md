# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
- Develop: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`
- Install dependencies: `npm install`

## Architecture & Structure
The project is a modern recipe searching application built with a specialized version of Next.js (v16.x) using the App Router.

### Core Stack
- **Framework**: Next.js App Router (Note: This version may have breaking changes compared to standard Next.js; refer to `AGENTS.md` and local docs).
- **State Management**: TanStack Query for server state and caching.
- **Form Validation**: React Hook Form integrated with Zod for schema-based validation (`src/schemas`).
- **Styling**: Tailwind CSS.

### High-Level Structure
- `src/app/`: Routing, page components, and API route handlers.
- `src/app/api/`: Implements Route Handlers acting as a Backend for Frontend (BFF).
- `src/components/`: UI components, split into general components and a `ui/` directory for base elements.
- `src/services/`: Domain-specific data fetching logic (e.g., `recipe.service.ts`).
- `src/lib/`: Low-level API clients and HTTP error handling (`api.ts`, `client-api.ts`).
- `src/hooks/`: Custom React hooks for shared logic (e.g., `useFavorites`, `useDebounce`).
- `src/providers/`: Context providers, such as `QueryProvider` for TanStack Query.
- `src/types/`: Global TypeScript type definitions.
- `src/schemas/`: Zod validation schemas.
- `src/constants/`: Application-wide constants and configuration.

### Key Patterns
- **Data Fetching**: Components typically use hooks that call services, which in turn use the `lib` API clients.
- **BFF Pattern**: The `/api` routes in the App Router are used to proxy or transform data from external recipe sources before serving it to the client.
- **Type Safety**: Heavy use of TypeScript and Zod to ensure data integrity from the API to the UI.
