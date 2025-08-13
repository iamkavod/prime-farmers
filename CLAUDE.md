# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Production server**: `npm start`

## Architecture Overview

This is a Next.js 15 application for Prime Farmers Association, a farming organization in Ewu, Edo State, Nigeria. The project uses the App Router architecture with the following key components:

### Project Structure
- **Pages**: Located in `src/app/` using App Router pattern
  - Home (`/`), About (`/about`), Gallery (`/gallery`), Contact (`/contact`), Membership (`/membership`)
- **Components**: Organized in `src/components/`
  - `page-uis/`: Page-specific UI components
  - `ui/`: Reusable UI components (shadcn/ui based)
  - `widgets/`: Custom widget components
- **API Routes**: `src/app/api/` contains server-side endpoints

### Key Features
- **Google Drive Integration**: Gallery page fetches images/videos from Google Drive API
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Comprehensive metadata and keywords for agricultural content

### Technology Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS v4 with custom green theme
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **HTTP Client**: Axios
- **Fonts**: Google Fonts (Roboto, Covered By Your Grace)

### Environment Variables Required
- `NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY`: Google Drive API key for gallery functionality
- `NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID`: Google Drive folder ID containing media files

### Key Components
- **Header**: Navigation with contact info, mobile-responsive menu
- **Footer**: Site footer with organization details
- **Gallery**: Masonry layout with pagination, supports images and videos from Google Drive
- **BgCarousel**: Background image carousel using Embla Carousel
- **FullScreenImage**: Modal component for viewing media in full screen

### Deployment
- Configured for Cloudflare Pages (wrangler.toml present)
- Also deployable to Vercel (standard Next.js deployment)

### Color Scheme
Primary brand colors are green variants:
- `green-600`, `green-700`: Primary actions and buttons
- `green-900`: Navigation background
- `green-500`: Active states and highlights

### API Endpoints
- `/api/resolve-video`: Edge runtime endpoint for proxying video content from Google Drive