# IT Legend Course Page

A modern course learning interface built with **Next.js, React, TypeScript, Tailwind CSS, and Vidstack**.

The project was developed as part of an **IT Legend Challenge**, focusing on building a realistic course platform experience with structured course data, lesson-based routing, video playback, progress tracking, responsive layouts, and reusable UI components.

## Live Demo

IT Legend Course Page: https://it-legend-courses-v2.vercel.app/

## Repository

Nour5Eldin/itLegend-Course-Page

---

## Overview

**IT Legend Course Page** is a frontend course platform interface designed around a structured learning experience.

Users can:

- Browse available courses
- Open a course details page
- Navigate through course parts, modules, and topics
- Watch lesson videos
- Navigate directly to individual lessons through the URL
- Track completed lessons
- View overall course progress
- Browse course materials
- Read course comments
- View the course leaderboard
- Use the platform across desktop, tablet, and mobile layouts

The application uses a **local static data architecture** instead of a backend or external database. Course content is organized into typed data modules, making it easy to add or modify courses without changing the UI architecture.

---

## Features

### Course Listing

- Responsive course grid
- Course cards with:
  - Thumbnail
  - Title
  - Instructor
  - Description
  - Lesson count
  - Progress
  - Course status
- Course-specific navigation

### Course Details

Each course has a dedicated route:

```text
/courses/[slug]
```

Example:

```text
/courses/typescript
```

The course page contains:

- Course title
- Breadcrumb navigation
- Video player
- Course materials
- Curriculum sidebar
- Lesson progress
- Comments
- Leaderboard

### Lesson-Based Routing

Each lesson/topic can be represented directly in the URL using the `lesson` query parameter.

Example:

```text
/courses/typescript?lesson=typescript-topic-1
```

This allows a specific lesson to be opened directly rather than requiring the user to navigate through the curriculum manually.

When a course is opened without a selected lesson, the first available lesson is automatically selected and reflected in the URL.

### Course Curriculum

Courses are structured hierarchically:

```text
Course
├── Parts
│   ├── Modules
│   │   ├── Topics
│   │   ├── Topics
│   │   └── ...
│   └── Modules
└── Parts
```

This structure keeps course content separate from the presentation layer and allows the same UI components to work with different course datasets.

### Video Player

The project uses **Vidstack** for video playback.

The player supports:

- Video playback
- Poster images
- Play controls
- Responsive video layout
- Automatic playback when appropriate
- Lesson completion when the video ends
- Automatic navigation to the next unlocked lesson

### Progress Tracking

Lesson completion is stored locally using `localStorage`.

The application tracks:

- Completed lesson IDs
- Total lessons
- Course progress percentage

Progress is calculated from completed topics rather than being hardcoded into the UI.

### Course Materials

Courses can provide additional learning materials through a dedicated materials section.

### Comments

Each course can contain its own comments dataset and display it through a reusable comments component.

### Leaderboard

Course-specific leaderboard data is displayed through the course actions interface.

### Responsive Design

The interface is designed for:

- Mobile
- Tablet
- Desktop

The course details layout adapts between a single-column mobile experience and a two-column desktop layout with a sticky curriculum sidebar.

---

## Tech Stack

### Core

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

### UI & Styling

- **Base UI**
- **shadcn**
- **Tailwind Merge**
- **Class Variance Authority**
- **Lucide React**

### Animation

- **Framer Motion**

### Video

- **Vidstack**

### PDF

- **React PDF**

### Development

- **ESLint**
- **React Compiler**
- **Turbopack filesystem cache**

---

## Project Architecture

The project follows a feature-oriented structure while keeping data, reusable UI, and application features separated.

```text
itlegend-course-page
├── public
│   ├── images
│   └── pdf
│
├── src
│   ├── app
│   │   ├── courses
│   │   │   └── [slug]
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components
│   │   ├── course
│   │   ├── course-list
│   │   ├── layout
│   │   └── ui
│   │
│   ├── data
│   │   ├── course-data.ts
│   │   ├── courses
│   │   └── index.ts
│   │
│   ├── features
│   │   ├── CourseDetailsPage.tsx
│   │   └── CoursesPageView.tsx
│   │
│   ├── lib
│   │   ├── course.ts
│   │   ├── useCourseProgress.ts
│   │   └── utils.ts
│   │
│   └── types
│       └── course.ts
│
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Data Architecture

Course data is separated from the UI.

The main course registry uses course slugs as keys:

```text
javascript-arabic
typescript
react-arabic
python-arabic
golang
figma-ui-design
```

Each course is composed from separate datasets:

```text
Course
├── Summary
├── Hero
├── Materials
├── Sidebar
├── Comments
└── Leaderboard
```

This approach keeps large course datasets organized while allowing the UI to consume a consistent `CourseData` structure.

For example:

```text
src/data/courses/typescript/
```

contains the data required by the TypeScript course without mixing that content directly into the page components.

---

## Routing Architecture

The course details route is handled through the dynamic Next.js route:

```text
src/app/courses/[slug]/page.tsx
```

The route receives the course slug, retrieves the matching course from the course registry, and renders the course details feature.

Conceptually:

```text
/courses/typescript
        │
        ▼
[slug] route
        │
        ▼
getCourseBySlug()
        │
        ▼
CourseData
        │
        ▼
CourseDetailsPage
```

Lesson selection is handled independently through the URL query parameter:

```text
?lesson=<topic-id>
```

This keeps the course identity and lesson state separate:

```text
/courses/[slug]?lesson=[topic-id]
```

---

## Local Progress Storage

The application does not require an authentication system or backend to track lesson progress.

Progress is stored locally in the browser.

The progress flow is:

```text
Video ends
   ↓
Lesson marked as completed
   ↓
Completed topic ID stored
   ↓
Course progress recalculated
   ↓
UI updated
```

This allows the course list and course details page to reflect the user's progress during subsequent visits on the same browser.

---

## Component Structure

The UI is divided into reusable components rather than placing the entire course interface inside a single page component.

Examples include:

```text
CourseCard
CourseList
CourseTopicsSidebar
VideoHero
CourseMaterials
CommentsSection
QuickActionsBar
BreadcrumbNav
CourseProgress
CourseStatusBadge
```

The `features` layer composes these components into complete page experiences.

---

## Performance Considerations

The project includes several performance-oriented decisions:

- Next.js App Router
- Responsive image sizing
- Image preloading for important course imagery
- Local static course data
- Component-level organization
- Client-side progress state only where required
- Responsive layouts using Tailwind CSS
- Video poster optimization for the initial course lesson

The course details page also prioritizes the initial lesson poster because it is part of the primary visual content of the page.

---

## Accessibility Considerations

The interface includes accessibility-focused details such as:

- Semantic HTML structure
- Descriptive image `alt` text
- Keyboard-focus states
- Screen-reader-only labels where appropriate
- Reduced-motion handling for programmatic scrolling
- Native interactive controls where possible

---

## Getting Started

### Requirements

Make sure you have:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd itLegend-course-page
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates a production build.

### Production Server

```bash
npm run start
```

Starts the production server after building the application.

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

---

## Example Routes

Course listing:

```text
/
```

Course details:

```text
/courses/typescript
```

Specific lesson:

```text
/courses/typescript?lesson=typescript-topic-1
```

---

## Deployment

The application is deployed using **Vercel**.

The production deployment can be used to explore the complete course experience without running the project locally.

---

## Challenge

This project was developed as part of an **IT Legend Challenge**.

The implementation focuses on translating a course-learning experience into a functional frontend application rather than creating a static visual mockup.

The project emphasizes:

- Component reusability
- Structured data
- Dynamic routing
- Real interaction
- Lesson navigation
- Persistent local progress
- Responsive UI
- Maintainable project organization

---

## Author

**Nour Eldin Mahmoud**

Frontend Developer focused on building scalable and production-oriented web applications with modern JavaScript and TypeScript technologies.
