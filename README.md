# Minecraft Themed Website - GD-XR

A beautiful Minecraft-themed website built with Next.js, featuring optimized images using Next.js Image component.

## Features

- 🎮 Minecraft-themed design with pixelated aesthetics
- 🖼️ Image optimization using Next.js Image component
- 🎨 Custom Minecraft color palette and styling
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js App Router
- 🎯 TypeScript for type safety

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Image Optimization

This project uses Next.js Image component for automatic image optimization:
- Automatic format conversion (WebP, AVIF)
- Responsive images with proper sizing
- Lazy loading for better performance
- Pixelated rendering for Minecraft aesthetic

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── explore/       # Explore page
│   ├── build/          # Build page
│   └── globals.css     # Global styles
├── next.config.js      # Next.js configuration with image optimization
└── tailwind.config.ts  # Tailwind configuration with Minecraft colors
```

## Customization

You can replace the placeholder images with actual Minecraft screenshots or assets. The images are optimized automatically by Next.js.

## Build for Production

```bash
npm run build
npm start
```


