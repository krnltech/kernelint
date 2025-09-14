# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `npm run dev` - Starts Next.js development server with Turbopack
- **Build**: `npm run build` - Builds the production application with Turbopack
- **Start**: `npm start` - Starts the production server
- **Lint**: `npm run lint` - Runs ESLint (configured to ignore during builds)

## Project Architecture

This is a Next.js 15 application for Kernel International Limited (KIL), a consultancy company website.

### Core Structure

- **App Router**: Uses Next.js App Router with TypeScript
- **Features**: Feature-based architecture under `/features` directory
- **Components**: Organized by feature with barrel exports from `index.ts` files
- **Fonts**: Uses Google Fonts (Inter, Poppins, JetBrains Mono) configured in layout
- **Styling**: Tailwind CSS with custom CSS variables and design system

### Key Dependencies

- **UI**: Lucide React icons, class-variance-authority for component variants
- **Styling**: Tailwind CSS v4, tailwind-merge, clsx for conditional classes
- **Framework**: Next.js 15 with React 19

### Architecture Patterns

**Feature-Based Organization**: Each feature (e.g., `landing`) contains:
- Components in `/components` directory
- Data in `/data` directory
- Types in `/types` directory
- Main feature export from `index.ts`

**Component Pattern**: Components use:
- TypeScript interfaces for props
- Lucide React for icons
- Color-coded variants (rose, blue, green, purple)
- Animation delays for staggered effects

**Data Structure**: Static data is centralized in `landing-data.ts` with typed interfaces covering:
- Hero statistics and services
- Company information (mission, vision, established dates)
- Contact details and team members
- Service categories and expertise areas

### Build Configuration

- TypeScript and ESLint errors ignored during builds (configured in next.config.ts)
- Path aliases: `@/*` maps to project root
- Turbopack enabled for faster development and builds

### Content Management

Company content is managed through structured data objects in `/features/landing/data/landing-data.ts`. This includes hero stats, services, team information, and contact details that populate the landing page sections.