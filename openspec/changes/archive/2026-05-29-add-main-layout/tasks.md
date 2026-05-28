## 1. Layout Component Structure

- [x] 1.1 Create a reusable layout component folder for shared app chrome.
- [x] 1.2 Implement `MainLayout` to compose header, main content, and page background.
- [x] 1.3 Implement `SiteHeader` with Tactiflow branding and a small initial navigation set.
- [x] 1.4 Implement `PageShell` or equivalent container component for consistent page width, spacing, and vertical rhythm.

## 2. Responsive User Experience

- [x] 2.1 Make the header and navigation usable on narrow mobile viewports without horizontal overflow.
- [x] 2.2 Constrain content width on desktop so reading and scanning remain comfortable.
- [x] 2.3 Use Tailwind utility classes for responsive spacing, typography, and layout states.
- [x] 2.4 Keep text labels short enough to fit across supported viewport sizes.

## 3. Home Page Integration

- [x] 3.1 Refactor `app/page.tsx` to render inside the shared main layout.
- [x] 3.2 Replace the starter-only content with a restrained Tactiflow first screen that communicates app readiness and next focus areas.
- [x] 3.3 Avoid adding authentication, data fetching, API routes, or product workflow logic.

## 4. Validation

- [x] 4.1 Run lint checks to verify component structure and imports.
- [x] 4.2 Run a production build to verify the App Router layout compiles.
- [x] 4.3 Review the page at mobile and desktop widths for readable spacing, no overlap, and no horizontal scrolling.
