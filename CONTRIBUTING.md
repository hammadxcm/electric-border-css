# Contributing to Electric Border CSS

First off, thank you for considering contributing to Electric Border CSS! ⚡

It's people like you that make Electric Border CSS such a great tool for the community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Adding Framework Support](#adding-framework-support)

---

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to contact@fyniti.co.uk.

### Our Pledge

- **Be Respectful**: Treat everyone with respect
- **Be Collaborative**: Work together and help each other
- **Be Patient**: Remember that everyone has different skill levels
- **Be Inclusive**: Welcome newcomers and help them learn

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues. When you are creating a bug report, please include as many details as possible:

**Bug Report Template:**

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows, macOS, Linux]
 - Browser: [e.g. chrome 120, safari 17]
 - Framework: [e.g. React 18, Vue 3.3]
 - Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description** of the suggested enhancement
- **Provide specific examples** to demonstrate the steps
- **Describe the current behavior** and **explain the expected behavior**
- **Explain why this enhancement would be useful**

### 🎨 Adding Color Presets

Want to add a new color preset? Great! Here's how:

1. **Add to CSS** (`style.css`):
```css
/* Your new preset */
.electric-neon-blue {
  --electric-border-color: #0099ff;
  --electric-light-color: oklch(from #0099ff l c h);
  --gradient-color: oklch(from #0099ff 0.3 calc(c / 2) h / 0.4);
}
```

2. **Update Components** (React, Vue, Svelte):
```typescript
// Add to type definition
preset?: 'cyan' | 'purple' | ... | 'neon-blue';

// Add to colorPresets object
const colorPresets = {
  ...
  'neon-blue': '#0099ff',
};
```

3. **Update Documentation**:
- Add to README.md color table
- Add to COMPONENTS.md
- Add example to examples.html

### 📝 Improving Documentation

Documentation improvements are always welcome! This includes:

- Fixing typos or grammatical errors
- Adding examples
- Clarifying explanations
- Adding translations

### 🎯 Adding Framework Support

Want to add support for a new framework (Angular, Solid.js, etc.)? Follow these steps:

1. **Create framework directory**:
```bash
mkdir -p components/[framework-name]
```

2. **Implement component** following our patterns
3. **Add comprehensive README.md** with examples
4. **Update main COMPONENTS.md**
5. **Update package.json exports**
6. **Add to main README**

---

## Development Setup

### Prerequisites

- Node.js 16+ or later
- npm, yarn, or pnpm
- Git
- A code editor (VS Code recommended)

### Getting Started

1. **Fork the repository**

Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**

```bash
git clone https://github.com/YOUR_USERNAME/electric-border-css.git
cd electric-border-css
```

3. **Add upstream remote**

```bash
git remote add upstream https://github.com/hammadxcm/electric-border-css.git
```

4. **Create a branch**

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

5. **Make your changes**

Open files in your editor and start coding!

6. **Test your changes**

```bash
# Open examples in browser
open examples.html
open quick-start.html

# Test framework components
cd components/react
npm install
npm test

# Or for Vue
cd components/vue
npm install
npm run dev
```

### Directory Structure

```
electric-border-css/
├── components/
│   ├── react/           # React component
│   ├── nextjs/          # Next.js component
│   ├── vue/             # Vue 3 component
│   └── svelte/          # Svelte component
├── examples.html        # Interactive playground
├── examples.js          # Playground JavaScript
├── quick-start.html     # Single-file template
├── style.css            # Core CSS
├── README.md            # Main documentation
├── COMPONENTS.md        # Framework documentation
├── EXAMPLES.md          # Use case examples
└── CONTRIBUTING.md      # This file
```

---

## Pull Request Process

### Before Submitting

- [ ] Test your changes thoroughly
- [ ] Update documentation if needed
- [ ] Add examples if adding new features
- [ ] Ensure code follows our style guide
- [ ] Update CHANGELOG.md

### Submitting a Pull Request

1. **Commit your changes**

```bash
git add .
git commit -m "feat: add amazing new feature"
```

2. **Push to your fork**

```bash
git push origin feature/your-feature-name
```

3. **Create Pull Request**

Go to the original repository and click "New Pull Request".

**PR Template:**

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran and how to reproduce them.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Screenshots (if applicable)
Add screenshots to help explain your changes.
```

### After Submitting

- Respond to feedback from maintainers
- Make requested changes
- Be patient - reviews can take time!

---

## Coding Standards

### CSS

```css
/* Good: Use meaningful class names */
.electric-card-container {
  /* Properties in logical order */
  display: flex;
  position: relative;
  width: 100%;
  padding: 24px;

  /* Visual properties */
  background: linear-gradient(...);
  border-radius: 24px;

  /* Animations last */
  animation: pulse 3s ease-in-out infinite;
}

/* Good: Use CSS custom properties */
.electric-card {
  color: var(--electric-border-color);
  border: 1px solid var(--electric-border-color);
}

/* Bad: Hardcoded values */
.card {
  color: #00fffb; /* Use variable instead */
}
```

### JavaScript/TypeScript

```tsx
// Good: Use TypeScript
interface Props {
  color: string;
  width: number;
}

// Good: Descriptive function names
function applyElectricEffect(element: HTMLElement) {
  // ...
}

// Good: Comments for complex logic
// Calculate relative luminance for WCAG contrast
function getLuminance(color: string): number {
  // Implementation
}

// Bad: Unclear names
function doStuff(x) {
  // ...
}
```

### React/Vue/Svelte

```tsx
// Good: Prop validation
interface ElectricBorderProps {
  preset?: 'cyan' | 'purple' | 'pink'; // Strict types
  width?: number;
}

// Good: Default values
const ElectricBorder: React.FC<Props> = ({
  preset = 'cyan',
  width = 350,
}) => {
  // ...
};

// Good: Descriptive component names
export const ElectricBorder = () => { /* ... */ };

// Bad: Generic names
export const Component1 = () => { /* ... */ };
```

### File Naming

- **Components**: PascalCase - `ElectricBorder.tsx`
- **Utilities**: camelCase - `colorUtils.ts`
- **Styles**: kebab-case - `electric-border.css`
- **Documentation**: UPPERCASE - `README.md`, `CONTRIBUTING.md`

---

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semi colons, etc)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
# Good commits
git commit -m "feat(react): add purple color preset"
git commit -m "fix(vue): resolve reactivity issue with color prop"
git commit -m "docs: update installation instructions"
git commit -m "style(css): improve animation performance"

# Bad commits
git commit -m "fixed stuff"
git commit -m "updates"
git commit -m "WIP"
```

### Detailed Commit

```bash
git commit -m "feat(components): add orange preset for all frameworks

- Add orange color preset (#ff6600)
- Update all framework components
- Add documentation and examples
- Update color table in README

Closes #123"
```

---

## Adding Framework Support

### Checklist for New Framework

- [ ] Create `components/[framework]/` directory
- [ ] Implement component with full TypeScript support
- [ ] Add comprehensive README.md with:
  - [ ] Installation instructions
  - [ ] Basic usage examples
  - [ ] Advanced examples
  - [ ] Props documentation
  - [ ] Troubleshooting section
- [ ] Add to main COMPONENTS.md
- [ ] Update package.json exports
- [ ] Update main README.md
- [ ] Add examples to EXAMPLES.md
- [ ] Test thoroughly
- [ ] Create demo/sandbox link

### Component Requirements

All framework components must:
- Support all 8 color presets
- Accept custom colors
- Support customization props (width, height, speed, etc.)
- Include TypeScript definitions
- Respect `prefers-reduced-motion`
- Support custom content (children/slots)
- Have click handlers/events
- Include hover effects (optional disable)
- Be fully documented

---

## Questions?

Don't hesitate to ask questions!

- **GitHub Discussions**: [Start a discussion](https://github.com/hammadxcm/electric-border-css/discussions)
- **Issues**: [Open an issue](https://github.com/hammadxcm/electric-border-css/issues)
- **Email**: contact@fyniti.co.uk

---

## Recognition

Contributors will be:
- Listed in CHANGELOG.md
- Mentioned in release notes
- Added to GitHub contributors page
- Featured in README (for significant contributions)

---

## License

By contributing to Electric Border CSS, you agree that your contributions will be licensed under the MIT License.

---

<div align="center">

**Thank you for contributing!** ⚡

Made with ❤️ by the Electric Border CSS community

</div>
