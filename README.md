This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies and run the development server:

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

> **Note**: This project uses pnpm for package management. You can also use npm, yarn, or bun if preferred.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package Management
pnpm add <pkg>    # Add a dependency
pnpm add -D <pkg> # Add a dev dependency
pnpm remove <pkg> # Remove a dependency
```

## Tech Stack

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Core Technologies
- **Next.js 15** - React framework with App Router and Server Components
- **React 19** - Latest version with Server Components support
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Turbopack** - Rust-based build tool for faster development

### Key Features
- **Dark Mode** - System-aware theme switching
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 compliant components
- **SEO Optimization** - Metadata API and structured data
- **Performance** - Image optimization and code splitting
- **Error Handling** - Error boundaries and global error handling
- **Loading States** - Suspense and skeleton UI
- **Optimistic Updates** - Immediate UI feedback

### State Management & Data Fetching
- **TanStack Query v5** - Server state management
- **Zustand** - Client-side state management
- **React Hook Form** - Form management
- **Zod** - Schema validation

### UI Components
- **shadcn/ui** - Modern UI component library
- **Radix UI** - Accessible primitive components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Learning Resources

This project includes comprehensive learning pages for modern web development features:

- **Dark Mode** - `/learn/dark-mode` - Theme switching implementation
- **Responsive Design** - `/learn/responsive` - Mobile-first design patterns
- **Accessibility** - `/learn/accessibility` - WCAG 2.1 compliance
- **SEO Optimization** - `/learn/seo` - Search engine optimization
- **Performance** - `/learn/performance` - Core Web Vitals optimization
- **Error Handling** - `/learn/error-handling` - Error boundaries and handling
- **Loading States** - `/learn/loading-states` - Suspense and skeleton UI
- **Optimistic Updates** - `/learn/optimistic-updates` - Immediate UI feedback

## Development Tools

- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Vitest** - Unit testing
- **Playwright** - E2E testing

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React 19 Documentation](https://react.dev) - latest React features
- [Tailwind CSS v4](https://tailwindcss.com) - utility-first CSS framework
- [TanStack Query](https://tanstack.com/query) - data fetching and state management
- [shadcn/ui](https://ui.shadcn.com) - modern UI components

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Package Manager

This project uses **pnpm** for package management, which provides:

- ⚡ **Faster installs** - Up to 2x faster than npm
- 💾 **Disk efficiency** - Shared global store reduces disk usage
- 🔒 **Strict dependency resolution** - Prevents phantom dependencies
- 🔄 **Workspace support** - Monorepo-friendly

You can check out [the pnpm documentation](https://pnpm.io) for more details.
