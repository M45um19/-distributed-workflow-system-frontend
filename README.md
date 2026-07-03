# Enterprise Task & Workflow Management — Frontend

An enterprise-grade, high-performance, and multi-tenant frontend application designed for collaborative task and workflow management. Built using **Next.js (App Router)**, **TypeScript**, and **TanStack Query**, this application is engineered to achieve single-digit Largest Contentful Paint (LCP) times and absorb massive traffic spikes using a hybrid rendering paradigm and a decoupled state architecture.

It seamlessly interfaces with the microservices backend running Go, Node.js, Kafka, gRPC, and Temporal.

---

## ⚡ Core Architectural Pillars & Philosophy

This project strictly adheres to a robust architectural blueprint to maintain extreme performance and clean separation of concerns:

1. **Decoupled State Architecture:** I don't use large monolithic global state stores (like Redux or heavy contexts). Server states are isolated entirely inside **TanStack Query**, while UI states are modularized at the component level.
2. **High-Scale ISR/ISG Hydration:** To prevent database overload during traffic spikes, all public-facing or SEO-critical pages completely **AVOID Pure SSR (`cache: 'no-store'`)**. Instead, they utilize Incremental Static Regeneration via native `fetch` cache optimization (`revalidate: 60`).
3. **Unified Service & Hook Pattern:** 
   * **`services/` layer** houses pure, server-safe vanilla TS functions dedicated strictly to raw HTTP requests (Native `fetch` or custom Axios `apiClient`).
   * **`hooks/` layer** serves as the client-side lifecycle wrapper, abstracting TanStack queries, mutations, caching states, and post-fetch client-side routing.
4. **Resilient Network Guard:** Powered by a customized Axios instance (`src/lib/api-client.ts`), featuring centralized request token injection and response interceptors capable of processing background sliding-session **silent 401 token refreshes** via queued arrays.

---

## Project Directory Layout

The application enforces a highly isolated **Feature-Driven Domain Strategy** (`src/features/[feature-name]`), ensuring business scopes do not bleed into global routing configurations:

```text
src/
├── app/                # ROUTING LAYER (Only routes, pages, layouts, and metadata definitions)
├── components/         # GLOBAL PURE UI (Shared presentation primitives: ui/ atoms, layout/)
├── config/             # ENVIRONMENT HUB (Zod runtime-verified environment configurations)
├── features/           # THE CORE DOMAIN (Business boundaries isolated cleanly by feature)
│   └── [feature-name]/
│       ├── components/ # Local presentation UI (Dumb/Pure components receiving data via props/hooks)
│       ├── services/   # Unified API contracts (Both native fetch for ISR and apiClient for CSR)
│       ├── hooks/      # Local Server State engine (TanStack Query/Mutation implementations)
│       └── types/      # Domain specific TS Interfaces and Zod form schemas
├── hooks/              # GLOBAL UI HOOKS (Pure client-side UI actions only: debouncing, resizing)
├── lib/                # THIRD-PARTY CLIENT KERNELS (Axios interceptor engine, Sockets setups)
└── middleware.ts       # EDGE SECURITY GUARD (Dynamic multi-tenant routing, workspace context, auth fences)