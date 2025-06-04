# Luxora - Premium Website Generator

A high-end, professional website generator that creates custom landing pages for international businesses with interactive design elements and premium aesthetics.

## Features

- **Professional Landing Page**: Modern, responsive design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with sticky header
- **Hero Section**: Gradient text effects and compelling call-to-action buttons
- **Services Showcase**: Premium service cards with hover animations
- **Client Testimonials**: Social proof with ratings and client feedback
- **Contact Form**: Functional contact form with backend API integration
- **File-Based Storage**: Portable data storage using JSON files (no external database required)

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Build Tool**: Vite
- **UI Components**: Radix UI + shadcn/ui
- **Storage**: JSON file-based storage
- **Styling**: Custom CSS animations with Tailwind

## Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd luxora-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5000`

## Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings:
     - Framework Preset: `Other`
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

3. **Environment Variables** (if needed)
   - No external environment variables required for basic functionality
   - All data is stored in JSON files within the project

### Other Deployment Options

**Netlify**:
- Build command: `npm run build`
- Publish directory: `dist`

**Railway/Render**:
- Automatically detects Node.js application
- Uses the start script from package.json

## File Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   └── lib/           # Utilities and config
├── server/                 # Backend Express server
│   ├── storage.ts         # File-based storage system
│   ├── routes.ts          # API routes
│   └── index.ts           # Server entry point
├── shared/                 # Shared types and schemas
├── data/                  # JSON data files (auto-created)
└── dist/                  # Built application (auto-generated)
```

## Customization

### Colors and Branding
- Edit `client/src/index.css` for color variables
- Update logo and company name in navigation component
- Modify content in component files

### Content
- **Hero Section**: `client/src/components/hero.tsx`
- **About Section**: `client/src/components/about.tsx`
- **Services**: `client/src/components/services.tsx`
- **Testimonials**: `client/src/components/testimonials.tsx`

### Contact Form
- Form submissions are automatically saved to `data/contacts.json`
- Access submissions via GET request to `/api/contact`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Data Storage

The application uses a portable file-based storage system:
- Contact submissions: `data/contacts.json`
- User data: `data/users.json`
- Files are automatically created when needed
- No external database required
- Perfect for deployment on static hosting platforms

## Support

For questions or customization requests, please refer to the documentation or create an issue in the repository.