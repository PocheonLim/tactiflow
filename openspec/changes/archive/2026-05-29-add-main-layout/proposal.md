## Why

Tactiflow needs a reusable main layout before adding product pages, so navigation, content spacing, and responsive behavior stay consistent across the app. Establishing this now creates a practical UI foundation without locking the project into a heavy design system.

## What Changes

- Add a responsive main application layout for public-facing app pages.
- Define reusable layout components for header/navigation, page container, and main content regions.
- Establish responsive behavior for mobile and desktop viewports.
- Improve the initial home page experience so it sits inside the shared layout instead of a standalone starter screen.
- Keep the layout extensible for future routes without adding authentication, data fetching, or business workflows.

## Capabilities

### New Capabilities

- `main-layout`: Covers the shared responsive layout shell, navigation structure, reusable layout components, and baseline page experience.

### Modified Capabilities

- None.

## Impact

- Affects App Router pages and layout-related components under `app/`.
- May add shared component folders for layout primitives.
- Affects the home page presentation.
- No external API, database, package, or authentication changes are expected.
