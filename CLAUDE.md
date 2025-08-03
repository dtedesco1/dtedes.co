# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start production server (requires build first)

No lint, test, or typecheck commands are configured.

## Architecture Overview

This is a Next.js 15 MDX-based static site with dynamic routing. The core concept is that MDX files in `app/content/` automatically become web pages.

### Key Components

- **Dynamic Routing**: `app/[...slug]/page.tsx` handles all routes by dynamically importing corresponding MDX files from `app/content/`
- **Content Management**: All content lives in `app/content/` as `.mdx` files. The file path becomes the URL path (e.g., `app/content/about.mdx` → `/about`)
- **Web Projects Gallery**: `app/api/web-projects/route.ts` serves a JSON API that lists HTML files from `public/web-projects/` for display in galleries

### Technology Stack

- **Framework**: Next.js 15 with App Router
- **Content**: MDX with `@next/mdx` and Rust-based compiler
- **Styling**: Tailwind CSS + DaisyUI with light/dark themes
- **Typography**: `@tailwindcss/typography` for prose styling
- **Animations**: Framer Motion

### File Structure Patterns

```bash
app/
├── content/           # All MDX content files (maps to URLs)
├── [...slug]/         # Dynamic route handler
├── api/web-projects/  # API for web projects gallery
└── layout.tsx         # Global layout with prose styling

components/            # Reusable React components
public/web-projects/   # Static HTML projects served via API
```

### Path Aliases

- `@/*` → Root directory
- `@content/*` → `content/*`
- `@components/*` → `app/components/*`

### Content Creation Pattern

1. Create `.mdx` files in `app/content/`
2. Import components at the top of MDX files as needed
3. File path automatically becomes the route (nested folders supported)
4. All content is wrapped in responsive prose styling via layout

### Web Projects Integration

HTML files in `public/web-projects/` are automatically discoverable via the `/api/web-projects` endpoint and can be embedded or linked in content.