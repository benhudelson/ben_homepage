# Ben Hudelson - Personal Homepage Strategy & Plan

## 1. Vision & Persona
**"The Active Professional"**
A premium, high-performance personal site blending technical leadership with authentic humanity.
-   **Core Message**: "I run Agile teams with speed, but I build resilient architectures/organizations for the long haul."
-   **Visual Identity**: Deep Navy/Charcoal (Business) + Electric Blue/Neon (Energy). Structured typography (Inter/Oswald).

## 2. Architecture & Tech Stack
-   **Framework**: Vite + React (TypeScript)
    -   *Why*: Required for the interactive 3D bookshelf and timeline animations.
-   **Styling**: Tailwind CSS
    -   *Strategy*: Use utility classes for layout, but extract consistent components (e.g., `Card`, `Section`, `Button`) to maintain the "premium" feel.
-   **Deployment**: GitHub Pages (Static build).

## 3. Key Features & Content Strategy

### A. The "Agile Sprints & Career Marathons" Timeline
*Interactive vertical timeline component.*
-   **Concept**: Visually contrast short-term wins (Sprints) with long-term growth (Marathons).
-   **Content Mapping**:
    -   *2010-2014 (Foundation)*: Allied Solutions (Systems Analysis).
    -   *2014-2017 (The Build - Sprints)*: Fusion Alliance/BoxCrush. high-velocity coding, Scrum Master roles.
    -   *2017-Present (The Scale - Marathon)*: TRIMEDX. Scaling from Data Science to Enterprise Mgmt.
    -   *Education*: MBA (Butler) & Math BS (Purdue).

### B. The Balanced Leader (Hobbies)
*Visual layout, not metrics.*
-   **Focus**: Traits over stats.
    -   **Running**: Discipline & Clarity.
    -   **Yoga**: Flexibility & Balance.
    -   **Family**: Grounding.
-   **Implementation**: A "Masonry" or "Bento Box" grid of photos.

### C. The Flexible Bookshelf
*3D Interactive Grid.*
-   **Featured (Top 3)**: Large cards with 3D tilt effect on hover. Contains quote & "Why it matters".
-   **Library**: Simple grid of covers for breadth.

## 4. Implementation Steps

### Phase 1: Setup
1.  Initialize Vite project: `npm create vite@latest . -- --template react-ts`
2.  Install Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
3.  Configure `tailwind.config.js` with specific colors (Navy/Neon).

### Phase 2: Core Components
1.  **Layout**: Navbar (sticky), Hero Section (large typography), Footer.
2.  **Timeline**: Create a component expecting `{ date, type: 'sprint'|'marathon', title, description }`.
3.  **Bookshelf**: Use CSS `transform: rotateY()` for the 3D effect.

### Phase 3: Content Ingestion
1.  Create `src/data/experience.json` and populate with the Resume data.
2.  Create `src/data/books.json`.

### Phase 4: Polish
1.  Add `framer-motion` for scroll animations.
2.  Ensure Dark Mode is default or perfect.
