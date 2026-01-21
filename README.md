# Portfolio: Technical Stack Report

This project is a high-performance, single-page application (SPA) portfolio that bridges the gap between scientific engineering (HPC) and human-centric Agentic AI. It features a sophisticated "Bio-Digital" aesthetic built on a performance-first architecture.

## 1. Core Architecture & Frontend
*   **Framework**: [React 19](https://react.dev/)
    *   Leverages the latest concurrent rendering features for smooth UI transitions.
*   **Build Tool**: [Vite 6](https://vitejs.dev/)
    *   Optimized production builds with ultra-fast Hot Module Replacement (HMR).
*   **Language**: [TypeScript 5.8](https://www.typescriptlang.org/)
    *   End-to-end type safety for data constants, component props, and API interfaces.

## 2. Visual & Aesthetic System
*   **"Washed Watercolor" Background**:
    *   **Engine**: CSS Radial and Linear gradients layered for a diffused, organic look.
    *   **Anti-Banding**: A localized SVG `fractalNoise` filter (30% opacity, Soft Light blend) prevents color banding across diverse display types.
    *   **Decorative Arc**: A single, high-precision SVG Bézier curve that serves as a minimal visual anchor.
*   **"Bio-Digital" DNA Loader**:
    *   Transparent, full-screen loading sequence with a sharp, clinical aesthetic (no glows).
    *   CSS-driven `helixMove` animations for zero-jank page entry.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
    *   Integrated via runtime CDN for flexible, instant styling updates.
    *   Custom themes for **Slate**, **Emerald**, and **Amber** palettes.

## 3. Optimization & Performance
*   **Filter Minimization**: Removed expensive rendering bottlenecks like screen-wide `feTurbulence` (Film Grain) and multi-layered `box-shadow` glows.
*   **Particle Connections**: The **ParticleBackground** (Neural Synapses) is hard-capped at 150 particles with $O(N^2)$ math optimizations and hardware acceleration hints (`will-change: transform`).
*   **Lazy Loading**: Implicit scrolling reveals and optimized asset paths ensure a fast initial payload.

## 4. Artificial Intelligence & Backend
*   **AI Engine**: [Google GenAI SDK](https://www.npmjs.com/package/@google/genai)
*   **Model**: `gemini-3-flash-preview`
    *   Powering an context-aware "Inna AI" assistant with specialized personas for HPC and Public Health domains.
*   **Backend**: [Express.js 5](https://expressjs.com/)
    *   A secure proxy layer for the Gemini API ensures `GEMINI_API_KEY` protection.
    *   Serves compiled assets and handles client-side routing logic.

## 5. Deployment
*   **Platform**: [Google Cloud Run](https://cloud.google.com/run)
*   **Infrastructure**: Containerized via **Docker**; deployed as a stateless, auto-scaling service.
*   **Contact Handling**: Integrated with **Formspree** for reliable, serverless communication.
