# Contribution Guidelines & Branching Strategy

Thank you for contributing to **Techlearns**! To maintain code quality, consistency, and a reliable release process, all team members must follow this standard Git workflow and branching convention.

---

## 🌿 Branching Model

We follow a Git Flow-inspired branching strategy structured around two main branches: `main` and `dev`.

### Core Protected Branches

1. **`main`**
   - Represents stable, production-ready code.
   - Direct commits, force pushes, and branch deletions are strictly blocked.
   - Code enters `main` only via Pull Requests (PRs) originating from `dev` (for releases) or `hotfix/*` branches.

2. **`dev`**
   - Serves as the primary integration branch for ongoing development.
   - All feature and fix branches are merged into `dev` after passing review and checks.
   - Direct commits, force pushes, and branch deletions are strictly blocked.

---

## 🏷️ Supporting Branch Naming Conventions

Always create new branches from `dev` (or `main` in the case of hotfixes) using the following prefix patterns:

| Branch Type | Naming Prefix Pattern | Description | Base Branch | Target Branch |
| :--- | :--- | :--- | :--- | :--- |
| **Feature** | `feat/<short-description>` | Adding new features or enhancements | `dev` | `dev` |
| **Bug Fix** | `fix/<short-description>` | Fixing bugs found in development | `dev` | `dev` |
| **Hotfix** | `hotfix/<short-description>` | Emergency fixes for production | `main` | `main` & `dev` |
| **Refactor** | `refactor/<short-description>`| Code cleanup/restructuring without behavior changes | `dev` | `dev` |
| **Documentation** | `docs/<short-description>` | Updating docs, README, or comments | `dev` | `dev` |

*Example branch names:*
- `feat/user-authentication`
- `fix/login-token-expiration`
- `hotfix/security-vulnerability-patch`

---

## 🔄 Pull Request (PR) Workflow

1. **Checkout Base Branch & Pull Latest**:
   ```bash
   git checkout dev
   git pull origin dev
   ```

2. **Create a Topic Branch**:
   ```bash
   git checkout -b feat/course-catalog
   ```

3. **Commit Changes**:
   Write descriptive commit messages explaining *what* and *why*:
   ```bash
   git commit -m "feat: add course catalog grid and filter components"
   ```

4. **Push Branch to Remote**:
   ```bash
   git push -u origin feat/course-catalog
   ```

5. **Open a Pull Request**:
   - Title PR clearly (e.g., `feat: Course catalog interface`).
   - Select target branch (`dev` for features/fixes, `main` for hotfixes).
   - Describe the changes, motivation, and any testing steps.

---

## 🛡️ Branch Protection Rules Summary

To ensure code quality and safety, GitHub Branch Protection Rules are enforced on `main` and `dev`:

1. **Pull Request Required**: Direct pushes to `main` and `dev` are disallowed. All changes must be submitted via PR.
2. **Review Approval Required**: Minimum of **1 approving review** from a peer before merging is permitted.
3. **Block Force Pushes**: Force pushing (`git push --force`) is disabled to preserve commit history.
4. **Block Branch Deletions**: Deleting `main` or `dev` branches is blocked.

---

## 📝 Commit Message Guidelines

We recommend using Conventional Commits format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `style:` for formatting/styling changes (no code logic change)
- `refactor:` for code restructuring
- `test:` for adding or updating tests
- `chore:` for build system/dependency updates
