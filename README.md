# 🚀 Zeki Akgül - Portfolio Website

> Modern, animated personal portfolio built with React 19 & Vite

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://zexy2.github.io/my-portfolio-vite/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

<p align="center">
  <img src="docs/preview.png" alt="Portfolio Preview" width="800">
</p>

## ✨ Features

- **⚡ Blazing Fast** - Built with Vite for instant HMR and optimized builds
- **🎨 Particle Animation** - Interactive tsParticles background
- **📱 Fully Responsive** - Works on all devices and screen sizes
- **🎯 Single Page App** - Smooth navigation with React
- **🌐 GitHub Pages** - Automated deployment with GitHub Actions
- **♿ Accessible** - Semantic HTML and keyboard navigation

## 🛠️ Tech Stack

| Category       | Technologies                 |
| -------------- | ---------------------------- |
| **Framework**  | React 19, Vite 7             |
| **Styling**    | CSS3, Flexbox, Grid          |
| **Animation**  | tsParticles                  |
| **Deployment** | GitHub Pages, GitHub Actions |
| **Linting**    | ESLint                       |

## 📂 Project Structure

```
my-portfolio-vite/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Projects.jsx   # Projects showcase
│   │   └── ParticlesBackground.jsx
│   ├── App.jsx            # Main app component
│   ├── App.css            # App styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .github/workflows/     # CI/CD configuration
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zexy2/my-portfolio-vite.git
cd my-portfolio-vite

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint                        |

## 🌐 Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions.

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting
```

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Set source to `gh-pages` branch
3. Push to `main` branch to trigger deployment

## 📝 Customization

### Update Personal Info

Edit `src/App.jsx` to update:
- Name and title
- About description
- Projects data
- Social links

### Modify Styling

- Global styles: `src/index.css`
- Component styles: `src/components/*.css`
- App styles: `src/App.css`

### Particle Animation

Configure in `src/components/ParticlesBackground.jsx`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Zeki Akgül**

- GitHub: [@zexy2](https://github.com/zexy2)
- LinkedIn: [zeki-akgül](https://linkedin.com/in/zeki-akgül)
- Email: zekiakgul09@gmail.com

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">
  Made with ❤️ using React & Vite
</p>
