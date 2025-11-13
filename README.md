# Jonathan's Portfolio No. 4 :star:

A modern, interactive portfolio website built with Three.js & Next.js, featuring 3D models, animations, and responsive design.

## Description

This is a personal portfolio website showcasing web development projects, skills, and experience. It includes interactive 3D models like the James Webb Space Telescope (JWST) and an orbiting satellite, along with smooth animations and a responsive layout.

## Features

- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.
- **3D Models**: Interactive 3D models rendered with Three.js and React Three Fiber.
- **Orbital Animation**: Dynamic background animation simulating orbital motion.
- **Multiple Pages**: Home, About, Projects, and Contact sections.
- **Modern UI**: Clean, modern interface with smooth transitions using Framer Motion.
- **Performance Optimized**: Fast loading with Next.js optimizations.

## Tech Stack

- **Frontend Framework**: Next.js 14.2.10
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: Framer Motion, CSS Keyframes
- **Language**: JavaScript (ES6+)
- **Build Tool**: npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JackSawyerWATX/JMF-Portfolio-4.git
   cd JMF-Portfolio-4
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Navigate through the site using the navigation menu.
- On the home page, enjoy the orbital background animation with the satellite.
- Visit the About page to see the JWST model and personal details.
- Check out the Projects page for showcased work.
- Use the Contact page to get in touch.

## Project Structure

```
JMF-Portfolio-4/
├── public/
│   ├── audio/
│   ├── background/
│   └── models/
├── src/
│   ├── app/
│   │   ├── (sub pages)/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── projects/
│   │   ├── components/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── hooks/
│   │   │   ├── models/
│   │   │   ├── navigation/
│   │   │   └── projects/
│   │   ├── data.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── HomeBtn.jsx
│       ├── MovingStars.jsx
│       ├── RenderModel.jsx
│       ├── ResponsiveComponent.jsx
│       └── Sound.jsx
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

### I love you all! Happy coding!