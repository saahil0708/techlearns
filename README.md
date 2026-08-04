# Techlearns Monorepo

Welcome to the **Techlearns** repository! This project is organized as a monorepo containing both the frontend application built with Next.js and the backend server built with Express.

---

## 🎯 Product Vision & Core Objective

**Techlearns** is a **Capability Management System (SkillOS)** and **Corporate Experience Learning (CEL)** platform designed to replace conventional LMS video-watching with real company-style workflow simulations, verified evidence generation, competitions, and a recruiter-ready **Skill Passport**.

For full details on our strategic differentiation, key pillars, and architecture implications, see [`docs/VISION.md`](./docs/VISION.md).

---

## 📁 Repository Architecture

```text
techlearns/
├── client/              # Next.js Frontend Application
│   ├── public/          # Static assets
│   ├── src/             # Application source code (App Router, components, styles)
│   └── package.json     # Frontend dependencies & scripts
├── server/              # Express Backend Application
│   ├── package.json     # Backend dependencies & scripts
│   └── index.js         # Entry point
├── CONTRIBUTING.md      # Branching strategy, workflow & PR rules
├── README.md            # Repository overview & setup guide
├── .gitignore           # Global git ignore definitions
└── package.json         # Root monorepo configuration with npm workspaces
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Installation

Install all dependencies across all workspace packages from the root directory:

```bash
npm install
```

---

## 🛠️ Development & Available Scripts

From the root directory, you can manage both workspaces:

- **Start Client (Next.js)**:
  ```bash
  npm run dev:client
  ```

- **Start Server (Express)**:
  ```bash
  npm run dev:server
  ```

- **Build Client (Next.js)**:
  ```bash
  npm run build:client
  ```

- **Lint Client**:
  ```bash
  npm run lint:client
  ```

---

## 🌿 Git & Workflow Strategy

We use a standard branching strategy with protected `main` and `dev` branches:
- **`main`**: Production-ready codebase.
- **`dev`**: Integration branch for new features and bug fixes.
- **`feat/*`**: Feature branches for new functionality.
- **`fix/*`**: Bug fix branches targeting `dev`.
- **`hotfix/*`**: Critical bug fix branches targeting `main` and `dev`.

Refer to [`CONTRIBUTING.md`](./CONTRIBUTING.md) for full details on branch protection rules, code review requirements, and pull request guidelines.
