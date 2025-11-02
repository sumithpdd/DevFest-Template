# Component Documentation

## Overview

This document describes all components used in the DevFest template and how to customize them.

## Core Components

### Banner Component

**File**: `src/components/banner.js`

**Purpose**: Top banner with event information

**Props**: None (uses environment variables)

**Customization**:
- Update event name in `.env`
- Change tagline text
- Modify attendee count

**Features**:
- Gradient background (blue → green → teal)
- Event name and tagline
- Location, date, and attendee count badges

---

### Hero Component

**File**: `src/components/hero.js`

**Purpose**: Main landing section

**Structure**:
- DevFest title with curly braces styling
- City and year badges
- Event date
- Description text
- Registration button

**Customization**:
- Update in `.env`: `REACT_APP_EVENT_DATE`, `REACT_APP_EVENT_CITY`, `REACT_APP_EVENT_DESCRIPTION`
- Modify background colors in `tailwind.config.js`
- Change layout in component file

---

### Ticket Button Component

**File**: `src/components/ticket-button.js`

**Purpose**: Registration button

**Props**:
- `href` - Registration URL
- `text` - Button text (default: "Register")
- `compact` - Boolean for header size
- `headerText` - Event name for full ticket view

**Usage**:
```javascript
<TicketButton 
  href={process.env.REACT_APP_REGISTRATION_URL}
  text="Register Now"
  compact={false}
/>
```

**Variants**:
- **Compact**: Simple gradient button for header
- **Full**: Ticket-style design for hero section

---

### Speakers Component

**File**: `src/components/speakers.js`

**Purpose**: Display speaker grid

**Data Source**: Sessionize API

**Configuration** in `.env`:
```
REACT_APP_SESSIONIZE_SPEAKERS_API=https://sessionize.com/api/v2/YOUR_ID/view/Speakers
```

**Features**:
- Fetches speakers from Sessionize
- Responsive grid layout
- Speaker modal for bio details
- Social media links

---

### Location Component

**File**: `src/components/location.js`

**Purpose**: Venue information and map

**Configuration** in `.env`:
- `REACT_APP_VENUE_NAME`
- `REACT_APP_VENUE_ADDRESS`
- `REACT_APP_VENUE_LEVEL`
- `REACT_APP_VENUE_TRANSPORT`
- `REACT_APP_VENUE_COORDINATES`
- `REACT_APP_VENUE_IMAGE_1`, `REACT_APP_VENUE_IMAGE_2`, `REACT_APP_VENUE_IMAGE_3`
- `REACT_APP_VENUE_MAP_URL`

**Features**:
- Dynamic venue images
- Google Maps iframe
- Transportation information
- GPS coordinates

---

### Header Component

**File**: `src/components/header.js`

**Purpose**: Site navigation

**Includes**:
- Logo
- Navigation menu
- Registration button
- Mobile hamburger menu

**Customization**:
- Logo in `src/assets/devfest_london_logo.jpeg`
- Navigation links in `src/components/navbar.js`
- Mobile menu in `src/components/sidebar.js`

---

### Footer Component

**File**: `src/components/footer.js`

**Purpose**: Site footer with links and info

**Configuration** in `.env`:
- `REACT_APP_CHAPTER_NAME`
- `REACT_APP_DEVFEST_EMAIL`
- `REACT_APP_SOCIAL_*` variables

**Sections**:
1. About GDG chapter
2. Resources links
3. Contact information
4. DevFest links

---

## Page Components

### Home Page

**File**: `src/pages/home.js`

**Structure**:
```javascript
<Home>
  <Hero />
  <Speakers />
  <Location />
</Home>
```

### Speakers Page

**File**: `src/pages/speakers.js`

**Features**:
- All speaker profiles
- Modal popups for bios
- Search functionality (if added)

### Sessions Page

**File**: `src/components/sessions.js`

**Features**:
- Session list from Sessionize
- Category tags (Talk/Workshop)
- Speaker names
- Descriptions

### Schedule Page

**File**: `src/pages/schedule.js`

**Features**:
- Sessionize schedule iframe
- Responsive design
- Clickable session details

### Location Page

**File**: `src/pages/location.js`

**Features**:
- Location component
- Map integration
- Venue images

---

## Component Best Practices

### 1. Use Environment Variables

```javascript
// ❌ Don't hardcode
<h1>DevFest London 2025</h1>

// ✅ Use environment variables
<h1>{process.env.REACT_APP_EVENT_NAME}</h1>
```

### 2. Provide Fallbacks

```javascript
const city = process.env.REACT_APP_EVENT_CITY || 'London';
```

### 3. Responsive Design

Use Tailwind responsive prefixes:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large (1280px+)

### 4. Accessibility

```javascript
// Add alt text to images
<img src={logo} alt="DevFest London Logo" />

// Use semantic HTML
<header>...</header>
<main>...</main>
<footer>...</footer>
```

---

## Creating New Components

### Basic Component Template

```javascript
import React from 'react';

const MyComponent = ({ title, description }) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default MyComponent;
```

### Using Environment Variables

```javascript
const MyComponent = () => {
  const eventName = process.env.REACT_APP_EVENT_NAME;
  
  return <h1>{eventName}</h1>;
};
```

---

## Common Patterns

### Gradient Background

```javascript
<div className="bg-gradient-to-r from-DFBlue to-DFGreen">
  {/* Content */}
</div>
```

### Card Style

```javascript
<div className="bg-white rounded-lg shadow-lg p-6">
  {/* Card content */}
</div>
```

### Responsive Grid

```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

