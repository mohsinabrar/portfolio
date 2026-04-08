# Mohd Mohsin - Developer Portfolio

A futuristic, modern, and interactive developer portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Glassmorphism Design** - Premium glass-like UI elements
- **Dark Theme** - Neon blue/purple gradient accents
- **Smooth Animations** - Framer Motion powered transitions
- **Dynamic GitHub Integration** - Fetches projects from GitHub API
- **Fully Responsive** - Works on mobile and desktop
- **Particle Background** - Animated floating particles
- **Custom Cursor Glow** - Interactive cursor effect
- **Scroll Animations** - Sections animate on scroll

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG

## Sections

1. **Hero** - Name, title, typing animation, CTAs
2. **About** - Personal summary with animated cards
3. **Skills** - Categorized with animated progress bars
4. **Projects** - GitHub API powered with fallback
5. **Experience** - Timeline layout
6. **Achievements** - Awards and certifications
7. **Contact** - Form with validation + social links
8. **Footer** - Social links and copyright

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to portfolio directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx          # Fixed navbar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects with GitHub API
│   ├── Experience.tsx      # Experience timeline
│   ├── Achievements.tsx    # Achievements grid
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   ├── CursorGlow.tsx     # Cursor effect
│   └── SocialIcons.tsx     # Custom SVG icons
├── lib/
│   └── github.ts           # GitHub API helpers
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Update Personal Info

Edit the components to update:
- **Name/Title**: `Hero.tsx`
- **About text**: `About.tsx`
- **Skills**: `Skills.tsx`
- **Experience**: `Experience.tsx`
- **Contact info**: `Contact.tsx`

### Update GitHub Username

The GitHub username is set to `mohsinabrar`. To change:
1. Edit `lib/github.ts`
2. Update in `Projects.tsx` where `getGithubRepos('mohsinabrar')` is called

### Update Resume Link

Update the resume download link in `Hero.tsx`:
```tsx
href="https://github.com/mohsinabrar/resume"
```

## License

MIT License - Feel free to use and modify for your own portfolio.
