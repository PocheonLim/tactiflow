## ADDED Requirements

### Requirement: Main layout provides shared application chrome
The system SHALL provide a reusable main layout that wraps page content with consistent application chrome.

#### Scenario: Page uses main layout
- **WHEN** a page renders inside the main layout
- **THEN** the page displays shared header/navigation chrome and a main content region

### Requirement: Layout is responsive
The system SHALL adapt the main layout for mobile, tablet, and desktop viewport widths without horizontal overflow.

#### Scenario: User opens the app on mobile
- **WHEN** the viewport is narrow
- **THEN** navigation and content remain readable without requiring horizontal scrolling

#### Scenario: User opens the app on desktop
- **WHEN** the viewport is wide
- **THEN** content uses a constrained readable width and does not stretch edge-to-edge unnecessarily

### Requirement: Layout components are reusable
The system SHALL separate shared layout components from route-specific page content.

#### Scenario: Future page is added
- **WHEN** a new page needs the same application shell
- **THEN** it can reuse the shared layout components without duplicating header or container markup

### Requirement: Home page demonstrates the app shell
The system SHALL update the home page to use the main layout and present a clear initial Tactiflow experience.

#### Scenario: User visits the home page
- **WHEN** the user opens `/`
- **THEN** the page identifies Tactiflow and presents useful starting content within the shared layout

### Requirement: Layout avoids premature product behavior
The system SHALL avoid adding authentication, persistence, API routes, or business workflow behavior as part of the main layout change.

#### Scenario: Main layout is implemented
- **WHEN** the layout change is complete
- **THEN** the app has reusable UI structure without introducing product data or protected-route behavior
