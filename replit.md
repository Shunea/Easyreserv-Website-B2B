# EasyReserv.io - Restaurant ERP & Reservation System

## Overview

EasyReserv.io is a full-stack web application designed as an ERP (Enterprise Resource Planning) solution for restaurant management. The platform enables business owners to manage their operations anytime, anywhere, with features including employee management, mobile reservations, business insights, and inventory management. Built with a modern tech stack, the application provides a responsive user interface with a focus on reservation management and operational efficiency.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18+** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management and data fetching
- **Shadcn/ui** component library built on Radix UI primitives for accessible UI components
- **Tailwind CSS** for utility-first styling with custom design tokens

**Design Decisions:**
- Component-based architecture with shared UI components in `/client/src/components/ui`
- Custom Container component for consistent grid-based layouts (12-column grid system)
- Page sections are modular and reusable (NavigationSection, FeaturesSection, AboutSection)
- Centralized query client configuration with custom error handling and fetch utilities
- Custom hooks for responsive behavior (`use-mobile`) and toast notifications (`use-toast`)
- Design system uses CSS variables for theming (colors, typography, spacing)

**Styling Approach:**
- Tailwind CSS with custom configuration extending base theme
- CSS variables for dynamic theming and brand colors (--apporange, --grayswhite, etc.)
- Typography system with predefined font families (Onest, Work Sans, Inter, Geist Mono)
- Component variants using class-variance-authority (CVA) for consistent styling patterns

### Backend Architecture

**Technology Stack:**
- **Express.js** server with TypeScript
- **Drizzle ORM** for database interactions
- **PostgreSQL** as the primary database (configured via Neon serverless)
- **In-memory storage layer** with interface pattern for CRUD operations

**Design Decisions:**
- Clean separation between storage interface and implementation (IStorage interface)
- MemStorage class provides in-memory implementation, designed to be swapped with database implementation
- API routes prefixed with `/api` for clear separation from frontend routes
- Custom middleware for request/response logging with timing metrics
- Error handling middleware with standardized error responses
- Session management ready with connect-pg-simple integration

**Development Setup:**
- Development mode uses Vite middleware for SSR and HMR
- Production build uses esbuild to bundle server code
- Separate build outputs: frontend to `dist/public`, server to `dist`

### Data Storage

**Database Schema:**
- PostgreSQL database with Drizzle ORM migrations in `/migrations` directory
- User table with UUID primary keys, username (unique), and password fields
- Schema validation using Drizzle-Zod for type-safe data insertion
- Connection via Neon serverless PostgreSQL for scalable database hosting

**Storage Pattern:**
- Interface-based storage layer allows switching between implementations
- Current MemStorage for development/testing
- Designed to migrate to PostgreSQL implementation using Drizzle ORM
- Type-safe CRUD operations with shared schema types

### Authentication & Authorization

**Current Implementation:**
- User schema with username/password fields
- Session storage configured with connect-pg-simple (PostgreSQL session store)
- Authentication endpoints and logic to be implemented

**Planned Approach:**
- Session-based authentication with secure cookie storage
- User registration and login flows
- Protected routes with authentication middleware

## External Dependencies

### Core Services
- **Neon Database** - Serverless PostgreSQL hosting (@neondatabase/serverless)
- Database URL configured via environment variable `DATABASE_URL`

### UI & Styling Libraries
- **Radix UI** - Headless accessible UI primitives (30+ components including dialogs, dropdowns, menus, tooltips)
- **Shadcn/ui** - Pre-built component library based on Radix UI
- **Tailwind CSS** - Utility-first CSS framework with PostCSS
- **class-variance-authority** - Variant management for component styling
- **Lucide React** - Icon library

### State Management & Data Fetching
- **TanStack React Query** - Server state management with caching and optimistic updates
- **React Hook Form** - Form state management with @hookform/resolvers for validation
- **Zod** - Runtime type validation and schema validation

### Development Tools
- **Replit Plugins** - Development tooling for Replit environment:
  - Runtime error modal overlay
  - Cartographer for code mapping
  - Development banner
- **Drizzle Kit** - Database migration and schema management tool

### Date & Utilities
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation
- **cmdk** - Command palette component

### Additional UI Components
- **vaul** - Drawer component library
- **embla-carousel-react** - Carousel/slider functionality
- **react-day-picker** - Date picker component
- **input-otp** - OTP input component
- **recharts** - Chart and data visualization library

### Build & Bundling
- **Vite** - Frontend build tool with React plugin
- **esbuild** - Backend bundling for production
- **TypeScript** - Type checking and compilation
- **tsx** - TypeScript execution for development server