# Environment Variables Guide

## Overview

All configuration values should be stored in a `.env` file in the root directory. This keeps hardcoded values out of the code and makes customization easy.

## Quick Setup

1. Copy `.env.example` to `.env`
2. Fill in your values
3. Restart the development server

## Variable Categories

### Event Information

```env
# Event Name
REACT_APP_EVENT_NAME=DevFest London

# Event Date (formatted for display)
REACT_APP_EVENT_DATE=November 22nd, 2025

# Event Year
REACT_APP_EVENT_YEAR=2025

# Event City
REACT_APP_EVENT_CITY=London

# Event Tagline
REACT_APP_EVENT_TAGLINE=Connecting developers, building the future

# Event Description
REACT_APP_EVENT_DESCRIPTION=We're excited to announce that DevFest London will take place at LSE Centre Building (CBG). Join us for a community-run one-day conference...
```

### Chapter Configuration

```env
# Chapter Name
REACT_APP_CHAPTER_NAME=London

# Contact Email
REACT_APP_DEVFEST_EMAIL=devfest@example.com
```

### Registration

```env
# Eventbrite Registration URL
REACT_APP_REGISTRATION_URL=https://www.eventbrite.com/e/your-event

# Expected Attendee Count
REACT_APP_ATTENDEE_COUNT=250+
```

### Venue Configuration

```env
# Venue Name
REACT_APP_VENUE_NAME=LSE Centre Building (CBG)

# Venue Address (comma-separated for line breaks)
REACT_APP_VENUE_ADDRESS=LSE Centre Building (CBG),Houghton St,London,WC2A 2AE

# Venue Level (optional)
REACT_APP_VENUE_LEVEL=Level -2

# Transportation Info
REACT_APP_VENUE_TRANSPORT=The nearest underground stations are Temple or Covent Garden

# GPS Coordinates
REACT_APP_VENUE_COORDINATES=51.514204, -0.116150

# Venue Images (up to 3)
REACT_APP_VENUE_IMAGE_1=https://example.com/venue1.jpg
REACT_APP_VENUE_IMAGE_2=https://example.com/venue2.jpg
REACT_APP_VENUE_IMAGE_3=https://example.com/venue3.jpg

# Google Maps Embed URL
REACT_APP_VENUE_MAP_URL=https://maps.google.com/maps?q=...
```

### Social Media Links

```env
# Website
REACT_APP_SOCIAL_WEBSITE=https://your-website.com

# Twitter Handle (without @)
REACT_APP_SOCIAL_TWITTER=devfestlondon

# LinkedIn URL
REACT_APP_SOCIAL_LINKEDIN=https://linkedin.com/company/devfest

# Meetup URL
REACT_APP_SOCIAL_MEETUP=https://meetup.com/devfest-london

# Instagram (optional)
REACT_APP_SOCIAL_INSTAGRAM=

# YouTube (optional)
REACT_APP_SOCIAL_YOUTUBE=
```

### Sessionize API

```env
# Speakers API
REACT_APP_SESSIONIZE_SPEAKERS_API=https://sessionize.com/api/v2/YOUR_SESSIONIZE_ID/view/Speakers

# Sessions API
REACT_APP_SESSIONIZE_SESSIONS_API=https://sessionize.com/api/v2/YOUR_SESSIONIZE_ID/view/Sessions

# Schedule Grid
REACT_APP_SESSIONIZE_SCHEDULE_API=https://sessionize.com/api/v2/YOUR_SESSIONIZE_ID/view/GridSmart
```

### Customization

```env
# Hero Image (path relative to src/assets/)
REACT_APP_HERO_IMAGE=Devfest_2025.png

# Logo Path (relative to src/assets/)
REACT_APP_LOGO_PATH=new_logo.svg
```

## How to Use

### In Components

Access environment variables using `process.env`:

```javascript
const eventName = process.env.REACT_APP_EVENT_NAME;
const city = process.env.REACT_APP_EVENT_CITY;
```

### Example

```javascript
const Banner = () => (
  <section>
    <h1>{process.env.REACT_APP_EVENT_NAME}</h1>
    <p>{process.env.REACT_APP_EVENT_TAGLINE}</p>
    <p>{process.env.REACT_APP_EVENT_DATE}</p>
  </section>
);
```

## Important Notes

⚠️ **Variables must start with `REACT_APP_`**

- Variables without this prefix will not be included in the build
- Must restart dev server after changing `.env`
- Never commit `.env` file to version control
- Use `.env.example` as a template

## Getting Values

### Eventbrite URL

1. Create event on Eventbrite
2. Copy registration page URL
3. Add `?aff=oddtdtcreator` for tracking

### Sessionize IDs

1. Go to Sessionize dashboard
2. Navigate to API section
3. Copy API endpoint URLs
4. Replace with your event ID

### Google Maps Embed URL

1. Go to Google Maps
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

## Security

**Never commit these files:**
- `.env` - Your actual values
- `.env.local` - Local overrides

**Safe to commit:**
- `.env.example` - Template file
- `README.md` - Documentation

## Troubleshooting

**Variables not loading?**
1. Check file is named exactly `.env` (not `.env.txt`)
2. Restart development server
3. Verify variables start with `REACT_APP_`
4. Clear browser cache

**Values showing as undefined?**
- Ensure variable name is correct
- Check for typos in variable names
- Verify `.env` file is in root directory

