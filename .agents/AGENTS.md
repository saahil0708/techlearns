# Performance & Next.js Best Practices

1. **Reduce JavaScript (Most Important)**: Use Server Components by default. Only use Client Components (`"use client"`) when strictly necessary (toggles, forms, search, modals, search, etc).
2. **Split Components**: Keep pages as Server Components, and extract interactivity into small isolated Client Components (e.g. `ThemeToggle`, `Navbar`).
3. **Dynamic Imports**: Use `next/dynamic` for heavy UI (charts, maps, modals) so users don't download code until required. Use `<Suspense>` for heavy components.
4. **Optimize Images & Fonts**: NEVER use `<img src="...">` or Google CDN. Always use `next/image` and `next/font/google`. Define explicit width/height for images to prevent Layout Shift.
5. **Minimize Re-renders**: Use `React.memo`, `useMemo`, and `useCallback` appropriately to prevent massive child re-renders. Reduce wide Context usage in favor of localized state or optimized stores.
6. **Use Skeletons & Streaming**: Implement `loading.tsx` and `<Suspense>` boundaries to stream the UI instantly while fetching data.
7. **Optimize Animations**: ONLY animate GPU-accelerated properties: `transform` (scale, translate) and `opacity`. Avoid animating width/height/top/left/padding.
8. **Framer Motion Best Practices**: Avoid animating 100 individual items. Use `staggerChildren`. Avoid `layout` and `layoutId` unless absolutely required.
9. **Optimize Data & API**: Cache everything (use `revalidate`, `cache()`, or `unstable_cache`). Combine multiple API calls into one. Only `SELECT` required fields from the database.
10. **Use CSS Instead of JS**: Rely on CSS sticky, CSS transitions, and Intersection Observer instead of heavy JS scroll listeners like `window.onscroll`.
11. **Virtualize Long Lists**: Use `react-window` or `@tanstack/react-virtual` for rendering thousands of items. Implement pagination/infinite scroll instead of fetching everything at once.
