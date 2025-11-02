# Getting Started with DevFest Template

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Development](#development)
5. [Building for Production](#building-for-production)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- A code editor (VS Code recommended)

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/devfest-template.git
cd devfest-template
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your event details. See [Environment Variables Guide](./ENVIRONMENT_VARIABLES.md) for details.

### Step 4: Start Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Configuration

### Essential Configuration

1. **Event Details**: Update event name, date, and description
2. **Venue Information**: Add your venue details and map
3. **Social Media**: Add your social media links
4. **Registration**: Update Eventbrite registration URL
5. **Sessionize**: Configure API endpoints for speakers/sessions

See [Environment Variables](./ENVIRONMENT_VARIABLES.md) for complete list.

### Quick Configuration Checklist

- [ ] Event name and date
- [ ] Venue details
- [ ] Registration URL
- [ ] Social media links
- [ ] Chapter name and email
- [ ] Sessionize API endpoints
- [ ] Images (logo, hero image)

## Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (not recommended)
npm run eject
```

### Project Structure

```
devfest-template/
├── public/           # Static files
├── src/
│   ├── components/   # Reusable components
│   ├── pages/       # Page components
│   ├── assets/      # Images and fonts
│   └── util/        # Utility functions
├── .env             # Environment variables (create this)
└── package.json     # Dependencies
```

## Building for Production

### Build

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy

The template is configured for Netlify deployment. To deploy:

1. Build the project
2. Push to GitHub
3. Connect to Netlify
4. Deploy!

For other platforms, see the deployment guide in the main README.

## Troubleshooting

### Common Issues

**Issue**: Port 3000 already in use
```bash
# Kill the process or use a different port
PORT=3001 npm start
```

**Issue**: Module not found errors
```bash
npm install
```

**Issue**: Environment variables not working
- Ensure `.env` file exists in root directory
- Restart development server
- Variables must start with `REACT_APP_`

## Next Steps

- [Customize Page Templates](./PAGE_TEMPLATES.md)
- [Understand Components](./COMPONENTS.md)
- [Configure Environment Variables](./ENVIRONMENT_VARIABLES.md)
- [Learn About Styling](./STYLING.md)

## Getting Help

- Read the [Component Documentation](./COMPONENTS.md)
- Check [Environment Variables Guide](./ENVIRONMENT_VARIABLES.md)
- Review code comments in the source files

