# Page Templates Guide

## Overview

This template consists of multiple pages and components. Each page serves a specific purpose for the DevFest event website.

## Page Structure

### Main Pages

1. **Home** (`/`) - Landing page with hero, speakers, location
2. **Speakers** (`/speakers`) - List of event speakers
3. **Sessions** (`/sessions`) - Conference sessions and talks
4. **Schedule** (`/schedule`) - Full event schedule
5. **Location** (`/location`) - Venue details and map
6. **Sponsors** (`/sponsors`) - Event sponsors
7. **Code of Conduct** (`/code-of-conduct`) - Event policies

## Customizing Templates

### Home Page Template

**File**: `src/pages/home.js`

The home page consists of:
- Hero section with event banner
- Event information
- Speaker profiles (last 3-4 speakers)
- Location section

**Customize**:
- Update description text
- Change speaker count
- Modify layout

### Speakers Page

**File**: `src/pages/speakers.js`

Displays all speakers fetched from Sessionize API.

**Configuration**:
- API endpoint in `.env`: `REACT_APP_SESSIONIZE_SPEAKERS_API`
- Styling in `src/components/speakers.js`

### Sessions Page

**File**: `src/components/sessions.js`

Shows conference sessions and talks.

**Configuration**:
- API endpoint in `.env`: `REACT_APP_SESSIONIZE_SESSIONS_API`
- Categories for filtering

### Schedule Page

**File**: `src/pages/schedule.js`

Displays event schedule in iframe from Sessionize.

**Configuration**:
- API endpoint in `.env`: `REACT_APP_SESSIONIZE_SCHEDULE_API`

### Location Page

**File**: `src/pages/location.js`

Shows venue details and map.

**Configuration** in `.env`:
- `REACT_APP_VENUE_NAME`
- `REACT_APP_VENUE_ADDRESS`
- `REACT_APP_VENUE_MAP_URL`
- `REACT_APP_VENUE_IMAGE_1`, `REACT_APP_VENUE_IMAGE_2`, `REACT_APP_VENUE_IMAGE_3`

## Component Organization

### Components Directory

```
src/components/
├── banner.js          # Top event banner
├── hero.js            # Hero section with event info
├── speakers.js        # Speaker grid
├── location.js        # Venue information
├── sponsors.js        # Sponsor logos
├── header.js          # Navigation header
├── footer.js          # Site footer
├── ticket-button.js  # Registration button
└── ...
```

### Creating New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.js`
3. Link in navigation if needed
4. Update environment variables

Example new page:

```javascript
// src/pages/my-page.js
import React from 'react';

const MyPage = () => (
  <section className="my-20">
    <h2 className="text-center text-4xl font-bold mb-8">
      {process.env.REACT_APP_EVENT_NAME}
    </h2>
    <p>{process.env.REACT_APP_EVENT_DESCRIPTION}</p>
  </section>
);

export default MyPage;
```

## Styling Pages

### Using Tailwind CSS

All pages use Tailwind CSS for styling. Use utility classes:

```jsx
<div className="bg-gradient-to-r from-DFBlue to-DFGreen text-white">
  {/* Your content */}
</div>
```

### Custom Colors

Defined in `tailwind.config.js`:
- `DFBlue`, `DFGreen`, `DFTeal`
- `DFPink`, `DFYellow`
- `DFBackground`

## Best Practices

1. **Use Environment Variables**: No hardcoded values
2. **Responsive Design**: Use Tailwind responsive prefixes
3. **Accessibility**: Add alt text to images
4. **Performance**: Lazy load images
5. **SEO**: Update meta tags in `public/index.html`

## Common Customizations

### Change Event Date

Update in `.env`:
```
REACT_APP_EVENT_DATE=Your Date Here
```

### Change Event Location

Update in `.env`:
```
REACT_APP_EVENT_CITY=Your City
REACT_APP_VENUE_NAME=Your Venue
```

### Modify Hero Text

Edit `src/components/hero.js` or use environment variables.

### Add Custom Section

1. Create component in `src/components/`
2. Import and use in `src/pages/home.js`
3. Style with Tailwind

