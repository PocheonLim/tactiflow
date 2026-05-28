## Context

Tactiflow currently has a minimal App Router setup with a root layout, global Tailwind entrypoint, and a starter home page. The next step is to introduce a reusable main layout that can support future app pages without adding product-specific workflows too early.

## Goals / Non-Goals

**Goals:**

- Provide a responsive main layout that works well on mobile, tablet, and desktop widths.
- Separate reusable layout concerns from page-specific content.
- Create a clear component boundary for shared chrome such as header, navigation, and page container.
- Improve the home page so it demonstrates the layout direction and first-run user experience.
- Keep the structure easy to extend as routes are added.

**Non-Goals:**

- Add authentication, user menus, permissions, or protected routes.
- Add dashboard data, persistence, API routes, or business workflows.
- Add external UI libraries or icon packages.
- Build a complete design system.

## Decisions

- Use small React components for layout primitives, such as `MainLayout`, `SiteHeader`, and `PageShell`, because this keeps shared chrome reusable while leaving feature pages independent.
- Place reusable layout components outside `app/` in a component folder, because App Router files should stay focused on routing and route composition.
- Keep navigation data colocated with the header component until multiple navigation surfaces need to share it, because premature configuration layers would add indirection without value.
- Use mobile-first Tailwind classes with constrained content widths, because the app should feel intentional on small screens before expanding to desktop.
- Render desktop navigation inline and keep mobile navigation compact, because the initial route set is small and does not need a complex drawer yet.
- Keep global CSS unchanged except for true browser-wide defaults, because Tailwind classes should own layout and component styling.

## Risks / Trade-offs

- [Risk] A layout component can become too generic too early. -> Mitigation: support only the current shell needs and evolve props when real pages require them.
- [Risk] Navigation can become stale as routes grow. -> Mitigation: keep nav items in one obvious place and refactor only when a second consumer appears.
- [Risk] Mobile navigation can feel cramped. -> Mitigation: use compact spacing, wrapping-safe labels, and avoid horizontal overflow.
- [Risk] Page content can look like a marketing landing page instead of an app shell. -> Mitigation: keep the home page practical, restrained, and app-oriented.
