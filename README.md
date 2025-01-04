# Portfolio Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)](https://tailwindcss.com/)

<!-- Status Badges -->
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
[![CI/CD](https://github.com/username/portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/username/portfolio/actions)
[![Uptime](https://img.shields.io/uptimerobot/ratio/7/m123456789-123456789012345)](https://stats.uptimerobot.com/)

<!-- Stack Badges -->
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prismic CMS](https://img.shields.io/badge/Prismic_CMS-latest-white?logo=prismic)](https://prismic.io/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.18.0-ff69b4)](https://www.framer.com/motion/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-4.6.0-green)](https://daisyui.com/)
[![ESLint](https://img.shields.io/badge/ESLint-8.56.0-4B32C3?logo=eslint)](https://eslint.org/)

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

We use [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This is automatically enforced using [Husky](https://typicode.github.io/husky/), which checks your commit messages before they're finalized.

#### How it works

Your commit message should be structured like this:

```
type(scope): description

[optional body]
[optional footer(s)]
```

Common types include:

- `feat:` A new feature (e.g., `feat: add dark mode toggle`)
- `fix:` A bug fix (e.g., `fix: resolve mobile menu overlap`)
- `docs:` Documentation changes (e.g., `docs: update installation steps`)
- `style:` Code style changes (e.g., `style: format with prettier`)
- `refactor:` Code changes that neither fix bugs nor add features
- `test:` Adding or modifying tests
- `chore:` Updates to build process, tools, etc.

If you try to commit without following this format, Husky will prevent the commit and show an error message. This helps maintain consistent commit history!

#### Example commit messages

```bash
feat(nav): add hamburger menu for mobile
fix(auth): resolve login timeout issue
docs(readme): update deployment instructions
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👏 Acknowledgments

- Next.js Team
- Prismic CMS
- Tailwind CSS Community
- DaisyUI Contributors
