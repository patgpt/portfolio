# Portfolio Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)](https://tailwindcss.com/)

A modern, performant portfolio website built with Next.js, Prismic CMS, and Tailwind CSS.

## 🚀 Demo

- **Live Site**: [View Demo](https://your-portfolio-url.com)
- **Preview**:
  ![Portfolio Preview](path-to-preview-image.png)

## ✨ Key Features

- **Dynamic Content Management**: Powered by **Prismic** for seamless updates.
- **Responsive Design**: Fully optimized for all screen sizes using **Tailwind CSS** and **DaisyUI**.
- **Smooth Animations**: Integrated with **Framer Motion** for elegant user interactions.
- **Light and Dark Themes**: Supports theming via **next-themes**.

---

## 🛠 Technologies Used

- **Framework**: Next.js (15.1.0)
- **Styling**: Tailwind CSS, DaisyUI
- **Content Management**: Prismic
- **Animation**: Framer Motion
- **Utilities**: clsx, tailwind-merge

---

## 🏗 Project Structure

```
portfolio/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── lib/             # Utility functions and configurations
├── public/          # Static assets
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- Bun package manager
- Prismic account

### Environment Setup

1. **Create `.env.local`**:
   ```bash
   NEXT_PUBLIC_PRISMIC_ENDPOINT=your-repo-name.cdn.prismic.io
   PRISMIC_ACCESS_TOKEN=your-access-token
   ```

### Installation

1. **Clone and Install**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   bun install
   ```

2. **Start Development Server**
   ```bash
   bun run dev
   ```

## 📝 Available Scripts

| Script                 | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| `bun run dev`          | Starts the development server with Turbopack and SliceMachine |
| `bun run build`        | Builds the project for production                             |
| `bun start`            | Starts the production server                                  |
| `bun run lint`         | Runs ESLint for code quality checks                           |
| `bun run slicemachine` | Launches Prismic SliceMachine UI                              |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👏 Acknowledgments

- Next.js Team
- Prismic CMS
- Tailwind CSS Community
- DaisyUI Contributors
