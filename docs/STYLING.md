# Styling Guide

## Overview

This project uses **Tailwind CSS** for styling with a custom DevFest color palette.

## Color Palette

### Primary Colors

Defined in `tailwind.config.js`:

```javascript
colors: {
  // Google Brand Colors
  'Blue500': '#4285f4',
  'Red500': '#ea4335',
  'Yellow500': '#fbbc04',
  'Green500': '#34a853',
  
  // DevFest 2025 Theme
  'DFBlue': '#3b82f6',        // Primary blue
  'DFGreen': '#22c55e',       // Primary green
  'DFTeal': '#2dd4bf',        // Teal accent
  'DFPink': '#f472b6',        // Pink accent
  'DFYellow': '#fbbf24',      // Yellow accent
  'DFBackground': '#f8fafc',  // Light background
}
```

### Usage

```jsx
// Blue background
<div className="bg-DFBlue">...</div>

// Green text
<p className="text-DFGreen">...</p>

// Gradient from blue to green
<div className="bg-gradient-to-r from-DFBlue to-DFGreen">...</div>
```

## Typography

### Fonts

1. **Google Sans** - Primary font (included in `/src/assets/fonts/`)
2. **Roboto Mono** - Monospace font for code/technical content

### Font Weights

```jsx
// Bold
<h1 className="font-bold">Heading</h1>

// Semibold
<h2 className="font-semibold">Subheading</h2>

// Normal
<p className="font-normal">Body text</p>
```

## Layout Patterns

### Container

```jsx
<div className="w-11/12 mx-auto">
  {/* Content */}
</div>
```

### Grid Layout

```jsx
// Two column responsive grid
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Items */}
</div>

// Three column grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>
```

### Flexbox

```jsx
// Horizontal centering
<div className="flex justify-center items-center">
  {/* Content */}
</div>

// Space between
<div className="flex justify-between items-center">
  {/* Content */}
</div>
```

## Spacing

### Padding

```jsx
// Small
<div className="p-4">...</div>

// Medium
<div className="p-6">...</div>

// Large
<div className="p-8">...</div>

// Custom (x, y)
<div className="px-6 py-4">...</div>
```

### Margins

```jsx
<div className="mt-8 mb-4 mx-auto">...</div>
```

## Responsive Design

### Breakpoints

- `sm:` - 640px (small tablets)
- `md:` - 768px (tablets)
- `lg:` - 1024px (desktops)
- `xl:` - 1280px (large desktops)

### Example

```jsx
<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## Common Patterns

### Card Component

```jsx
<div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
  {/* Card content */}
</div>
```

### Button Styles

```jsx
// Primary button
<button className="bg-DFBlue text-white px-6 py-3 rounded-lg hover:opacity-90">
  Click me
</button>

// Gradient button
<button className="bg-gradient-to-r from-DFBlue to-DFGreen text-white px-6 py-3 rounded-lg">
  Register
</button>
```

### Badge/Tag

```jsx
<span className="bg-DFBlue text-white px-3 py-1 rounded-full text-sm">
  Tag
</span>
```

## Shadows

```jsx
// Small
<div className="shadow">...</div>

// Medium
<div className="shadow-lg">...</div>

// Large
<div className="shadow-2xl">...</div>

// Custom drop shadow
<div style={{ filter: 'drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.15))' }}>
  ...
</div>
```

## Animations

### Hover Effects

```jsx
// Scale on hover
<div className="hover:scale-105 transition-transform">...</div>

// Opacity on hover
<div className="hover:opacity-90 transition-opacity">...</div>

// Shadow on hover
<div className="shadow-lg hover:shadow-xl transition-shadow">...</div>
```

## Overrides

To add custom styles, edit `src/index.css`:

```css
@layer components {
  .custom-class {
    @apply bg-DFBlue text-white;
    /* Additional custom styles */
  }
}
```

## Best Practices

1. **Use Tailwind classes** instead of inline styles
2. **Responsive first** - design mobile, scale up
3. **Use semantic HTML** - proper heading hierarchy
4. **Consistent spacing** - use Tailwind spacing scale
5. **Reusable patterns** - extract common styles into components

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)
- [Color Palette Generator](https://coolors.co/)

