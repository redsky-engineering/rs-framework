# RedSky Framework

A UI component kit for building React projects. It includes React components, custom hooks, and utility helpers. The component layer is built on **PrimeReact** (with **PrimeIcons**).

## Requirements

- **Node.js** 18 or newer
- **pnpm** (the repo pins a version in `packageManager` in `package.json`; enable [Corepack](https://nodejs.org/api/corepack.html) or install that pnpm so installs stay reproducible)

## Usage in an application

Install the package from npm (or link / `file:` a local build; see **Building** below).

Notice: Starting with v2.0.0, the framework only provides ES module support.

### Peer dependencies

Your app must provide **React** and **React DOM** versions compatible with the framework’s peer range:

- `react` **^18.3.1** or **^19.0.0**
- `react-dom` **^18.3.1** or **^19.0.0**

Example:

```bash
pnpm add react react-dom
pnpm add @redskytech/framework
```

### PrimeReact and icons

The framework ships with **PrimeReact** and **PrimeIcons** as its own dependencies. You do not need to add them only to satisfy the framework. If your app also imports **PrimeReact** or themes directly, keep versions aligned with what the framework uses (see `dependencies` in `package.json`) to avoid duplicate incompatible copies.

### Styles

Import the bundled framework stylesheet once (for example in your root `App.tsx`):

```ts
import '@redskytech/framework/index.css';
```

Some components need extra wiring. For example, **popupController** expects `popupController.instance` in your app tree. See Storybook stories for examples.

### Animate on scroll

To initialize AoS, import the `useInitAnimateOnScroll` hook and call it once in your app shell (for example `App.tsx`).

## Demo (Storybook)

Storybook documents and demonstrates components. From the repository root:

```bash
pnpm install
pnpm run storybook
```

## Playground

For a small Vite app while working on the framework, use the `playground` package:

```bash
cd playground
pnpm install
pnpm start
```

## Building

From the repository root:

```bash
pnpm install
pnpm run build
```

Output is a publishable package under **`dist/`** (ES modules, `package.json` adjusted in postbuild).

To produce a tarball for testing in another project without publishing:

```bash
pnpm run build:local
```

That writes a `.tgz` next to `package.json`. In the consumer project you can install it with `pnpm add /absolute/path/to/redskytech-framework-*.tgz`, or point `dependencies` at `file:../path/to/framework/dist`.

## Publishing

First confirm the build passes, then commit and push your changes on the branch you release from (for example `master`).

Publishing requires membership in the **@redskytech** organization with publish rights.

1. Bump version and changelog (uses **commit-and-tag-version**):

    ```bash
    pnpm run release:patch   # or release:minor, release:major, release:pre:alpha
    ```

2. Push commits and tags:

    ```bash
    git push --follow-tags origin master
    ```

3. Publish the contents of `dist` to npm:

    ```bash
    pnpm run build:publish
    ```

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) so release tooling can update `CHANGELOG.md` automatically.
